import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: {
    default: 'Juan Camilo Rojas Ospina — Software Engineer & Full-Stack Developer',
    template: '%s | Juan Camilo Rojas Ospina',
  },
  description:
    'Building products, designing systems, and shipping software. Full-stack developer specialized in reactive microservices, cloud architecture, and applied AI.',
  keywords: [
    'software engineer',
    'full-stack developer',
    'react',
    'next.js',
    'spring boot',
    'cloud architecture',
    'microservices',
    'TypeScript',
  ],
  metadataBase: new URL('https://juancamilo-rojas.dev'),
  openGraph: {
    title: 'Juan Camilo Rojas Ospina — Software Engineer & Full-Stack Developer',
    description:
      'Building products, designing systems, and shipping software. Reactive microservices, cloud architecture, and applied AI.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Juan Camilo Rojas Ospina — Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Camilo Rojas Ospina — Software Engineer & Full-Stack Developer',
    description:
      'Building products, designing systems, and shipping software. Reactive microservices, cloud architecture, and applied AI.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Juan Camilo Rojas Ospina',
  jobTitle: 'Software Engineer & Full-Stack Developer',
  url: 'https://juancamilo-rojas.dev',
  email: 'juankos0714@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Armenia',
    addressRegion: 'Quindio',
    addressCountry: 'CO',
  },
  sameAs: [
    'https://github.com/Juankos0714',
    'https://www.linkedin.com/in/juan-camilo-rojas-ospina-453793175/',
  ],
  knowsAbout: [
    'Software Engineering',
    'Full-Stack Development',
    'Microservices Architecture',
    'Cloud Architecture',
    'TypeScript',
    'React',
    'Next.js',
    'Spring Boot',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:border focus:border-border focus:text-sm"
          >
            Skip to main content
          </a>
          <div id="main-content">
            {children}
          </div>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
