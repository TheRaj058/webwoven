import { ArrowRight, Globe, Code, Search, Rocket, Paintbrush, LineChart } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import TestimonialCarousel from "@/components/home/TestimonialCarousel";
import NewsletterSignup from "@/components/home/NewsletterSignup";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  opacity: number;
}

const Index = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const colors = ["#FF6F61", "#FF9F43", "#FFFFFF"];
    const newParticles: Particle[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('hero-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    document.getElementById('hero-section')?.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.getElementById('hero-section')?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const services = [
    {
      title: "Web Design",
      description:
        "Custom-designed websites that capture your brand's essence and engage your audience.",
      icon: <Paintbrush className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
      gradient: "from-primary/20 via-secondary/10 to-primary/5",
    },
    {
      title: "Web Development",
      description:
        "Powerful, scalable web applications built with modern technologies.",
      icon: <Code className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
      gradient: "from-secondary/20 via-primary/10 to-secondary/5",
    },
    {
      title: "SEO Optimization",
      description:
        "Boost your visibility and reach more customers with our expert SEO services.",
      icon: <Search className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
      gradient: "from-primary/20 via-secondary/10 to-primary/5",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic digital marketing solutions to grow your online presence.",
      icon: <LineChart className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
      gradient: "from-secondary/20 via-primary/10 to-secondary/5",
    },
    {
      title: "Global Reach",
      description:
        "Expand your business globally with our international digital solutions.",
      icon: <Globe className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
      gradient: "from-primary/20 via-secondary/10 to-primary/5",
    },
    {
      title: "Fast Deployment",
      description:
        "Quick and efficient deployment of your digital solutions.",
      icon: <Rocket className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
      gradient: "from-secondary/20 via-primary/10 to-secondary/5",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section id="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 bg-[length:200%_100%] animate-gradient-flow" />
        
        {/* Interactive floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => {
            const distance = Math.sqrt(
              Math.pow(particle.x - mousePosition.x, 2) + 
              Math.pow(particle.y - mousePosition.y, 2)
            );
            const glowIntensity = Math.max(0, 1 - distance / 20);
            
            return (
              <div
                key={particle.id}
                className="absolute rounded-full transition-all duration-300 animate-particle-glow"
                style={{
                  width: particle.size + "px",
                  height: particle.size + "px",
                  left: particle.x + "%",
                  top: particle.y + "%",
                  backgroundColor: particle.color,
                  opacity: particle.opacity + glowIntensity * 0.5,
                  transform: `scale(${1 + glowIntensity * 0.3})`,
                  boxShadow: `0 0 ${10 + glowIntensity * 20}px ${particle.color}`,
                  zIndex: Math.floor(glowIntensity * 10),
                }}
              />
            );
          })}
        </div>

        {/* Dot pattern overlay */}
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        
        {/* Content gradient overlay */}
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
                className="animate-fade-up bg-primary hover:bg-secondary transition-all duration-300 hover:scale-105 hover:animate-glow"
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

      {/* Testimonials Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-4">Client Testimonials</h2>
          <p className="text-xl text-muted text-center mb-12 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say about working with us
          </p>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted mb-8">
              Subscribe to our newsletter for the latest web development trends, tips, and insights.
            </p>
            <NewsletterSignup />
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
