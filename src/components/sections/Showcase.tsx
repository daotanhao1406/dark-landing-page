'use client'
import { motion } from 'framer-motion'

const MotionDiv = motion.div

const showcaseItems = [
  {
    title: 'Beautiful UI Components',
    description: 'Pre-built components that look great out of the box and are fully customizable.',
    image: '/placeholder.jpg'
  },
  {
    title: 'Responsive Design',
    description: 'Layouts that work perfectly across all devices and screen sizes.',
    image: '/placeholder.jpg'
  },
  {
    title: 'Performance Optimized',
    description: 'Built with performance in mind, ensuring fast load times and smooth interactions.',
    image: '/placeholder.jpg'
  }
]

export default function Showcase() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600">Discover what makes our solution stand out</p>
        </MotionDiv>

        {showcaseItems.map((item, index) => (
          <MotionDiv
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } items-center gap-8 mb-20`}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.description}</p>
            </div>
            <div className="flex-1 relative h-[300px] w-full">
              <div className="bg-gray-200 rounded-lg w-full h-full"></div>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}