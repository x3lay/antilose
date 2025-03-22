"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LockClosedIcon, ShieldCheckIcon, EyeIcon, KeyIcon, ServerIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

interface SecurityFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const securityFeatures: SecurityFeature[] = [
  {
    icon: LockClosedIcon,
    title: "Anti-Detection System",
    description: "Advanced signature encryption and memory protection to ensure complete undetectability from VAC and other anti-cheat systems.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Real-time Protection",
    description: "Continuous monitoring and instant updates to adapt to game patches and anti-cheat updates within hours.",
  },
  {
    icon: EyeIcon,
    title: "Stealth Mode",
    description: "Sophisticated stream-proof features and screenshot protection to keep your advantage completely hidden.",
  },
  {
    icon: KeyIcon,
    title: "Secure Authentication",
    description: "Hardware-locked licensing system with HWID spoofer included to protect your investment and account.",
  },
  {
    icon: ServerIcon,
    title: "Secure Loading",
    description: "Kernel-level injection with encrypted loader ensures safe and undetected launching every time.",
  },
  {
    icon: DocumentTextIcon,
    title: "Clean Records",
    description: "Years of maintaining a perfect detection record with constant updates and protection improvements.",
  },
];

const SecuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0"></div>

      {/* анимированный паттерн безопасности всякие кружочки короче */}
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden pointer-events-none opacity-10">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-[1000px] h-[1000px] border border-primary/10 rounded-full relative"
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-primary/10 rounded-full"></div>

          {/* точки безопасности на кругах или типа того */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "0 -400px",
                transform: `rotate(${i * 30}deg) translateY(-400px)`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.25,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Undetected <span className="gradient-text">Security</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Our advanced protection system keeps you safe and undetected,
              with years of experience in bypass technology.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-secondary/30 p-6 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="mb-4 p-3 bg-primary/10 inline-block rounded-lg text-primary group-hover:animate-pulse transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2 font-heading group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="dark-glass px-8 py-4 rounded-lg max-w-lg text-center">
            <p className="text-primary font-medium block mt-1">
              Our security system is constantly updated and tested.
              <span className="text-primary font-medium block mt-1">
                
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;
