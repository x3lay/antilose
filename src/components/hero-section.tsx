"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* всякие фоновые узоры и эффекты */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-0"></div>

      {/* анимированные светящиеся штуки */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/5 filter blur-3xl z-0"
        initial={{ opacity: 0.5, x: -100, y: -100 }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          x: [-100, -80, -100],
          y: [-100, -120, -100]
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="absolute w-80 h-80 rounded-full bg-primary/10 filter blur-3xl z-0 bottom-0 right-0"
        initial={{ opacity: 0.3, x: 100, y: 100 }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          x: [100, 80, 100],
          y: [100, 120, 100]
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* основной контент */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 font-heading inline-flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <span className="gradient-text">Antilose</span> for
            </div>
            <span className="text-foreground relative inline-block">
              SO2 Domination
              <motion.span
                className="absolute -bottom-3 left-0 w-full h-1 bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Elevate your game with our premium, undetected SO2 enhancement suite.
            Advanced features, regular updates, and 24/7 support for competitive players.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="https://t.me/antilosebot" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary text-black font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-shadow animate-glow relative overflow-hidden"
              >
                <span className="relative z-10">Purchase Now</span>
              </Button>
            </Link>
            <Link href="/functions">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 text-foreground font-medium px-8 py-6 text-lg hover:bg-primary/5"
              >
                View Features
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;