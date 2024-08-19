"use client"
import AchievementCarousel from "@/src/components/Acheivement";
import { CTASection } from "@/src/components/CTA-Section";
import { Header } from "@/src/components/header";
import { Hero } from "@/src/components/hero";
import KeyServices from "@/src/components/keyServices";
import { RecoverySection } from "@/src/components/RecoverySection";
import { ServiceSection } from "../components/ServiceSection";
import { ContactSection } from "../components/Contact";
import Education from "../components/Education";
import Review from "../components/Review";
import Address from "../components/Address";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero id="home"/>
      <CTASection/>
      <RecoverySection/>
      <AchievementCarousel id="achievements"/>
      <KeyServices id="specialization"/>
      <Education/>
      <ContactSection id="contacts"/>
      <ServiceSection id="services"/>
      <Review/>
      <Address id="address"/>
      <Footer id="contact-us"/>
    </>
  );
}