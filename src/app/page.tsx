import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import TechStack from '@/components/sections/TechStack'
import Showcase from '@/components/sections/Showcase'

export default function page() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
      <TechStack />
      <Showcase />
      <Testimonials />
      <CTA />
    </div>
  )
}