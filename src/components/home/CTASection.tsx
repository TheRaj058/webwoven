import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EnhancedButton } from "@/components/ui/enhanced-button";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let Web Woven help you create a professional, user-friendly website that drives results for your business.
          </p>
          <Link to="/get-a-quote">
            <EnhancedButton
              size="lg"
              className="animate-fade-up bg-primary hover:bg-secondary transition-all duration-300 hover:scale-105 hover:animate-glow relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started Today</span>
              <ArrowRight className="ml-2 relative z-10" size={20} />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </EnhancedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;