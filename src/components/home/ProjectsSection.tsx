import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import LazyImage from "@/components/ui/lazy-image";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Authentic Bite",
      description: "A ready-to-eat meals online platform featuring intuitive ordering, secure payments, and responsive design for seamless mobile experience.",
      image: "/lovable-uploads/0561f373-d560-4b89-93e9-52eda0a2d33b.png",
      url: "https://www.authenticbite.shop/",
      alt: "Web development project – Authentic Bite website ready-to-eat meals platform"
    },
    {
      id: 2,
      title: "AJ Detailing",
      description: "A car detailing and protection services website with booking system, service showcase, and mobile-optimized design for local customers.",
      image: "/lovable-uploads/aj-detailing-project.jpg", 
      url: "https://www.ajdetailingg.com/",
      alt: "Web development project – AJ Detailing car detailing services website"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Our Projects – Websites We've Built
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Take a look at some of the websites we've created for our clients. We deliver professional, 
            responsive, and SEO-friendly websites tailored to each business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  fallback="/placeholder.svg"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 group-hover:shadow-lg"
                >
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    View Website
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Keywords Integration */}
        <div className="sr-only">
          <h3>Web Development Portfolio Keywords</h3>
          <p>
            Professional websites, SEO-friendly websites, responsive web design, 
            website projects, web development portfolio, custom website development, 
            business website solutions, modern web design
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;