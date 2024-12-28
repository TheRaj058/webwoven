import HeroSection from "@/components/about/HeroSection";
import CompanySection from "@/components/about/CompanySection";
import FounderSection from "@/components/about/FounderSection";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <HeroSection />
      <CompanySection />
      <FounderSection />
    </div>
  );
};

export default About;