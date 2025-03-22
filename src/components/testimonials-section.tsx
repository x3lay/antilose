"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    content: "софт просто имба чот на уровне приват софта кс ток на шедеврик кароч всем советую просто ахеренный чит целовал руки админа дофига имбовых функций которых нет ни в одном чите.",
    author: "d3putat",
    role: "Customer",
    company: "Unknown",
  },
  {
    content: "апнул легенду с лучшим читом антилуз, можно спокойно играть на основном аккаунте по легиту, и не бояться что откинут.",
    author: "сакурариумный",
    role: "Customer",
    company: "Unknown",
  },
  {
    content: "Чит просто ахуенный , была проблема , осталось 2 дня , так проблему решили , и дали ключ 7 дней , лучшие просто.",
    author: "тихий омут",
    role: "Customer",
    company: "Unknown",
  },
];

// Top companies (company logos would be stored as SVGs in public folder)
const companies = [
  { name: "2,000+ Active Users", style: "opacity-100 transition-opacity hover:text-primary" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Trusted by <span className="gradient-text">Top Players</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Join thousands of satisfied players who have elevated their game with our software.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="h-full glass-effect border-border/30 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    ))}
                  </div>

                  <blockquote className="text-foreground mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                      <span className="font-bold text-lg">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Separator className="mb-12 opacity-50" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by competitive players worldwide
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div key={index} className={company.style}>
                <span className="text-2xl md:text-3xl font-heading font-bold gradient-text">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
