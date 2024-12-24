import { Check } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import {
  EnhancedCard,
  EnhancedCardContent,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card";

const Services = () => {
  const services = [
    {
      title: "Web Design",
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-5 bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6 animate-fade-down">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 animate-fade-up">
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
                className="group hover:translate-y-[-4px] transition-all duration-300"
              >
                <EnhancedCardHeader>
                  <EnhancedCardTitle>{service.title}</EnhancedCardTitle>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </EnhancedCardHeader>
                <EnhancedCardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <Check className="text-secondary mr-2 flex-shrink-0" size={20} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <EnhancedButton className="w-full mt-4">Learn More</EnhancedButton>
                </EnhancedCardContent>
              </EnhancedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10 bg-[size:20px_20px]" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help grow your business.
          </p>
          <EnhancedButton
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Contact Us Today
          </EnhancedButton>
        </div>
      </section>
    </div>
  );
};

export default Services;