"use client"
import AchievementCarousel from "@/components/Acheivement";
import { CTASection } from "@/components/CTA-Section";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import KeyServices from "@/components/keyServices";
import { RecoverySection } from "@/components/RecoverySection";
import { Footer } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <CTASection/>
      <RecoverySection/>
      <AchievementCarousel/>
      <KeyServices/>
      <Footer />
    </>
  );
}
