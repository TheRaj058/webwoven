import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ServicesSection />
      <TestimonialCarousel />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;