import * as React from "react";
import { cn } from "@/lib/utils";
import { Button as BaseButton, ButtonProps as BaseButtonProps } from "./button";

export interface EnhancedButtonProps extends BaseButtonProps {
  ripple?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, ripple = true, children, ...props }, ref) => {
    const [coords, setCoords] = React.useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = React.useState(false);

    React.useEffect(() => {
      if (coords.x !== -1 && coords.y !== -1) {
        setIsRippling(true);
        setTimeout(() => setIsRippling(false), 600);
      } else {
        setIsRippling(false);
      }
    }, [coords]);

    React.useEffect(() => {
      if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      props.onClick?.(e);
    };

    return (
      <BaseButton
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          "hover:shadow-lg hover:scale-[1.02]",
          "active:scale-[0.98]",
          "before:absolute before:inset-0",
          "before:bg-gradient-to-r before:from-transparent before:to-white/10",
          "before:opacity-0 hover:before:opacity-100",
          "before:transition-opacity before:duration-300",
          className
        )}
        onClick={ripple ? handleClick : props.onClick}
        {...props}
      >
        {ripple && isRippling && (
          <span
            className="absolute rounded-full bg-white/30 animate-ripple"
            style={{
              left: coords.x,
              top: coords.y,
              width: 20,
              height: 20,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
        {children}
      </BaseButton>
    );
  }
);
EnhancedButton.displayName = "EnhancedButton";

export { EnhancedButton };