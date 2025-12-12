import React from "react";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import ContactSection from "./components/ContactSection";

const Page = () => {
  return (
    <>
      <HeroSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default Page;
