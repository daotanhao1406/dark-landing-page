'use client'
import { motion } from "framer-motion";
import Button from "../ui/Button";
export default function CTA() {
    return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
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
        </motion.div>
      </div>
    </section>
    );
}
