import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Antilose Software",
  description: "Professional software development services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
