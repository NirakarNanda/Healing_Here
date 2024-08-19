"use client"
import AchievementCarousel from "@/src/components/Acheivement";
import { CTASection } from "@/src/components/CTA-Section";
import { Header } from "@/src/components/header";
import { Hero } from "@/src/components/hero";
import KeyServices from "@/src/components/keyServices";
import { RecoverySection } from "@/src/components/RecoverySection";
import { Footer } from "flowbite-react";

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
      {/* <Header/>
      <Hero/> */}
    </>
  );
}