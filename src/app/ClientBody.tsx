"use client";

import { useEffect } from "react";
import { WatermarkValidator } from "@/components/WatermarkValidator";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // убираем классы от расширений при гидрации, а то мало ли
  useEffect(() => {
    // это работает ток на клиенте после гидрации ессно
    document.body.className = "antialiased";
  }, []);

  return (
    <body className="antialiased" suppressHydrationWarning>
      {children}
      <WatermarkValidator />
    </body>
  );
}