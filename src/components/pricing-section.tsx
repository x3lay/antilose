"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface PricingPlan {
  name: string;
  price: {
    DOLLAR: string;
    RUB: string;
  };
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "One-Week",
    price: {
      DOLLAR: "$6",
      RUB: "₽500",
    },
    description: "7 days using Soft",
    features: [
      "Aimbot",
      "ESP Features",
      "Triggerbot",
      "24/7 Support",
      "Regular Updates",
      "See full features into page functions"
    ],
    badge: "VERY HOT",
  },
  {
    name: "Two-Week",
    price: {
      DOLLAR: "$7.50",
      RUB: "₽680",
    },
    description: "14 days using Soft",
    features: [
      "Aimbot",
      "ESP Features",
      "Triggerbot",
      "24/7 Support",
      "Regular Updates",
      "See full features into page functions"
    ],
    highlighted: true,
    badge: "HOT",
  },
  {
    name: "Month",
    price: {
      DOLLAR: "$10.99",
      RUB: "₽1000",
    },
    description: "30 days using Soft",
    features: [
      "Aimbot",
      "ESP Features",
      "Triggerbot",
      "24/7 Support",
      "Regular Updates",
      "See full features into page functions"
    ],
    badge: "BEST CHOOSE",
  },
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<"DOLLAR" | "RUB">("DOLLAR");

  return (
    <section className="pt-32 pb-24 relative overflow-hidden" id="pricing">
      <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0">
        <motion.div
          className="w-full h-full bg-gradient-radial from-primary/20 to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
              Choose Your <span className="gradient-text">Package</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Select your preferred access package. All plans include lifetime updates and 24/7 support.
            </p>

            <div className="flex items-center justify-center space-x-4 mb-2">
              <Button
                variant={billingCycle === "DOLLAR" ? "default" : "outline"}
                size="sm"
                onClick={() => setBillingCycle("DOLLAR")}
                className={`rounded-full px-6 ${billingCycle === "DOLLAR"
                  ? "bg-primary text-black"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                USDT
              </Button>

              <Button
                variant={billingCycle === "RUB" ? "default" : "outline"}
                size="sm"
                onClick={() => setBillingCycle("RUB")}
                className={`rounded-full px-6 ${billingCycle === "RUB"
                  ? "bg-primary text-black"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                RUB
                <Badge variant="outline" className="ml-2 bg-secondary/80 text-primary border-primary/40 text-xs">
                  HOT
                </Badge>
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${plan.highlighted ? "md:-mt-4 md:-mb-4 z-10" : ""}`}
            >
              <Card
                className={`h-full border-border/50 overflow-hidden relative transition-all duration-300 pricing-card
                ${plan.highlighted
                    ? "border-primary/50 shadow-lg bg-card/80 hover:shadow-primary/20 hover:shadow-xl"
                    : "bg-card/50 hover:border-primary/30 hover:shadow-lg"
                  }`}
              >
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-30"></div>
                )}

                {plan.badge && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-black text-xs font-semibold px-3 py-1 rounded-bl-lg">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{plan.name}</CardTitle>
                  <CardDescription className="text-sm opacity-90">{plan.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex justify-center items-center py-8">
                    <motion.div
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-5xl font-bold gradient-text font-heading tracking-tight">
                        {billingCycle === "DOLLAR" ? plan.price.DOLLAR : plan.price.RUB}
                      </span>
                      <span className="text-muted-foreground ml-2 text-lg">/period</span>

                      {billingCycle === "RUB" && (
                        <div className="text-sm text-primary font-medium mt-1">
                          For RUB
                        </div>
                      )}
                    </motion.div>
                  </div>

                  <div className="space-y-3 mt-6">
                    {plan.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center text-sm"
                      >
                        <svg
                          className="w-4 h-4 mr-3 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pb-8">
                  <Link href="https://t.me/antilosebot" target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full transition-all duration-300 py-6 text-lg ${plan.highlighted
                        ? "bg-primary text-black hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
                        : "bg-secondary hover:bg-secondary/80 text-foreground hover:text-primary hover:border-primary/20"
                        }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="inline-block glass-effect px-6 py-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-medium">When selling in USDT</span> , price will be changed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;