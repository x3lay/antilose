"use client";

import { motion } from "framer-motion";
import { Users, Target, Heart, Award } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const AboutPage = () => {
  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Team Members", value: "2+" },
    { label: "Satisfied Clients", value: "100+" },
    { label: "Projects Completed", value: "Many" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide innovative software solutions that empower businesses to achieve their digital transformation goals."
    },
    {
      icon: Heart,
      title: "Values",
      description: "We believe in transparency, innovation, and putting our clients' needs first. Our commitment to excellence drives everything we do."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "A diverse group of passionate developers, designers, and problem solvers working together to create amazing solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest quality standards and customer satisfaction."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-32 pb-4">
        {/* тут главная секция про нас */}
        <motion.section 
          className="container px-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              About Antilose Software
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              We are a passionate team of developers and designers dedicated to creating exceptional software solutions that help businesses thrive in the digital age.
            </p>
          </div>
        </motion.section>

        {/* статистика, циферки и прочая херня */}
        <motion.section 
          className="container px-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* наши ценности или типа того */}
        <motion.section 
          className="container px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage; 