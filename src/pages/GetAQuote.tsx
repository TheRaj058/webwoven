import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, ArrowRight, Clock, Shield, Zap } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import DollarParticles from "@/components/ui/DollarParticles";
import ConfettiEffect from "@/components/ui/ConfettiEffect";
import SEOHead from "@/components/seo/SEOHead";
import { useState } from "react";

const GetAQuote = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleGetStarted = (plan: string) => {
    setShowConfetti(true);
    toast({
      title: "Great choice!",
      description: `You selected the ${plan}. We'll contact you shortly.`,
    });
    setTimeout(() => navigate("/contact"), 1500);
  };

  const features = {
    lite: [
      "Basic layout for simple websites",
      "One-time fee",
      "Optional monthly maintenance (£15)",
      "Perfect for blogs and informational sites",
      "Domain not included",
    ],
    premium: [
      "Complex website development",
      "Three free maintenance sessions",
      "One year free domain registration",
      "Free logo creation",
      "Perfect for e-commerce sites",
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Get a Quote - Web Development Packages | Web Woven"
        description="Choose between our Lite Pack (£999) or Premium Pack (£1599). Professional web development with responsive design, SEO optimization, and expert support."
        keywords="web development pricing, website packages UK, Wolverhampton web design quotes, affordable web development, custom website pricing"
      />
      <ConfettiEffect 
        isActive={showConfetti} 
        onComplete={() => setShowConfetti(false)}
        duration={2000}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent relative overflow-hidden">
        <DollarParticles />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">Choose Your Plan</h1>
            <p className="text-xl text-muted">
              Select the perfect package for your web development needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Lite Pack */}
            <Card className="relative overflow-hidden transition-all duration-300 bg-gradient-to-br from-primary to-primary-hover hover:shadow-primary text-primary-foreground transform hover:scale-105">
              <div className="absolute top-4 right-4">
                <Zap className="h-6 w-6 opacity-80" />
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">Lite Pack</CardTitle>
                <p className="text-4xl font-bold mt-4">£999</p>
                <p className="text-sm mt-2 opacity-90">One-time payment</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {features.lite.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold"
                  onClick={() => handleGetStarted("Lite Pack")}
                >
                  Get Started with Lite Pack
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Pack */}
            <Card className="relative overflow-hidden transition-all duration-300 bg-gradient-to-br from-secondary to-[#FFB84D] hover:shadow-secondary text-secondary-foreground transform hover:scale-105">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold rounded-bl-lg">
                Most Popular
              </div>
              <div className="absolute top-4 left-4">
                <Shield className="h-6 w-6 opacity-80" />
              </div>
              <CardHeader className="text-center pb-8 pt-12">
                <CardTitle className="text-2xl font-bold">Premium Pack</CardTitle>
                <p className="text-4xl font-bold mt-4">£1,599</p>
                <p className="text-sm mt-2 opacity-90">One-time payment</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {features.premium.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button
                  className="w-full bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90 font-semibold"
                  onClick={() => handleGetStarted("Premium Pack")}
                >
                  Get Started with Premium Pack
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Web Woven?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-card rounded-lg shadow-elegant">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground">Get your website delivered on time, every time.</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-elegant">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
                <p className="text-muted-foreground">Built with security and performance in mind.</p>
              </div>
              <div className="text-center p-6 bg-card rounded-lg shadow-elegant">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Modern Technology</h3>
                <p className="text-muted-foreground">Latest web technologies for optimal performance.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center mb-8">Plan Comparison</h3>
            <div className="grid grid-cols-3 gap-4 p-6 bg-card rounded-lg shadow-elegant">
              <div className="font-semibold">Feature</div>
              <div className="font-semibold text-center">Lite Pack</div>
              <div className="font-semibold text-center">Premium Pack</div>
              
              {[
                ["Website Complexity", "Basic", "Advanced"],
                ["Maintenance", "£15/month", "3 Free Sessions"],
                ["Domain Registration", "Not Included", "1 Year Free"],
                ["Logo Creation", <X className="mx-auto text-destructive" />, <Check className="mx-auto text-secondary" />],
                ["E-commerce Support", <X className="mx-auto text-destructive" />, <Check className="mx-auto text-secondary" />],
              ].map(([feature, lite, premium], index) => (
                <>
                  <div key={`feature-${index}`} className="py-2">{feature}</div>
                  <div key={`lite-${index}`} className="text-center py-2">{lite}</div>
                  <div key={`premium-${index}`} className="text-center py-2">{premium}</div>
                </>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-20 text-center">
            <p className="text-lg mb-6">
              Need help choosing the right plan for your business?
            </p>
            <Button
              variant="outline"
              onClick={() => navigate("/contact")}
              className="inline-flex items-center"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetAQuote;
