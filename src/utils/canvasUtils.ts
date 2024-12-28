interface Particle {
  x: number;
  y: number;
  speed: number;
  angle: number;
  scale: number;
  opacity: number;
  glowIntensity: number;
}

export const initParticles = (particlesRef: { current: Particle[] }, canvas: HTMLCanvasElement) => {
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

export const drawBook = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scale: number,
  opacity: number,
  glowIntensity: number
) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);

  ctx.shadowBlur = 20 * glowIntensity;
  ctx.shadowColor = Math.random() > 0.5 ? "#FFD700" : "#00E5C3";
  ctx.globalAlpha = opacity;

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

export const updateParticles = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  canvas: HTMLCanvasElement,
  mouse: { x: number; y: number },
  drawFunction: typeof drawBook
) => {
  particles.forEach((particle) => {
    particle.x += Math.cos(particle.angle) * particle.speed;
    particle.y += Math.sin(particle.angle) * particle.speed;

    if (particle.x < 0 || particle.x > canvas.width) particle.angle = Math.PI - particle.angle;
    if (particle.y < 0 || particle.y > canvas.height) particle.angle = -particle.angle;

    const dx = particle.x - mouse.x;
    const dy = particle.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    particle.glowIntensity = Math.min(2, 0.5 + (200 - Math.min(distance, 200)) / 100);

    drawFunction(ctx, particle.x, particle.y, particle.scale, particle.opacity, particle.glowIntensity);
  });
};