import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Features from "@/components/sections/Features";
import Demos from "@/components/sections/Demos";
import HowItWorks from "@/components/sections/HowItWorks";
import Comparison from "@/components/sections/Comparison";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <ScrollReveal delay={0}><AboutUs /></ScrollReveal>
      <ScrollReveal direction="up" delay={0}><Features /></ScrollReveal>
      <ScrollReveal direction="left" delay={100}><Demos /></ScrollReveal>
      <ScrollReveal delay={0}><HowItWorks /></ScrollReveal>
      <ScrollReveal direction="right" delay={150}><Comparison /></ScrollReveal>
      <ScrollReveal delay={0}><Testimonials /></ScrollReveal>
      <ScrollReveal direction="up" delay={100}><Pricing /></ScrollReveal>
      <ScrollReveal delay={0}><FAQ /></ScrollReveal>
      <ScrollReveal direction="up" delay={100}><Contact /></ScrollReveal>
      <Footer />
    </main>
  );
}
