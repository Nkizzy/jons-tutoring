import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "Jon's Tutoring - Premium Math Tutoring Services",
  description: "Professional math tutoring services for students of all levels. Expert instruction in algebra, calculus, geometry, and more. Transform your math skills with personalized learning.",
  keywords: "math tutoring, private tutor, algebra tutor, calculus tutor, geometry tutor, math help, academic support",
  authors: [{ name: "Jon's Tutoring" }],
  creator: "Jon's Tutoring",
  publisher: "Jon's Tutoring",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jonstutoring.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jon's Tutoring - Premium Math Tutoring Services",
    description: "Professional math tutoring services for students of all levels. Expert instruction in algebra, calculus, geometry, and more.",
    url: 'https://jonstutoring.com',
    siteName: "Jon's Tutoring",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Jon's Tutoring - Premium Math Tutoring",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jon's Tutoring - Premium Math Tutoring Services",
    description: "Professional math tutoring services for students of all levels.",
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 