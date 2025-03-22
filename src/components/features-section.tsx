"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheckIcon, EyeIcon, BoltIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
  highlight: string;
  delay: number;
}

const featureItems: FeatureItem[] = [
  {
    title: "Advanced Aimbot",
    description: "State-of-the-art targeting system with customizable smoothing, FOV, and bone selection. Includes recoil control and spread compensation.",
    icon: ShieldCheckIcon,
    highlight: "PRECISE",
    delay: 0.1,
  },
  {
    title: "ESP & Wallhack",
    description: "Full visual enhancement suite with player ESP, sound ESP, radar hack, and customizable box ESP with health bars and player info.",
    icon: EyeIcon,
    highlight: "VISUAL",
    delay: 0.2,
  },
  {
    title: "Undetected System",
    description: "Cutting-edge bypass technology ensures complete protection from anti-cheat. Regular updates maintain undetected status 24/7.",
    icon: BoltIcon,
    highlight: "SECURE",
    delay: 0.3,
  },
];

const FeatureCard = ({ title, description, icon: Icon, highlight, delay }: FeatureItem) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="w-full"
    >
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full hover:border-primary/50 transition-all duration-300 overflow-hidden group relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <CardHeader>
          <div className="flex justify-between items-start">
            <Badge variant="outline" className="border-primary/40 bg-secondary/80 text-primary">
              {highlight}
            </Badge>
            <Icon className="h-8 w-8 text-primary/80" />
          </div>
          <CardTitle className="mt-4 text-xl font-heading font-bold">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter>
          <Button
            variant="ghost"
            className="p-0 h-auto text-sm font-medium text-primary hover:text-primary/80 group/btn"
          >
            Learn more
            <ArrowRightIcon className="ml-1 h-4 w-4 inline-block transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Premium <span className="gradient-text">Features</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Dominate every match with our advanced feature set, designed for competitive players who demand the best.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featureItems.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block dark-glass px-6 py-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">Premial features</span> only into our SoftWare.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
