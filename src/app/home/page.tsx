"use client"
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/CTA-Section";
import { RecoverySection } from "@/components/RecoverySection";
import { Footer } from "@/components/Footer";
import { ServiceSection } from "@/components/ServiceSection";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <CTASection />
      <RecoverySection />
      <ServiceSection />
      <Footer />
    </>
  );
}