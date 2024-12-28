import { useRef, useEffect } from "react";
import { drawBook, initParticles, updateParticles } from "@/utils/canvasUtils";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      const section = canvas.parentElement;
      if (section) {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
      }
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    initParticles(particlesRef, canvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      updateParticles(ctx, particlesRef.current, canvas, mouseRef.current, drawBook);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
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
  );
};

export default HeroSection;