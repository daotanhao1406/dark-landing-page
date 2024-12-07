'use client'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const stats = [
  { value: '10K+', label: 'Active Users' },
  { value: '50M+', label: 'Lines of Code' },
  { value: '99.9%', label: 'Uptime' },
  { value: '24/7', label: 'Support' }
]

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg opacity-80">{stat.label}</div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
}