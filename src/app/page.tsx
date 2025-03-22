import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import SecuritySection from "@/components/security-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="animated-gradient-bg min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SecuritySection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
