import { ArrowRight } from "lucide-react";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Link } from "react-router-dom";
import { lazy, Suspense, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { measurePerformance, measureResourceLoading } from '@/utils/performance';

const TypewriterEffect = lazy(() => {
  console.log('[Lazy Load] Loading TypewriterEffect');
  return import('./TypewriterEffect');
});

const DigitalBackground = lazy(() => {
  console.log('[Lazy Load] Loading DigitalBackground');
  return import('./DigitalBackground');
});

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const endMeasure = measurePerformance('HeroSection');
    measureResourceLoading();
    
    return endMeasure;
  }, []);

  return (
    <section 
      ref={ref}
      id="hero-section" 
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 bg-[length:200%_100%] animate-gradient-flow" />
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />
      
      <Suspense fallback={<div className="absolute inset-0 bg-background animate-pulse" />}>
        {inView && <DigitalBackground />}
      </Suspense>
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-down bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient-flow shadow-glow">
            Expert Web Development in Wolverhampton
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Professional web design and development services. Create a responsive, 
            SEO-friendly website that drives results for your business.
          </p>
          
          <Suspense fallback={<div className="h-8 bg-accent/20 animate-pulse rounded" />}>
            {inView && <TypewriterEffect />}
          </Suspense>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-a-quote">
              <EnhancedButton
                size="lg"
                className="animate-fade-up bg-primary hover:bg-secondary transition-all duration-300 hover:scale-105 hover:animate-glow relative overflow-hidden group w-full sm:w-auto"
              >
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="ml-2 relative z-10" size={20} />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient-flow" />
              </EnhancedButton>
            </Link>
            <Link to="/services">
              <EnhancedButton
                size="lg"
                variant="outline"
                className="animate-fade-up transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Explore Our Services
              </EnhancedButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;