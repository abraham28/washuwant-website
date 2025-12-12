import React from "react";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";
import AboutUsSection from "./components/AboutUsSection";

const Page = () => {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
      <AboutUsSection />
    </>
  );
};

export default Page;
