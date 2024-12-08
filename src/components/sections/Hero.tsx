'use client'
import { motion } from 'framer-motion'
import { Spotlight } from '../ui/spotlight'
import { Button } from '../ui/Button'
import Image from 'next/image'
import dashboard from '@/assets/dashboard.png'
import { MacbookScroll } from '../ui/macbook-scroll'
import { ArrowRight, Badge, Link } from 'lucide-react'
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision'
import { Cover } from '../ui/cover'
import { ContainerScroll } from '../ui/container-scroll-animation'

export default function Hero() {
  return (
    <section className="pb-20 bg-gradient-to-b flex flex-col items-center gap-12">
      


      <ContainerScroll
        titleComponent={
          <div  className="overflow-hidden container mx-auto px-4">
      <BackgroundBeamsWithCollision>
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      /> */}
          <h1 className="mt-12 text-5xl md:text-6xl font-bold mb-6">
          Build {' '}
            <span className='bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-600 via-violet-600 to-pink-600 [text-shadow:0_0_rgba(0,0,0,0.1)]'>Beautiful Web {' '}</span>
              Applications {' '}
            <Cover>Faster</Cover>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Beautiful, fast and modern web applications that look great out of the box.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button style={{ color: 'white',backgroundColor: '#006deb'}} size="lg" >Get Started <ArrowRight /></Button>
            <Button size="lg" variant={'outline'}>View Document</Button>
          </div>
        </motion.div>
        </BackgroundBeamsWithCollision>
      </div>

        }
      >
        {/* <Image
          src={`/codesandbox.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
        <img className="h-full w-full object-cover opacity-90 max-lg:object-contain" src={'/codesandbox.jpg'} alt='demo'/>
      </ContainerScroll>
      
      {/* <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }} className="relative max-w-[80%] overflow-hidden rounded-xl bg-transparent max-md:max-w-full" id="dashboard">
      <motion.img className="h-full w-full object-cover opacity-90 max-lg:object-contain" src={'/dashboard.png'} alt='demo'/>
      </motion.div> */}
    </section>
  )
}