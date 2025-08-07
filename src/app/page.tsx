import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/heroSection";
import WhyCareSection from "@/components/whyCareSection";
import CtaSection from "@/components/ctaSection";
import BannerSection from "@/components/bannerSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyCareSection />
      <CtaSection />
      <BannerSection/>
      <Footer />
    </>
  );
}
