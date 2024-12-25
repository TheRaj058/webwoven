import { ArrowRight } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Custom-designed websites that capture your brand's essence and engage your audience.",
      icon: "🎨",
    },
    {
      title: "Web Development",
      description:
        "Powerful, scalable web applications built with modern technologies.",
      icon: "💻",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your visibility and reach more customers with our expert SEO services.",
      icon: "📈",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient-flow">
              Weaving Your Digital Presence
            </h1>
            <p className="text-xl text-muted mb-8 animate-fade-up">
              We create stunning websites that help businesses thrive in the
              digital world.
            </p>
            <Link to="/get-a-quote">
              <EnhancedButton
                size="lg"
                className="animate-fade-up bg-primary hover:bg-primary/90 transition-all duration-300"
              >
                Get Started Today <ArrowRight className="ml-2" size={20} />
              </EnhancedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 animate-float">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-primary hover:text-secondary transition-colors inline-flex items-center"
                >
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl mb-8 text-muted">
            Let's create something amazing together.
          </p>
          <Link to="/get-a-quote">
            <EnhancedButton
              size="lg"
              className="bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              Start Your Project <ArrowRight className="ml-2" size={20} />
            </EnhancedButton>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;