import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import InstagramFeed from "@/components/home/InstagramFeed";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <InstagramFeed />
      <CTASection />
    </>
  );
}
