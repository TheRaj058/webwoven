import { useState } from "react";
import { Input } from "@/components/ui/input";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store email in localStorage temporarily until Supabase is connected
      const subscribers = JSON.parse(localStorage.getItem("newsletter_subscribers") || "[]");
      subscribers.push({ email, subscribedAt: new Date().toISOString() });
      localStorage.setItem("newsletter_subscribers", JSON.stringify(subscribers));
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-0">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:pr-32"
            disabled={isSubmitting}
          />
          <EnhancedButton
            type="submit"
            className="w-full sm:w-auto sm:absolute sm:right-1 sm:top-1 h-8"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </EnhancedButton>
        </div>
      </form>
    </div>
  );
};

export default NewsletterSignup;