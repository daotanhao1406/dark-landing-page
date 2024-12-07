'use client'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b ">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Build Beautiful Web Applications
            <span className="text-primary"> Faster</span>
          </h1>
          <p className="text-xl mb-8">
            A modern development toolkit that helps you create stunning web applications
            with pre-built components and powerful features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">View Documentation</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}