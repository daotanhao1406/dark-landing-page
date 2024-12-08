'use client'
import { motion } from 'framer-motion'
import Image from "next/image";
import { Timeline } from '../ui/timeline';
const MotionDiv = motion.div

const data = [
  {
    title: "Beautiful UI Components",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-400 text-xs md:text-xl font-normal mb-8">
        Craft visually stunning and intuitive interfaces with our meticulously designed components. Each element is tailored to bring elegance and functionality to your web pages, ensuring a seamless user experience.
        </p>
        <div className="grid gap-4">
          <Image
            src="/ui-components.jpg"
            alt="startup template"
            width={1600}
            height={1200}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
         
        </div>
      </div>
    ),
  },
  {
    title: "Responsive Design",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-400 text-xs md:text-xl font-normal mb-8">
        Layouts that work perfectly across all devices and screen sizes.
        </p>
        <p className="text-neutral-800 dark:text-neutral-400 text-xs md:text-xl font-normal mb-8">
        Your content will shine on any device! From mobile phones to large desktop screens, our designs adapt flawlessly, providing an engaging experience for users everywhere.
        </p>
        <div className="grid gap-4">
          <Image
            src="/device.png"
            alt="hero template"
            width={3840}
            height={2160}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full"
          />
          
        </div>
      </div>
    ),
  },
  {
    title: "Performance Optimized",
    content: (
      <div>
         <p className="text-neutral-800 dark:text-neutral-400 text-xs md:text-xl font-normal mb-8">
         Build smarter, faster, and better—let’s create something extraordinary!
        </p>
        <p className="text-neutral-800 dark:text-neutral-400 text-xs md:text-xl font-normal mb-8">
        Speed matters. Our solutions are engineered for lightning-fast performance, ensuring quick load times and smooth interactions to keep your audience engaged and satisfied.
        </p>
        <div className="grid gap-4">
          <Image
            src="/performace.avif"
            alt="hero template"
            width={1920}
            height={1014}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-full w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          
        </div>
      </div>
    ),
  },
];


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

        {/* {showcaseItems.map((item, index) => (
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
        ))} */}
<div className="w-full">
      <Timeline data={data} />
    </div>
      </div>
    </section>
  )
}