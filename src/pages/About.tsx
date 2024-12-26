import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  speed: number;
  angle: number;
  scale: number;
  opacity: number;
  glowIntensity: number;
}

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const section = canvas.parentElement;
      if (section) {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
      }
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: 15 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 0.5,
        angle: Math.random() * Math.PI * 2,
        scale: 0.5 + Math.random() * 0.5,
        opacity: 0.3 + Math.random() * 0.3,
        glowIntensity: 0.5,
      }));
    };
    initParticles();

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Draw book particle
    const drawBook = (ctx: CanvasRenderingContext2D, x: number, y: number, scale: number, opacity: number, glowIntensity: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);

      // Add glow effect
      ctx.shadowBlur = 20 * glowIntensity;
      ctx.shadowColor = Math.random() > 0.5 ? "#FFD700" : "#00E5C3";
      ctx.globalAlpha = opacity;

      // Draw book shape
      ctx.beginPath();
      ctx.moveTo(-20, -15);
      ctx.lineTo(20, -15);
      ctx.lineTo(20, 15);
      ctx.lineTo(-20, 15);
      ctx.closePath();
      ctx.fillStyle = "#1C1C1C";
      ctx.strokeStyle = ctx.shadowColor;
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();

      // Draw book spine
      ctx.beginPath();
      ctx.moveTo(-20, -15);
      ctx.lineTo(-15, -15);
      ctx.lineTo(-15, 15);
      ctx.lineTo(-20, 15);
      ctx.closePath();
      ctx.fillStyle = ctx.shadowColor;
      ctx.fill();

      ctx.restore();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.angle = Math.PI - particle.angle;
        if (particle.y < 0 || particle.y > canvas.height) particle.angle = -particle.angle;

        // Calculate distance to mouse
        const dx = particle.x - mouseRef.current.x;
        const dy = particle.y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Update glow intensity based on mouse proximity
        particle.glowIntensity = Math.min(2, 0.5 + (200 - Math.min(distance, 200)) / 100);

        // Draw the book
        drawBook(ctx, particle.x, particle.y, particle.scale, particle.opacity, particle.glowIntensity);
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section with Canvas Background */}
      <section className="relative py-20 bg-background overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: "none" }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">Our Story</h1>
            <p className="text-xl text-foreground/80">
              Building digital excellence through innovation and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">Who We Are</h2>
                <p className="text-foreground/80 mb-4">
                  Web Woven was founded with a vision to help businesses thrive in
                  the digital age. We believe in creating websites that not only
                  look beautiful but also drive results.
                </p>
                <p className="text-foreground/80 mb-6">
                  Our team of experts combines creativity with technical expertise
                  to deliver solutions that exceed expectations.
                </p>
                <Button className="bg-primary hover:bg-primary-hover">Learn More About Us</Button>
              </div>
              <div className="bg-card h-[400px] rounded-lg animate-float">
                {/* Placeholder for company image */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-card h-[400px] rounded-lg animate-float">
                {/* Placeholder for founder image */}
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
    </div>
  );
};

export default About;