"use client"
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
import { CTASection } from "@/components/CTA-Section";
import AchievementCarousel from "@/components/Acheivement";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero id="home"/>
      <CTASection/>
      <RecoverySection/>
      <AchievementCarousel id="achievements"/>
      <KeyServices id="specialization"/>
      <ContactSection id="contacts"/>
      <ServiceSection id="services"/>
      <Review/>
      <Address id="address"/>
      <Footer id="contact-us"/>
    </>
  );
}
