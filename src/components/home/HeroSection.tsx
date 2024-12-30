import { ArrowRight } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Link } from "react-router-dom";
import TypewriterEffect from "./TypewriterEffect";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 bg-[length:200%_100%] animate-gradient-flow" />
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient-flow shadow-glow">
            Weaving Your Digital Presence
          </h1>
          <TypewriterEffect />
          <div className="mt-8">
            <Link to="/get-a-quote">
              <EnhancedButton
                size="lg"
                className="animate-fade-up bg-primary hover:bg-secondary transition-all duration-300 hover:scale-105 hover:animate-glow relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="ml-2 relative z-10" size={20} />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-flow" />
              </EnhancedButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;