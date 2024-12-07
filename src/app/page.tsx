import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import TechStack from '@/components/sections/TechStack'
import Showcase from '@/components/sections/Showcase'
import Stats from '@/components/sections/Stats'

export default function page() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <Features />
      <TechStack />
      <Showcase />
      <Stats />
      <Pricing />
      <Testimonials />
      <CTA />
    </div>
  )
}