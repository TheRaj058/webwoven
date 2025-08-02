import { useEffect, useState } from 'react';

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
  size: number;
  rotation: number;
  rotationSpeed: number;
}

interface ConfettiEffectProps {
  isActive: boolean;
  onComplete?: () => void;
  duration?: number;
}

const ConfettiEffect = ({ isActive, onComplete, duration = 3000 }: ConfettiEffectProps) => {
  const [particles, setParticles] = useState<ConfettiParticle[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];

  useEffect(() => {
    if (isActive && !isAnimating) {
      setIsAnimating(true);
      createConfetti();
      
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setParticles([]);
        onComplete?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isActive, isAnimating, duration, onComplete]);

  const createConfetti = () => {
    const newParticles: ConfettiParticle[] = [];
    
    for (let i = 0; i < 100; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        dx: (Math.random() - 0.5) * 4,
        dy: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }
    
    setParticles(newParticles);
    animateParticles(newParticles);
  };

  const animateParticles = (currentParticles: ConfettiParticle[]) => {
    const animate = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: particle.x + particle.dx,
          y: particle.y + particle.dy,
          dy: particle.dy + 0.1, // gravity
          rotation: particle.rotation + particle.rotationSpeed,
        })).filter(particle => particle.y < window.innerHeight + 10)
      );
    };

    const interval = setInterval(animate, 16);
    setTimeout(() => clearInterval(interval), duration);
  };

  if (!isAnimating) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiEffect;