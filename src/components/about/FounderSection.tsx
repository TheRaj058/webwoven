import { Button } from "@/components/ui/button";

const FounderSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/0b45e1c2-a75d-46f8-9557-5d5db751e837.png" 
                alt="Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Meet Our Founder</h2>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Sharad Raj Aryal</h3>
              <p className="text-foreground/80 mb-6">
                With over a decade of experience in web development and digital
                marketing, Sharad founded Web Woven with a mission to help
                businesses establish a strong online presence.
              </p>
              <a
                href="https://www.linkedin.com/in/sharadraj-aryal-91531b167/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="hover:bg-primary hover:text-foreground">
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;