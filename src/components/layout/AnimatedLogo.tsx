import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  className?: string;
}

const AnimatedLogo = ({ className }: AnimatedLogoProps) => {
  return (
    <div className={cn("relative group", className)}>
      <img
        src="/lovable-uploads/a1f0e7a0-926a-4724-80d3-4f73fac77153.png"
        alt="Web Woven Logo"
        className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default AnimatedLogo;