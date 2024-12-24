import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Custom-designed websites that capture your brand's essence and engage your audience.",
    },
    {
      title: "Web Development",
      description:
        "Powerful, scalable web applications built with modern technologies.",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your visibility and reach more customers with our expert SEO services.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
            alt="Web Development Banner"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
              Weaving Your Digital Presence
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fade-up">
              We create stunning websites that help businesses thrive in the
              digital world.
            </p>
            <Link to="/get-a-quote">
              <Button size="lg" className="animate-fade-up">
                Get a Quote <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-secondary hover:text-accent transition-colors inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's create something amazing together.
          </p>
          <Link to="/get-a-quote">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;