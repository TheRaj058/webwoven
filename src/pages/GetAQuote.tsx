import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import DollarParticles from "@/components/ui/DollarParticles";

const GetAQuote = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetStarted = (plan: string) => {
    toast({
      title: "Great choice!",
      description: `You selected the ${plan}. We'll contact you shortly.`,
    });
    navigate("/contact");
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
            <Card className="relative overflow-hidden transition-transform hover:scale-105">
              <CardHeader className="text-center pb-8 bg-muted">
                <CardTitle className="text-2xl">Lite Pack</CardTitle>
                <p className="text-4xl font-bold mt-4">£999</p>
                <p className="text-sm text-muted-foreground mt-2">One-time payment</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {features.lite.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button
                  className="w-full"
                  onClick={() => handleGetStarted("Lite Pack")}
                >
                  Get Started with Lite Pack
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Pack */}
            <Card className="relative overflow-hidden transition-transform hover:scale-105 border-secondary">
              <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm">
                Most Popular
              </div>
              <CardHeader className="text-center pb-8 bg-muted">
                <CardTitle className="text-2xl">Premium Pack</CardTitle>
                <p className="text-4xl font-bold mt-4">£1,599</p>
                <p className="text-sm text-muted-foreground mt-2">One-time payment</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {features.premium.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => handleGetStarted("Premium Pack")}
                >
                  Get Started with Premium Pack
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Comparison Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Plan Comparison</h2>
            <div className="grid grid-cols-3 gap-4 p-6 bg-card rounded-lg shadow-sm">
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