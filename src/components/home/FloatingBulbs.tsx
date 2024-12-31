import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';

interface Bulb {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  glowIntensity: number;
  flickerState: number;
  color: string;
}

const FloatingBulbs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bulbsRef = useRef<Bulb[]>([]);
  const [hoveredBulb, setHoveredBulb] = useState<number | null>(null);
  const [clickedBulb, setClickedBulb] = useState<number | null>(null);
  const animationFrameRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });

  const colors = ['#00BFA6', '#FF9F43', '#9b87f5'];

  const initBulbs = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const bulbs: Bulb[] = [];
    const numBulbs = 8;

    for (let i = 0; i < numBulbs; i++) {
      bulbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 3 + Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        glowIntensity: 0.5 + Math.random() * 0.5,
        flickerState: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    bulbsRef.current = bulbs;
  }, []);

  const drawBulb = useCallback((
    ctx: CanvasRenderingContext2D,
    bulb: Bulb,
    index: number
  ) => {
    const isHovered = hoveredBulb === index;
    const isClicked = clickedBulb === index;
    
    const baseGlow = bulb.glowIntensity * (isHovered ? 1.5 : 1);
    const flickerEffect = 0.8 + (Math.sin(Date.now() * 0.005 + index) * 0.2);
    const clickEffect = isClicked ? 1.5 : 1;
    
    const finalGlow = baseGlow * flickerEffect * clickEffect;

    ctx.save();
    ctx.globalAlpha = 0.8;
    
    // Main glow
    const gradient = ctx.createRadialGradient(
      bulb.x, bulb.y, 0,
      bulb.x, bulb.y, bulb.size * 10 * finalGlow
    );
    
    gradient.addColorStop(0, `${bulb.color}80`);
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(bulb.x, bulb.y, bulb.size * 10 * finalGlow, 0, Math.PI * 2);
    ctx.fill();
    
    // Core
    ctx.fillStyle = bulb.color;
    ctx.beginPath();
    ctx.arc(bulb.x, bulb.y, bulb.size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  }, [hoveredBulb, clickedBulb]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bulbsRef.current.forEach((bulb, index) => {
      // Update position
      bulb.x += bulb.speedX;
      bulb.y += bulb.speedY;

      // Bounce off edges
      if (bulb.x < 0 || bulb.x > canvas.width) bulb.speedX *= -1;
      if (bulb.y < 0 || bulb.y > canvas.height) bulb.speedY *= -1;

      // Random direction changes
      if (Math.random() < 0.005) {
        bulb.speedX = (Math.random() - 0.5) * 0.5;
        bulb.speedY = (Math.random() - 0.5) * 0.5;
      }

      // Update flicker state
      bulb.flickerState += (Math.random() - 0.5) * 0.1;
      bulb.flickerState = Math.max(0.5, Math.min(1.5, bulb.flickerState));

      drawBulb(ctx, bulb, index);
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [drawBulb]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mousePos.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };

    // Check for hover
    const hoveredIndex = bulbsRef.current.findIndex(bulb => {
      const dx = mousePos.current.x - bulb.x;
      const dy = mousePos.current.y - bulb.y;
      return Math.sqrt(dx * dx + dy * dy) < bulb.size * 10;
    });

    setHoveredBulb(hoveredIndex >= 0 ? hoveredIndex : null);
  }, []);

  const handleClick = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const clickedIndex = bulbsRef.current.findIndex(bulb => {
      const dx = clickX - bulb.x;
      const dy = clickY - bulb.y;
      return Math.sqrt(dx * dx + dy * dy) < bulb.size * 10;
    });

    if (clickedIndex >= 0) {
      setClickedBulb(clickedIndex);
      setTimeout(() => setClickedBulb(null), 500);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initBulbs();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [animate, handleMouseMove, handleClick, initBulbs]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 1 }}
    />
  );
};

export default FloatingBulbs;