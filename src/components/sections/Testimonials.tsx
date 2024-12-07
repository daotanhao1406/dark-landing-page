'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote: "This toolkit has revolutionized our development process. We're shipping features faster than ever.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp"
  },
  {
    quote: "The components are beautiful and the documentation is excellent. Exactly what we needed.",
    author: "Mike Thompson",
    role: "Lead Developer, StartupX"
  },
  {
    quote: "Outstanding support and regular updates. It's been a game-changer for our team.",
    author: "Emily Chen",
    role: "Product Manager, InnovateCo"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-xl text-gray-600">Trusted by developers worldwide</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <svg
                className="w-8 h-8 text-primary mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}