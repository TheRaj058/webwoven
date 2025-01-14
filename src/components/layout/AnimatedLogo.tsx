import { cn } from "@/lib/utils";
import { memo } from 'react';

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo = memo(({ className }: AnimatedLogoProps) => {
  return (
    <div className={cn("relative group", className)}>
      <img
        src="/lovable-uploads/a1f0e7a0-926a-4724-80d3-4f73fac77153.png"
        alt="Web Woven Logo"
        className="w-40 h-auto transition-all duration-300 group-hover:scale-105"
        loading="eager"
        width={160}
        height={40}
      />
      <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
    </div>
  );
});

AnimatedLogo.displayName = 'AnimatedLogo';

export default AnimatedLogo;