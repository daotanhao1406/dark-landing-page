'use client'
import { motion } from 'framer-motion'
import { Button } from "../ui/button"

const plans = [
  {
    name: 'Starter',
    price: '$0',
    features: ['Basic Components', 'Community Support', '1 Project'],
    recommended: false
  },
  {
    name: 'Pro',
    price: '$49',
    features: ['Advanced Components', 'Priority Support', 'Unlimited Projects'],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['Custom Components', 'Dedicated Support', 'Custom Solutions'],
    recommended: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that works best for you</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg ${
                plan.recommended ? 'bg-primary ' : ''
              } shadow-lg`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.recommended ? 'secondary' : 'default'}
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}