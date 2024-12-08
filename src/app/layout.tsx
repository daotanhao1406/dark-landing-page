import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nextjs Landing Page',
  description: 'A modern animation landing page built with Next.js 14',
  keywords: ['landing page', 'next.js', 'react', 'animation'],
  openGraph: {
    title: 'Nextjs Landing Page',
    description: 'A modern animation landing page built with Next.js 14',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html  className='dark' lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}