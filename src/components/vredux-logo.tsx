"use client";

import React from "react";

interface VreduxLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const VreduxLogo = ({ className = "", size = "md" }: VreduxLogoProps) => {
  const sizeClass = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
    xl: "text-3xl",
  }[size];

  return (
    <div className={`font-heading font-bold ${sizeClass} ${className}`}>
      <span className="gradient-text relative hover:animate-pulse">
        Antilose
      </span>
    </div>
  );
};

export default VreduxLogo; 