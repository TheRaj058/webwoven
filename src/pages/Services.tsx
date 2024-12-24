import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Web Design & Development",
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
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">Our Services</h1>
            <p className="text-xl text-gray-600">
              Comprehensive web solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-600"
                    >
                      <Check className="text-secondary mr-2" size={20} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button>Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can help grow your business.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;