import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, DollarSign, Users, Zap, Target, Briefcase } from "lucide-react";
import DollarParticles from "@/components/ui/DollarParticles";
import SEOHead from "@/components/seo/SEOHead";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { supabase } from "@/lib/supabase";

const ReferAndEarn = () => {
  const { toast } = useToast();
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [referralData, setReferralData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    referredName: "",
    referredEmail: "",
    referredPhone: ""
  });

  const handleReferralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setReferralData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleReferralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Call edge function to send referral email
      const { data, error } = await supabase.functions.invoke('send-referral-email', {
        body: {
          referrerName: referralData.referrerName,
          referrerEmail: referralData.referrerEmail,
          referrerPhone: referralData.referrerPhone,
          referredName: referralData.referredName,
          referredEmail: referralData.referredEmail,
          referredPhone: referralData.referredPhone,
        }
      });

      if (error) throw error;
      
      // Reset form
      setReferralData({
        referrerName: "",
        referrerEmail: "",
        referrerPhone: "",
        referredName: "",
        referredEmail: "",
        referredPhone: ""
      });
      
      toast({
        title: "✅ Thanks for your referral!",
        description: "If they choose to work with us, we'll notify you and pay you 10% once the project is completed.",
      });
      
    } catch (error) {
      console.error("Error sending referral:", error);
      toast({
        title: "❌ Something went wrong",
        description: "There was an error submitting your referral. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="Refer & Earn 10% Commission | Web Woven Referral Program"
        description="Earn 10% commission for every successful website referral. Simple referral program with transparent rewards. Start earning today with Web Woven's refer and earn program."
        keywords="web development referral program, earn with website referrals, passive income web design, refer & earn web agency, website commission program"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-accent/20 relative overflow-hidden">
        <DollarParticles />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              🎉 Refer & Earn with Web Woven – Get 10% Commission!
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              💰 Know someone who needs a website? Refer them to Web Woven, and if we close the deal, you'll earn 10% of the revenue from that project.<br />
              <span className="font-semibold text-primary">No limits. No hassle. Just smart referrals and extra income.</span>
            </p>
            
            {/* Keywords for SEO */}
            <div className="hidden">
              web development referral program, earn with website referrals, passive income web design, refer & earn web agency, website commission program
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Join Our Web Development Referral Program?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">10% Commission</h3>
                <p className="text-muted-foreground">Earn with website referrals - get 10% of every successful project</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow">
                <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unlimited Referrals</h3>
                <p className="text-muted-foreground">No limits on passive income web design referrals</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Payments</h3>
                <p className="text-muted-foreground">Get paid after project completion through our refer & earn web agency program</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Process</h3>
                <p className="text-muted-foreground">Simple website commission program - just refer and earn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form Section */}
      <section className="py-20 bg-gradient-to-b from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">📄 Start Your Referral</h2>
              <p className="text-lg text-muted-foreground">Join our web development referral program and start earning today!</p>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-lg border">
              <form onSubmit={handleReferralSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Referrer Details */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                      <Briefcase className="h-6 w-6" />
                      Your Details
                    </h3>
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
                          className="transition-all duration-200 focus:scale-[1.02]"
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
                          className="transition-all duration-200 focus:scale-[1.02]"
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
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Referred Person Details */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center gap-2">
                      <Target className="h-6 w-6" />
                      Referred Business/Person Details
                    </h3>
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
                          className="transition-all duration-200 focus:scale-[1.02]"
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
                          className="transition-all duration-200 focus:scale-[1.02]"
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
                          className="transition-all duration-200 focus:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms & Conditions */}
                <div className="bg-accent/10 p-6 rounded-lg border">
                  <Collapsible open={isTermsOpen} onOpenChange={setIsTermsOpen}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full text-left hover:text-primary transition-colors">
                      <span className="font-medium text-lg">📜 Terms & Conditions apply</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${isTermsOpen ? 'rotate-180' : ''}`} />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 text-sm text-muted-foreground space-y-2 pl-4">
                      <p>• Referred client must mention the referrer's name when contacting us.</p>
                      <p>• Referral details must match the form submission exactly.</p>
                      <p>• 10% payment will only be made after Web Woven receives full payment from the client.</p>
                      <p>• No payment if the client doesn't proceed with the deal or project.</p>
                      <p>• This website commission program is subject to project completion and client satisfaction.</p>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                >
                  🔘 Submit Referral & Start Earning!
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferAndEarn;