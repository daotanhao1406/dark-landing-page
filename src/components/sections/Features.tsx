'use client'
import { motion } from 'framer-motion'
import { 
  BeakerIcon, 
  BoltIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: BeakerIcon,
    title: 'Modern Technology Stack',
    description: 'Built with the latest technologies including React, TypeScript, and Next.js 14.'
  },
  {
    icon: BoltIcon,
    title: 'Lightning Fast',
    description: 'Optimized for performance with server-side rendering and static generation.'
  },
  {
    icon: SparklesIcon,
    title: 'Beautiful Design',
    description: 'Professionally designed components that look great out of the box.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to build amazing applications</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}