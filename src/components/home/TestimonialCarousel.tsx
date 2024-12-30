import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content: "WebWoven transformed our online presence completely. Their attention to detail and innovative approach helped us achieve a 200% increase in user engagement.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Global Solutions",
    content: "The team's expertise in web development and SEO has been invaluable. Our website now ranks first for several key terms in our industry.",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Founder",
    company: "Eco Ventures",
    content: "Working with WebWoven was a game-changer for our startup. They delivered a beautiful, functional website that perfectly represents our brand.",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "CTO",
    company: "DataFlow Systems",
    content: "The technical expertise and professional approach of the WebWoven team exceeded our expectations. Highly recommended!",
  },
  {
    id: 5,
    name: "Lisa Martinez",
    role: "Owner",
    company: "Artisan Crafts",
    content: "Our e-commerce site has never performed better. The user experience is smooth, and our sales have increased significantly.",
  },
  {
    id: 6,
    name: "David Kim",
    role: "Digital Manager",
    company: "Innovation Hub",
    content: "The responsive design and optimization work done by WebWoven has greatly improved our mobile conversion rates.",
  },
  {
    id: 7,
    name: "Rachel Thompson",
    role: "Operations Director",
    company: "Swift Solutions",
    content: "From concept to execution, WebWoven delivered excellence at every step. Their support team is incredibly responsive.",
  },
  {
    id: 8,
    name: "Alex Rodriguez",
    role: "Product Manager",
    company: "Tech Innovators",
    content: "The custom features developed by WebWoven have streamlined our internal processes and improved customer satisfaction.",
  },
  {
    id: 9,
    name: "Sophie Anderson",
    role: "Creative Director",
    company: "Design Studio Pro",
    content: "As a design professional, I appreciate WebWoven's attention to aesthetic details while maintaining excellent functionality.",
  },
  {
    id: 10,
    name: "Tom Parker",
    role: "E-commerce Manager",
    company: "Retail Plus",
    content: "The integration of our e-commerce platform was seamless. Our online store has never been more successful.",
  },
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
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

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="group h-full">
              <div className="relative h-full p-6 bg-card rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg group-hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                  <blockquote className="text-sm leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TestimonialCarousel;