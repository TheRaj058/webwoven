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
    name: "Jake Harper",
    role: "Creative Lead",
    company: "Lumina Designs",
    content: "Web Woven brought our vision to life with an innovative design and seamless functionality. Their custom web solutions exceeded our expectations.",
  },
  {
    id: 2,
    name: "Olivia Smith",
    role: "CEO",
    company: "Apex Retail",
    content: "The team's professionalism and expertise made launching our site a stress-free experience. Their dynamic website design perfectly captured our brand essence.",
  },
  {
    id: 3,
    name: "Liam Jones",
    role: "Director",
    company: "NextStep Enterprises",
    content: "Our new site perfectly reflects our brand thanks to Web Woven's dedication and skill. Their responsive development services ensure our site works flawlessly across all devices.",
  },
  {
    id: 4,
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "Global Solutions",
    content: "Working with Web Woven transformed our online presence. Their secure websites and SEO expertise have significantly boosted our visibility and customer trust.",
  },
  {
    id: 5,
    name: "Michael Rodriguez",
    role: "Founder",
    company: "Innovative Tech",
    content: "The custom features and responsive design implemented by Web Woven have revolutionized how we interact with our customers online.",
  }
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