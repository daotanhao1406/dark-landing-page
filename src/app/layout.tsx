import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store Landing Page',
  description: 'Welcome to our innovative store platform - discover amazing products and services.',
  keywords: 'store, shopping, products, services, e-commerce',
  openGraph: {
    title: 'Store Landing Page',
    description: 'Welcome to our innovative store platform - discover amazing products and services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Store Landing Page'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}