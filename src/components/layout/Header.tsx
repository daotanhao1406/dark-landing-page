'use client'
import Link from 'next/link'
import { useCallback } from 'react'
import { scrollToSection } from '@/lib/scroll'
import { Button } from '../ui/Button'

export default function Header() {
  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }, [])

  return (
    <header className="fixed w-full backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          HoverBoard
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#features"
            onClick={(e) => handleNavClick(e, 'features')}
            className="hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            onClick={(e) => handleNavClick(e, 'pricing')}
            className="hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleNavClick(e, 'testimonials')}
            className="hover:text-primary transition-colors"
          >
            Testimonials
          </a>
          <Button>Get Started</Button>
        </div>
      </nav>
    </header>
  )
}