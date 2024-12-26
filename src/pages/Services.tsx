import { Check, Code, Palette, Search, Settings2 } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import {
  EnhancedCard,
  EnhancedCardContent,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      icon: Palette,
      description:
        "Custom-designed websites that are both beautiful and functional.",
      features: [
        "Responsive Design",
        "Custom Development",
        "UI/UX Design",
        "Performance Optimization",
      ],
    },
    {
      title: "Web Development",
      icon: Code,
      description: "Powerful, scalable web applications built with modern technologies.",
      features: [
        "Full-Stack Development",
        "API Integration",
        "Database Design",
        "Security Implementation",
      ],
    },
    {
      title: "SEO Optimization",
      icon: Search,
      description: "Improve your search rankings and online visibility.",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Performance Tracking",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          {/* Animated Web Dev Icons */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <Settings2
                className="text-primary/20 animate-particle-glow"
                size={24 + Math.random() * 24}
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-down">
              Our Services
            </h1>
            <p className="text-xl text-muted animate-fade-up">
              Comprehensive web solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <EnhancedCard
                key={index}
                className="group hover:translate-y-[-4px] transition-all duration-300 bg-card hover:bg-card/80"
              >
                <EnhancedCardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <service.icon className="w-8 h-8 text-primary animate-float" />
                    <EnhancedCardTitle>{service.title}</EnhancedCardTitle>
                  </div>
                  <p className="text-muted">{service.description}</p>
                </EnhancedCardHeader>
                <EnhancedCardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-muted group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <Check className="text-secondary mr-2 flex-shrink-0" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/get-a-quote">
                    <EnhancedButton className="w-full mt-4 bg-primary hover:bg-secondary transition-colors">
                      Learn More
                    </EnhancedButton>
                  </Link>
                </EnhancedCardContent>
              </EnhancedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-muted">
            Let's discuss how we can help grow your business.
          </p>
          <Link to="/get-a-quote">
            <EnhancedButton
              size="lg"
              className="bg-primary hover:bg-secondary transition-colors"
            >
              Contact Us Today
            </EnhancedButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;