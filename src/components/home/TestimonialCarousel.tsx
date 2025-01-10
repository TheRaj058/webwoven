import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
  keywords: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jake Harper",
    role: "Creative Lead",
    company: "Lumina Designs",
    content: "Web Woven delivered an affordable web development solution that exceeded our expectations. Their custom website design perfectly captured our brand's essence while ensuring optimal performance.",
    rating: 5,
    image: "/lovable-uploads/photo-1488590528505-98d2b5aba04b.jpg",
    keywords: ["affordable web development", "custom website design"]
  },
  {
    id: 2,
    name: "Olivia Smith",
    role: "CEO",
    company: "Apex Retail",
    content: "The SEO-optimized website Web Woven created has significantly improved our online visibility. Their small business website solutions are both professional and cost-effective.",
    rating: 5,
    image: "/lovable-uploads/photo-1581091226825-a6a2a5aee158.jpg",
    keywords: ["SEO-optimized websites", "small business website solutions"]
  },
  {
    id: 3,
    name: "Liam Jones",
    role: "Director",
    company: "NextStep Enterprises",
    content: "Working with Web Woven transformed our online presence. Their affordable web development services and attention to detail resulted in a website that perfectly represents our brand.",
    rating: 5,
    image: "/lovable-uploads/photo-1581092795360-fd1ca04f0952.jpg",
    keywords: ["affordable web development", "custom website design"]
  }
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
  });

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [emblaApi]);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, index) => (
      <Star 
        key={index} 
        className="w-5 h-5 fill-secondary text-secondary inline-block" 
      />
    ));
  };

  return (
    <section className="w-full py-16 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-fade-up">
          What Our Clients Say About Web Woven
        </h2>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full">
                <div className="group h-full">
                  <div className="relative h-full p-8 bg-card rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group-hover:shadow-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative flex flex-col md:flex-row items-center gap-6 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name} from ${testimonial.company}`}
                        className="w-24 h-24 rounded-full object-cover animate-fade-up"
                      />
                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold">{testimonial.name}</h4>
                        <p className="text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                        <div className="mt-2">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>

                    <blockquote className="text-lg leading-relaxed mb-4 animate-fade-up">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex flex-wrap gap-2">
                      {testimonial.keywords.map((keyword, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-12 animate-fade-up">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to Build Your Website? Let Web Woven Help!
          </h3>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-hover text-white px-8 py-6 text-lg animate-pulse"
            onClick={() => window.location.href = '/get-a-quote'}
          >
            Get Started Today!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;