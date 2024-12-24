import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Card as BaseCard,
  CardHeader as BaseCardHeader,
  CardFooter as BaseCardFooter,
  CardTitle as BaseCardTitle,
  CardDescription as BaseCardDescription,
  CardContent as BaseCardContent,
} from "./card";

const EnhancedCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BaseCard
    ref={ref}
    className={cn(
      "relative overflow-hidden transition-all duration-300",
      "hover:shadow-xl hover:scale-[1.01]",
      "bg-gradient-to-b from-white to-gray-50/50",
      "border border-gray-200/50",
      "backdrop-blur-sm",
      className
    )}
    {...props}
  />
));
EnhancedCard.displayName = "EnhancedCard";

const EnhancedCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BaseCardHeader
    ref={ref}
    className={cn("relative z-10", className)}
    {...props}
  />
));
EnhancedCardHeader.displayName = "EnhancedCardHeader";

const EnhancedCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BaseCardFooter
    ref={ref}
    className={cn(
      "relative z-10 border-t border-gray-100 bg-gray-50/50 backdrop-blur-sm",
      className
    )}
    {...props}
  />
));
EnhancedCardFooter.displayName = "EnhancedCardFooter";

const EnhancedCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <BaseCardTitle
    ref={ref}
    className={cn(
      "text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent",
      className
    )}
    {...props}
  />
));
EnhancedCardTitle.displayName = "EnhancedCardTitle";

const EnhancedCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <BaseCardDescription
    ref={ref}
    className={cn("text-muted-foreground/80", className)}
    {...props}
  />
));
EnhancedCardDescription.displayName = "EnhancedCardDescription";

const EnhancedCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <BaseCardContent ref={ref} className={cn("relative z-10", className)} {...props} />
));
EnhancedCardContent.displayName = "EnhancedCardContent";

export {
  EnhancedCard,
  EnhancedCardHeader,
  EnhancedCardFooter,
  EnhancedCardTitle,
  EnhancedCardDescription,
  EnhancedCardContent,
};