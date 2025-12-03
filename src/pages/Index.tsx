import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import ProjectsSection from "@/components/home/ProjectsSection";
import FAQSection from "@/components/home/FAQSection";
import SEOHead from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { DollarSign, Target, Briefcase, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Web Woven | Affordable Web Development Services Wolverhampton, UK"
        description="Professional web development and design services in Wolverhampton. Custom responsive websites, e-commerce solutions, and SEO optimization for small businesses across the UK. Get a quote today!"
        keywords="web development Wolverhampton, affordable website design UK, custom website development, small business web design, responsive websites UK, e-commerce development Wolverhampton, SEO-friendly websites, professional web designers West Midlands, local web developers UK, business website creation"
        canonical="https://webwoven.co.uk/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebDesignCompany",
          "name": "Web Woven",
          "url": "https://webwoven.co.uk",
          "logo": "https://webwoven.co.uk/lovable-uploads/a1f0e7a0-926a-4724-80d3-4f73fac77153.png",
          "description": "Professional web development and design services in Wolverhampton, UK",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 Ward Street",
            "addressLocality": "Wolverhampton",
            "postalCode": "WV1 3LT",
            "addressRegion": "West Midlands",
            "addressCountry": "GB"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.5870",
            "longitude": "-2.1288"
          },
          "telephone": "+447570732244",
          "email": "bableerajaryal2@gmail.com",
          "priceRange": "££",
          "openingHours": "Mo-Fr 09:00-18:00",
          "areaServed": ["Wolverhampton", "West Midlands", "Birmingham", "United Kingdom"],
          "sameAs": ["https://www.linkedin.com/in/sharadraj-aryal-91531b167/"]
        }}
      />
      <HeroSection />
      <ServicesSection />
      <TestimonialCarousel />
      
      {/* Refer & Earn Promo Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm relative overflow-hidden border-y border-border/50">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              💸 Want to Earn Money by Referring Clients?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Know someone who needs a website? Refer them to us and earn 10% of what we make if they become our client. 
              <span className="font-semibold text-primary"> Simple, transparent, and rewarding.</span>
            </p>
            
            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center p-4">
                <Briefcase className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Professional Network</h3>
                <p className="text-muted-foreground text-sm">Leverage your business connections</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <DollarSign className="h-12 w-12 text-secondary mb-3" />
                <h3 className="font-semibold text-lg mb-2">10% Commission</h3>
                <p className="text-muted-foreground text-sm">Earn from every successful referral</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <Target className="h-12 w-12 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2 text-foreground">Easy Process</h3>
                <p className="text-muted-foreground text-sm">Simple form, quick approval</p>
              </div>
            </div>
            
            <Button 
              size="lg"
              onClick={() => navigate('/refer-and-earn')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              🔗 Refer Now & Start Earning!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <ProjectsSection />
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