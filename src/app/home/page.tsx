"use client"
import AchievementCarousel from "@/components/Acheivement";
import { CTASection } from "@/components/CTA-Section";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import KeyServices from "@/components/keyServices";
import { LinkBox } from "@/components/LinkBox";
import { RecoverySection } from "@/components/RecoverySection";
import Image from "next/image";
import { IconBaseProps } from "react-icons";
import { ServiceSection } from "@/components/ServiceSection";
import { ContactSection } from "@/components/Contact";
import Review from "@/components/Review";
import Address from "@/components/Address";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <CTASection/>
      <RecoverySection/>
      <AchievementCarousel/>
      <KeyServices/>
      <ContactSection />
      <ServiceSection />
      <Review/>
      <Address/>
      <Footer/>
    </>
  );
}
