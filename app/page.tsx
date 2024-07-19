import AboutPage from "@/components/AboutUs";
import CollaborationBanner from "@/components/CollaborationBanner";
import ContactSection from "@/components/ContactUs";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/HowItWork";
import ServicesSection from "@/components/ServiceSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <ServicesSection />
    <AboutPage />
    <ContactSection />
    <HowItWorks />
    <CollaborationBanner />
    </>
  );
}
