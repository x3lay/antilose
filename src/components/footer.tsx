"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import VreduxLogo from "./vredux-logo";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Functions", href: "/functions" },
      { label: "Security", href: "/security" },
      { label: "Pricing", href: "/pricing" },
      { label: "Updates", href: "/updates" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Support", href: "/support" },
      { label: "Partners", href: "/partners" },
      { label: "Status", href: "/status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "License", href: "/license" },
      { label: "Compliance", href: "/compliance" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative pt-24 pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <VreduxLogo size="lg" />
              </motion.div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4 max-w-xs">
              Experience the pinnacle of software technology with our exclusive premium solutions.
            </p>
            <div className="flex space-x-4">
<Link href="https://t.me/antiluz" className="opacity-70 hover:opacity-100 transition-opacity">
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="teleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FF9600" />
        <stop offset="100%" stopColor="#FFCC00" />
      </linearGradient>
    </defs>
    <path
      d="M20.665 3.717L2.93308 10.5547C1.72474 11.0396 1.73407 11.7148 2.71192 12.0216L7.26175 13.4308L17.7974 6.79044C18.2954 6.48711 18.7498 6.65154 18.3857 6.98308L9.84354 14.6764H9.84179L9.84354 14.6771L9.52757 19.3571C9.98757 19.3571 10.1892 19.1461 10.4419 18.9033L12.6598 16.7552L17.2605 20.1137C18.1076 20.5776 18.7066 20.3404 18.9183 19.3582L21.9318 5.07594C22.2419 3.87524 21.474 3.30997 20.665 3.717Z"
      fill="url(#teleGradient)"
    />
    <path
      d="M20.665 3.717L2.93308 10.5547C1.72474 11.0396 1.73407 11.7148 2.71192 12.0216L7.26175 13.4308L17.7974 6.79044C18.2954 6.48711 18.7498 6.65154 18.3857 6.98308L9.84354 14.6764H9.84179L9.84354 14.6771L9.52757 19.3571C9.98757 19.3571 10.1892 19.1461 10.4419 18.9033L12.6598 16.7552L17.2605 20.1137C18.1076 20.5776 18.7066 20.3404 18.9183 19.3582L21.9318 5.07594C22.2419 3.87524 21.474 3.30997 20.665 3.717Z"
      fill="none"
      stroke="white"
      strokeWidth="0.5"
      opacity="0.3"
    />
  </svg>
</Link>
              <Link href="#" className="opacity-70 hover:opacity-100 transition-opacity">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="discordGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF9600" />
                      <stop offset="100%" stopColor="#FFCC00" />
                    </linearGradient>
                  </defs>
                  <path d="M19.7698 5.09521C18.3055 4.42125 16.7488 3.92673 15.1298 3.64992C15.1085 3.64517 15.0872 3.65466 15.0764 3.67363C14.8759 4.01381 14.6531 4.45781 14.4947 4.81109C12.7539 4.55282 11.0226 4.55282 9.31642 4.81109C9.15796 4.45307 8.92788 4.01381 8.72616 3.67363C8.71539 3.65514 8.69405 3.64564 8.67273 3.64992C7.05469 3.92626 5.49796 4.42078 4.03274 5.09521C4.02338 5.09948 4.01498 5.10659 4.00941 5.11559C1.24281 9.41237 0.476324 13.5909 0.861873 17.7174C0.863248 17.7358 0.872603 17.7531 0.885354 17.7642C2.81922 19.1697 4.69233 20.0289 6.53003 20.5809C6.55136 20.5877 6.57364 20.5798 6.586 20.5623C6.97287 20.0384 7.32099 19.4851 7.622 18.9023C7.63606 18.8754 7.62294 18.8437 7.59495 18.8332C6.96578 18.5968 6.36756 18.3083 5.79261 17.9815C5.76137 17.9637 5.75858 17.9201 5.78702 17.8986C5.89608 17.8175 6.00517 17.7326 6.10961 17.6469C6.12337 17.6354 6.14191 17.6326 6.15845 17.6407C9.56287 19.1855 13.2726 19.1855 16.636 17.6407C16.6525 17.6321 16.6711 17.635 16.6854 17.6465C16.7898 17.7322 16.8989 17.8175 17.0085 17.8986C17.0369 17.9201 17.0346 17.9637 17.0034 17.9815C16.4284 18.3146 15.8302 18.5968 15.2006 18.8326C15.1726 18.8432 15.16 18.8754 15.1741 18.9023C15.4809 19.4845 15.829 20.0378 16.2096 20.5617C16.2214 20.5798 16.2443 20.5877 16.2656 20.5809C18.1116 20.0289 19.9847 19.1697 21.9186 17.7642C21.9319 17.7531 21.9407 17.7363 21.9421 17.718C22.3996 12.9514 21.2199 8.80999 19.7846 5.11607C19.7796 5.10659 19.7712 5.09948 19.7698 5.09521ZM8.13511 15.1608C7.10388 15.1608 6.25728 14.2305 6.25728 13.0865C6.25728 11.9425 7.08916 11.0122 8.13511 11.0122C9.19043 11.0122 10.0315 11.9519 10.0163 13.0865C10.0163 14.2305 9.1809 15.1608 8.13511 15.1608ZM15.682 15.1608C14.6508 15.1608 13.8042 14.2305 13.8042 13.0865C13.8042 11.9425 14.6361 11.0122 15.682 11.0122C16.7373 11.0122 17.5784 11.9519 17.5632 13.0865C17.5632 14.2305 16.7373 15.1608 15.682 15.1608Z" 
                    fill="url(#discordGradient)" />
                  <path d="M19.7698 5.09521C18.3055 4.42125 16.7488 3.92673 15.1298 3.64992C15.1085 3.64517 15.0872 3.65466 15.0764 3.67363C14.8759 4.01381 14.6531 4.45781 14.4947 4.81109C12.7539 4.55282 11.0226 4.55282 9.31642 4.81109C9.15796 4.45307 8.92788 4.01381 8.72616 3.67363C8.71539 3.65514 8.69405 3.64564 8.67273 3.64992C7.05469 3.92626 5.49796 4.42078 4.03274 5.09521C4.02338 5.09948 4.01498 5.10659 4.00941 5.11559C1.24281 9.41237 0.476324 13.5909 0.861873 17.7174C0.863248 17.7358 0.872603 17.7531 0.885354 17.7642C2.81922 19.1697 4.69233 20.0289 6.53003 20.5809C6.55136 20.5877 6.57364 20.5798 6.586 20.5623C6.97287 20.0384 7.32099 19.4851 7.622 18.9023C7.63606 18.8754 7.62294 18.8437 7.59495 18.8332C6.96578 18.5968 6.36756 18.3083 5.79261 17.9815C5.76137 17.9637 5.75858 17.9201 5.78702 17.8986C5.89608 17.8175 6.00517 17.7326 6.10961 17.6469C6.12337 17.6354 6.14191 17.6326 6.15845 17.6407C9.56287 19.1855 13.2726 19.1855 16.636 17.6407C16.6525 17.6321 16.6711 17.635 16.6854 17.6465C16.7898 17.7322 16.8989 17.8175 17.0085 17.8986C17.0369 17.9201 17.0346 17.9637 17.0034 17.9815C16.4284 18.3146 15.8302 18.5968 15.2006 18.8326C15.1726 18.8432 15.16 18.8754 15.1741 18.9023C15.4809 19.4845 15.829 20.0378 16.2096 20.5617C16.2214 20.5798 16.2443 20.5877 16.2656 20.5809C18.1116 20.0289 19.9847 19.1697 21.9186 17.7642C21.9319 17.7531 21.9407 17.7363 21.9421 17.718C22.3996 12.9514 21.2199 8.80999 19.7846 5.11607C19.7796 5.10659 19.7712 5.09948 19.7698 5.09521ZM8.13511 15.1608C7.10388 15.1608 6.25728 14.2305 6.25728 13.0865C6.25728 11.9425 7.08916 11.0122 8.13511 11.0122C9.19043 11.0122 10.0315 11.9519 10.0163 13.0865C10.0163 14.2305 9.1809 15.1608 8.13511 15.1608ZM15.682 15.1608C14.6508 15.1608 13.8042 14.2305 13.8042 13.0865C13.8042 11.9425 14.6361 11.0122 15.682 11.0122C16.7373 11.0122 17.5784 11.9519 17.5632 13.0865C17.5632 14.2305 16.7373 15.1608 15.682 15.1608Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="0.5" 
                    opacity="0.3" />
                </svg>
              </Link>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title} className="col-span-1">
              <h3 className="text-sm font-semibold font-heading mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-border/50 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Antilose. All rights reserved.
          </p>

          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-xs text-muted-foreground">
              Made with love for u. Site pasted by: @coderingonelove
            </span>

            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary/80 rounded-full animate-pulse"></div>
              <span className="text-xs text-primary font-medium">Detect Status: Bypassed</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
