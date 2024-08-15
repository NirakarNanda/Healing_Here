"use client"
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/CTA-Section";
import { RecoverySection } from "@/components/RecoverySection";
import { Footer } from "@/components/Footer";
import { ServiceSection } from "@/components/ServiceSection";
import { ContactSection } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <CTASection />
      <RecoverySection />
      <ContactSection />
      <ServiceSection />
      <Footer />
    </>
  );
}