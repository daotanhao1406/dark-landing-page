'use client'
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { AuroraBackground } from "../ui/aurora-background";
import { ArrowRight } from "lucide-react";
export default function CTA() {
    return (
    <section className="py-20 text-white">
      <div className="container mx-auto">
        {/* <motion.div
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of developers building amazing applications
          </p>
          <Button variant="secondary" size="lg">
            Start Building Now
          </Button>
        </motion.div> */}

        <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Ready to Get Started?
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
        Join thousands of developers building amazing applications
        </div>
        <Button variant="default" className="font-semibold" size="lg">
            Start Building Now
            <ArrowRight />
          </Button>
      </motion.div>
    </AuroraBackground>
      </div>
    </section>
    );
}
