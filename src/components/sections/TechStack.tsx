'use client'
import { motion } from 'framer-motion'
import BeautifulCard from '../ui/beautiful-card'

const MotionDiv = motion.div

type Technology = {
  title: string
  description: string
  icon: string
  link: string
}

const technologies = [
  {
    title: 'Next.js 14',
    description: 'The React Framework for Production',
    icon: '⚡',
    link: 'https://nextjs.org/'
  },
  // {
  //   title: 'TypeScript',
  //   description: 'Type-Safe JavaScript Development',
  //   icon: '📝',
  //   link: 'https://www.typescriptlang.org/'
  // },
  {
    title: 'Tailwind CSS',
    description: 'Utility-First CSS Framework',
    icon: '🎨',
    link: 'https://tailwindcss.com/'
  },
  {
    title: 'Framer Motion',
    description: 'Production-Ready Animations',
    icon: '✨',
    link: 'https://motion.dev/'
  }
]

export default function TechStack() {
  return (
    <section id='features' className="py-20">
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
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-transparent border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
              
            </MotionDiv>
          ))}
        </div> */}
          {/* <HoverEffect items={technologies} /> */}
 
          <ul className="space-y-6 gap-6 mt-8 max-w-7xl mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
        {technologies.map((item: Technology, key: number) => (
          <motion.div key={key}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: key * 0.2 }}
          viewport={{ once: true }}>
          <BeautifulCard link={item.link} key={key} icon={item.icon} title={item.title} description={item.description} />
          </motion.div>
        ))}
      </ul>
      </div>
    </section>
  )
}