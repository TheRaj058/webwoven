import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  keywords: string[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jake Harper",
    role: "Creative Lead",
    company: "Lumina Designs",
    content: "I was hesitant about investing in a new website, but Web Woven made the whole process incredibly smooth. Their team took the time to understand our brand and delivered a custom website that looks fantastic and performs even better. The best part? It didn't break the bank!",
    rating: 5,
    keywords: ["affordable web development", "custom website design"]
  },
  {
    id: 2,
    name: "Olivia Smith",
    role: "CEO",
    company: "Apex Retail",
    content: "What a game-changer Web Woven has been for our business! Our online sales have doubled since launching our new SEO-optimized website. Their team was super responsive and really understood what we needed as a small business. I couldn't be happier with the results!",
    rating: 5,
    keywords: ["SEO-optimized websites", "small business website solutions"]
  },
  {
    id: 3,
    name: "Liam Jones",
    role: "Director",
    company: "NextStep Enterprises",
    content: "Working with Web Woven was honestly the best decision we made for our online presence. They didn't just build us a website - they created a digital storefront that perfectly captures our brand's personality. Their pricing was transparent and the value for money is incredible!",
    rating: 5,
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
        className="w-5 h-5 fill-primary text-primary inline-block" 
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
                    
                    <div className="relative flex flex-col items-center gap-6 mb-6">
                      <div className="text-center">
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
      </div>
    </section>
  );
};

export default TestimonialCarousel;