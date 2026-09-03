/**
 * Syncs live GitHub metadata for the repos referenced by featured projects
 * and regenerates `lib/data/repo-stats.ts`.
 *
 * The list of repos is not hardcoded: it is derived from the `github:` URLs
 * in `lib/data/portfolio.ts`, so adding a new featured project with a GitHub
 * link automatically starts tracking it on the next run.
 *
 * Run manually:   node scripts/sync-repos.mjs
 * In CI:          GITHUB_TOKEN is used when available (avoids rate limits).
 * No dependencies: uses Node's built-in fetch (Node >= 18).
 */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..")
const PORTFOLIO_FILE = join(ROOT, "lib", "data", "portfolio.ts")
const OUTPUT_FILE = join(ROOT, "lib", "data", "repo-stats.ts")

const TOKEN = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN ?? ""

async function fetchRepo(owner, repo) {
  const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-repo-sync",
    "X-GitHub-Api-Version": "2022-11-28",
  }
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`

  const res = await fetch(url, { headers })
  if (res.status === 404) return null
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status} for ${owner}/${repo}: ${await res.text()}`)
  }
  return res.json()
}

/**
 * Returns the total commit count on the default branch.
 *
 * GitHub's repo endpoint does not expose commit counts, so we request one
 * commit per page and read the total page count from the `Link` header's
 * `rel="last"` entry. If there is no pagination header, the body tells us
 * whether there are 0 or 1 commits.
 */
async function fetchCommitCount(owner, repo) {
  const url = `https://api.github.com/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}/commits?per_page=1`
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "portfolio-repo-sync",
    "X-GitHub-Api-Version": "2022-11-28",
  }
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`

  const res = await fetch(url, { headers })
  if (res.status === 404) return 0
  if (!res.ok) {
    throw new Error(`GitHub API ${res.status} for ${owner}/${repo} commits: ${await res.text()}`)
  }

  const link = res.headers.get("link") ?? ""
  const last = /<[^>]*[?&]page=(\d+)[^>]*>;\s*rel="last"/.exec(link)
  if (last) return Number(last[1])

  const body = await res.json()
  return Array.isArray(body) ? body.length : 0
}

/** Extracts repo full names (owner/repo) from `github:` URLs in portfolio.ts. */
function extractRepos(source) {
  const urls = [...source.matchAll(/github:\s*["']([^"']+)["']/g)].map((m) => m[1])
  const repos = new Set()
  for (const url of urls) {
    const match = url.match(/^https:\/\/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/)
    if (match) repos.add(`${match[1]}/${match[2]}`)
  }
  return [...repos].sort()
}

function tsString(value) {
  return `"${String(value)
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/\r/g, "\\r")
    .replace(/\n/g, "\\n")
    .replace(/\t/g, "\\t")}"`
}

function tsArray(values) {
  return `[${values.map((v) => tsString(v)).join(", ")}]`
}

function renderStats(stats) {
  const lines = []
  lines.push("export interface RepoStats {")
  lines.push("  stars: number")
  lines.push("  forks: number")
  lines.push("  openIssues: number")
  lines.push("  /** Total commits on the default branch. */")
  lines.push("  commits: number")
  lines.push("  primaryLanguage: string | null")
  lines.push("  topics: string[]")
  lines.push("  description: string | null")
  lines.push("  homepage: string | null")
  lines.push("  /** ISO 8601 timestamp of the last push to the default branch. */")
  lines.push("  pushedAt: string")
  lines.push("}")
  lines.push("")
  lines.push("export const REPO_STATS: Record<string, RepoStats> = {")
  for (const [fullName, repo] of Object.entries(stats)) {
    lines.push(`  ${tsString(fullName)}: {`)
    lines.push(`    stars: ${repo.stars},`)
    lines.push(`    forks: ${repo.forks},`)
    lines.push(`    openIssues: ${repo.openIssues},`)
    lines.push(`    commits: ${repo.commits},`)
    lines.push(`    primaryLanguage: ${repo.primaryLanguage ? tsString(repo.primaryLanguage) : "null"},`)
    lines.push(`    topics: ${tsArray(repo.topics)},`)
    lines.push(`    description: ${repo.description ? tsString(repo.description) : "null"},`)
    lines.push(`    homepage: ${repo.homepage ? tsString(repo.homepage) : "null"},`)
    lines.push(`    pushedAt: ${tsString(repo.pushedAt)},`)
    lines.push("  },")
  }
  lines.push("}")
  return lines.join("\n") + "\n"
}

async function main() {
  const source = readFileSync(PORTFOLIO_FILE, "utf8")
  const repos = extractRepos(source)

  if (repos.length === 0) {
    console.error(`No github: URLs found in ${PORTFOLIO_FILE}`)
    process.exit(1)
  }

  console.log(`Tracking ${repos.length} repo(s): ${repos.join(", ")}`)

  const stats = {}
  for (const fullName of repos) {
    const [owner, repo] = fullName.split("/")
    const data = await fetchRepo(owner, repo)
    if (!data) {
      console.warn(`  ! ${fullName} -> not found (404); skipping`)
      continue
    }
    let commits = 0
    try {
      commits = await fetchCommitCount(owner, repo)
    } catch (err) {
      console.warn(`  ! ${fullName} -> commit count unavailable: ${err.message}`)
    }
    stats[fullName] = {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      openIssues: data.open_issues_count ?? 0,
      commits,
      primaryLanguage: data.language ?? null,
      topics: Array.isArray(data.topics) ? data.topics : [],
      description: data.description ?? null,
      homepage: data.homepage || null,
      pushedAt: data.pushed_at ?? "",
    }
    console.log(
      `  + ${fullName}: ★ ${stats[fullName].stars}, ${stats[fullName].commits} commits, ${stats[fullName].primaryLanguage ?? "no language"}, pushed ${stats[fullName].pushedAt}`,
    )
  }

  const header = [
    "// AUTO-GENERATED by scripts/sync-repos.mjs - do not edit manually.",
    "// Regenerated daily by the sync-portfolio GitHub Action.",
    "",
  ].join("\n")

  const nextContent = header + renderStats(stats)
  const currentContent = (() => {
    try {
      return readFileSync(OUTPUT_FILE, "utf8")
    } catch {
      return null
    }
  })()

  if (currentContent === nextContent) {
    console.log("No changes - repo-stats.ts is up to date.")
    return
  }

  mkdirSync(dirname(OUTPUT_FILE), { recursive: true })
  writeFileSync(OUTPUT_FILE, nextContent)
  console.log(`Updated ${OUTPUT_FILE}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})