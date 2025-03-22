import Link from "next/link";
import { Metadata } from "next";
import { AuthForm } from "@/components/auth-form";
import VreduxLogo from "@/components/vredux-logo";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Register | AntiloseAntilose",
  description: "Create your Antilose account and gain access to our premium software platform.",
};

export default function RegisterPage() {
  return (
    <main className="min-h-screen animated-gradient-bg">
      <Navbar />
      
      <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative pt-24 pb-32">
        {/* фоновая хрень для красоты */}
        <div className="absolute inset-0 bg-hero-pattern opacity-5 z-0"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background via-background/95 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background via-background/95 to-transparent"></div>

        <div className="w-full max-w-md z-10">
          <AuthForm mode="register" />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
