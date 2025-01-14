import { Paintbrush, Code, Search, LineChart, Globe, Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Custom Website Design",
    description: "Professional web design services tailored to your brand. Our responsive and user-friendly designs ensure optimal viewing across all devices, perfect for businesses in Wolverhampton and across the UK.",
    icon: <Paintbrush className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-primary/20 via-secondary/10 to-primary/5",
    alt: "Professional web design services in Wolverhampton",
  },
  {
    title: "E-commerce Development",
    description: "Expert e-commerce website development services. We create secure, scalable online stores that help UK businesses thrive in the digital marketplace.",
    icon: <Code className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-secondary/20 via-primary/10 to-secondary/5",
    alt: "E-commerce website development UK",
  },
  {
    title: "SEO Optimization",
    description: "Comprehensive SEO services to improve your search engine rankings. We implement proven strategies to increase your online visibility and attract more customers.",
    icon: <Search className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-primary/20 via-secondary/10 to-primary/5",
    alt: "SEO-friendly website optimization",
  },
  {
    title: "Digital Marketing",
    description: "Strategic digital marketing solutions for UK businesses. Our team crafts tailored strategies to enhance your brand's online presence and drive growth.",
    icon: <LineChart className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-secondary/20 via-primary/10 to-secondary/5",
    alt: "Digital marketing services Wolverhampton",
  },
  {
    title: "Website Maintenance",
    description: "Professional website maintenance and support services. Keep your website secure, up-to-date, and performing at its best with our expert maintenance packages.",
    icon: <Globe className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-primary/20 via-secondary/10 to-primary/5",
    alt: "Website maintenance services UK",
  },
  {
    title: "Fast Deployment",
    description: "Quick and efficient website deployment for UK businesses. We ensure your web projects go live smoothly and perform optimally from day one.",
    icon: <Rocket className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
    gradient: "from-secondary/20 via-primary/10 to-secondary/5",
    alt: "Fast website deployment services",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 relative" id="services">
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-muted text-center mb-12 max-w-2xl mx-auto">
          Professional web development and design services in Wolverhampton. We create responsive, 
          SEO-friendly websites that help businesses thrive in the digital world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
              
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
                  aria-label={`Learn more about our ${service.title} services`}
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
