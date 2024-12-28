import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CompanySection = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
              <p className="text-foreground/80 mb-4">
                Web Woven was founded with a vision to help businesses thrive in
                the digital age. We believe in creating websites that not only
                look beautiful but also drive results.
              </p>
              <p className="text-foreground/80 mb-6">
                Our team of experts combines creativity with technical expertise
                to deliver solutions that exceed expectations.
              </p>
              <Link to="/about-web-woven">
                <Button className="bg-primary hover:bg-primary-hover">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="bg-card rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/2721ffb5-109b-4d80-9419-841f6f5004c4.png" 
                alt="Web Woven Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;