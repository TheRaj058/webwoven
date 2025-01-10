import { useState } from "react";
import { Input } from "@/components/ui/input";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { z } from "zod";

const emailSchema = z.string().email('Please enter a valid email address');

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const validateEmail = (email: string) => {
    try {
      emailSchema.parse(email);
      setError(null);
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
      return false;
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail) {
      validateEmail(newEmail);
    } else {
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log("Attempting to save subscriber:", email);
      
      // Add honeypot check
      const formElement = e.target as HTMLFormElement;
      const honeypot = formElement.querySelector<HTMLInputElement>('input[name="website"]');
      if (honeypot && honeypot.value) {
        console.log("Honeypot triggered - likely bot submission");
        throw new Error("Invalid submission");
      }

      const { error: dbError } = await supabase
        .from('newsletter_subscribers')
        .insert([
          { 
            email,
            subscribed_at: new Date().toISOString(),
            status: 'active'
          }
        ]);

      if (dbError) throw dbError;
      
      console.log("Successfully saved subscriber");
      
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Error saving subscriber:", error);
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
        {/* Honeypot field */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          className="absolute opacity-0 h-0"
          autoComplete="off"
        />
        
        <div className="relative flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
            className={`w-full sm:pr-32 ${error ? 'border-red-500' : ''}`}
            disabled={isSubmitting}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? "email-error" : undefined}
          />
          <EnhancedButton
            type="submit"
            className="w-full sm:w-auto sm:absolute sm:right-1 sm:top-1 h-8"
            disabled={isSubmitting || !!error}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </EnhancedButton>
        </div>
        {error && (
          <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default NewsletterSignup;