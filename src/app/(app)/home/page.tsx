"use client";
import { Hero } from "@/src/components/hero";
import KeyServices from "@/src/components/keyServices";
import { LinkBox } from "@/src/components/LinkBox";
import { RecoverySection } from "@/src/components/RecoverySection";
import Image from "next/image";
import { IconBaseProps } from "react-icons";
import { ServiceSection } from "@/src/components/ServiceSection";
import { ContactSection } from "@/src/components/Contact";
import Review from "@/src/components/Review";
import Address from "@/src/components/Address";
import { CTASection } from "@/src/components/CTA-Section";
import AchievementCarousel from "@/src/components/Acheivement";
import { Footer } from "@/src/components/Footer";

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
