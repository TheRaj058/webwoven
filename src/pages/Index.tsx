import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import FAQSection from "@/components/home/FAQSection";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <ServicesSection />
      <TestimonialCarousel />
      <FAQSection />
      
      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let Web Woven Help!
            </p>
            <Button 
              size="lg"
              onClick={() => navigate('get-a-quote')}
              className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg animate-[pulse_3s_ease-in-out_infinite]"
            >
              Get Started Today!
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;