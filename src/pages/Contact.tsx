import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import TelephoneParticles from "@/components/ui/TelephoneParticles";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create mailto link with form data, using the user's email in the "from" field
      const mailtoLink = `mailto:hello@webwoven.co.uk?from=${encodeURIComponent(formData.email)}&subject=Contact Form Submission from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      // Clear form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Show success message
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon!",
      });
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 relative">
      {/* Hero Section with Particles */}
      <section className="py-20 bg-background relative overflow-hidden">
        <TelephoneParticles />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">Contact Us</h1>
            <p className="text-xl text-muted">
              Get in touch with us to discuss your project.
            </p>
          </div>
        </div>
      </section>

    {/* Contact Form & Info */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-secondary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-muted">
                      3 Ward Street
                      <br />
                      Wolverhampton, WV13LT
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-secondary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <a 
                      href="mailto:hello@webwoven.co.uk" 
                      className="text-muted hover:text-primary transition-colors"
                    >
                      hello@webwoven.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-secondary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted">07570732244</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Your Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="min-h-[150px]"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Contact;
