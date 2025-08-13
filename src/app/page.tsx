import HeroSection from "@/components/heroSection";
import WhyCareSection from "@/components/whyCareSection";
import CtaSection from "@/components/ctaSection";
import BannerSection from "@/components/bannerSection";

export default function Home() {
  return (
    <>
      <div className="">
        <HeroSection />
        <WhyCareSection />
        <CtaSection />
        <BannerSection />
      </div>
    </>
  );
}
