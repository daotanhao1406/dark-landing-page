'use client'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const technologies = [
  {
    name: 'Next.js 14',
    description: 'The React Framework for Production',
    icon: '⚡'
  },
  {
    name: 'TypeScript',
    description: 'Type-Safe JavaScript Development',
    icon: '📝'
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-First CSS Framework',
    icon: '🎨'
  },
  {
    name: 'Framer Motion',
    description: 'Production-Ready Animations',
    icon: '✨'
  }
]

export default function TechStack() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Built With Modern Tech</h2>
          <p className="text-xl text-gray-600">Powered by the latest technologies</p>
        </MotionDiv>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}