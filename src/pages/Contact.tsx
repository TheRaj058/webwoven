import { Mail, MapPin, Phone, ChevronDown, DollarSign, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import TelephoneParticles from "@/components/ui/TelephoneParticles";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [referralData, setReferralData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    referredName: "",
    referredEmail: "",
    referredPhone: ""
  });
  
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleReferralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setReferralData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mqarbjoa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send");
      
      setFormData({ name: "", email: "", message: "" });
      
      toast({
        title: "✅ Your message has been sent successfully!",
        description: "We'll get back to you soon.",
      });
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "❌ Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleReferralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mldqnvkg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(referralData),
      });

      if (!response.ok) throw new Error("Failed to send");
      
      setReferralData({
        referrerName: "",
        referrerEmail: "",
        referrerPhone: "",
        referredName: "",
        referredEmail: "",
        referredPhone: ""
      });
      
      toast({
        title: "✅ Thank you for your referral!",
        description: "Our team will reach out to your contact. If they choose to work with us, you'll receive 10% of the earnings after project completion!",
      });
      
    } catch (error) {
      console.error("Error sending referral:", error);
      toast({
        title: "Error",
        description: "There was an error submitting your referral. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 relative">
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

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
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
                        href="mailto:bableerajaryal2@gmail.com" 
                        className="text-muted hover:text-primary transition-colors"
                      >
                        bableerajaryal2@gmail.com
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

      {/* Refer & Earn Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Refer & Earn – Get 10% for Every Successful Referral!
              </h2>
              <p className="text-xl text-muted-foreground">
                💰 Know someone who needs a website? Send them our way and earn 10% of the total project value once we complete their website. No limits, no hassle – just easy earnings!
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">10% Commission</h3>
                <p className="text-muted-foreground">Earn 10% of every successful project you refer</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unlimited Referrals</h3>
                <p className="text-muted-foreground">No limits on how many people you can refer</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Instant Rewards</h3>
                <p className="text-muted-foreground">Get paid after project completion</p>
              </div>
            </div>

            {/* Referral Form */}
            <div className="bg-card p-8 rounded-lg shadow-sm border">
              <form onSubmit={handleReferralSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Referrer Details */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-primary">Your Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="referrerName" className="block text-sm font-medium mb-1">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="referrerName"
                          type="text"
                          placeholder="Your full name"
                          required
                          value={referralData.referrerName}
                          onChange={handleReferralChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="referrerEmail" className="block text-sm font-medium mb-1">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="referrerEmail"
                          type="email"
                          placeholder="Your email address"
                          required
                          value={referralData.referrerEmail}
                          onChange={handleReferralChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="referrerPhone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="referrerPhone"
                          type="tel"
                          placeholder="Your phone number"
                          value={referralData.referrerPhone}
                          onChange={handleReferralChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Referred Person Details */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-primary">Referred Person/Business Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="referredName" className="block text-sm font-medium mb-1">
                          Business/Person Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="referredName"
                          type="text"
                          placeholder="Business or person name"
                          required
                          value={referralData.referredName}
                          onChange={handleReferralChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="referredEmail" className="block text-sm font-medium mb-1">
                          Contact Email <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="referredEmail"
                          type="email"
                          placeholder="Their email address"
                          required
                          value={referralData.referredEmail}
                          onChange={handleReferralChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="referredPhone" className="block text-sm font-medium mb-1">
                          Contact Phone Number
                        </label>
                        <Input
                          id="referredPhone"
                          type="tel"
                          placeholder="Their phone number"
                          value={referralData.referredPhone}
                          onChange={handleReferralChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="bg-accent/10 p-4 rounded-lg">
                  <Collapsible open={isTermsOpen} onOpenChange={setIsTermsOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                      <span className="font-medium">Terms and Conditions</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isTermsOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 text-sm text-muted-foreground space-y-2">
                      <p>• The business must mention the referrer when contacting us.</p>
                      <p>• Details must match the referral form submission.</p>
                      <p>• Payment is only made after Web Woven receives full payment from the referred client.</p>
                      <p>• No payment if the referred client doesn't proceed with the business.</p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg">
                  Submit Referral & Start Earning!
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
