"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import VreduxLogo from "./vredux-logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3"
          : "bg-transparent py-5"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-between items-center relative">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <VreduxLogo className="h-8" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs font-medium"
            >
              About Us
            </Link>
            <Link
              href="/functions"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs font-medium"
            >
              Functions
            </Link>
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors text-xs font-medium"
            >
              Pricing
            </Link>
          </nav>
        </div>

        <span className="absolute left-1/2 transform -translate-x-1/2 text-xs text-primary font-medium">
          Dominated with Antilose
        </span>

        <div className="flex items-center space-x-3">
          {/* Кнопка BUY */}
          <Link href="https://t.me/antilosebot" target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              size="sm"
              className="bg-primary text-black font-semibold text-sm hover:bg-primary/80 relative overflow-hidden"
            >
              <span className="relative z-10">BUY</span>
            </Button>
          </Link>

          {/* Кнопка мобильного меню */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;