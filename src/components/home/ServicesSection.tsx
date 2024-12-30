import { Paintbrush, Code, Search, LineChart, Globe, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Design",
    description: "Custom-designed websites that capture your brand's essence and engage your audience.",
    icon: <Paintbrush className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-primary/20 via-secondary/10 to-primary/5",
  },
  {
    title: "Web Development",
    description: "Powerful, scalable web applications built with modern technologies.",
    icon: <Code className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-secondary/20 via-primary/10 to-secondary/5",
  },
  {
    title: "SEO Optimization",
    description: "Boost your visibility and reach more customers with our expert SEO services.",
    icon: <Search className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-primary/20 via-secondary/10 to-primary/5",
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions to grow your online presence.",
    icon: <LineChart className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-secondary/20 via-primary/10 to-secondary/5",
  },
  {
    title: "Global Reach",
    description: "Expand your business globally with our international digital solutions.",
    icon: <Globe className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-primary/20 via-secondary/10 to-primary/5",
  },
  {
    title: "Fast Deployment",
    description: "Quick and efficient deployment of your digital solutions.",
    icon: <Rocket className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-secondary/20 via-primary/10 to-secondary/5",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-muted text-center mb-12 max-w-2xl mx-auto">
          Comprehensive digital solutions to help your business thrive in the modern world
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-accent rounded-lg inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-primary hover:text-secondary transition-colors inline-flex items-center group"
                >
                  Learn More{" "}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;