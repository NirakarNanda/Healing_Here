"use client"
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/CTA-Section";
import { RecoverySection } from "@/components/RecoverySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <CTASection />
      <RecoverySection />
      <Footer />
    </>
  );
}