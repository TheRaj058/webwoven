import HeroSection from "@/components/about/HeroSection";
import CompanySection from "@/components/about/CompanySection";
import FounderSection from "@/components/about/FounderSection";
import SEOHead from "@/components/seo/SEOHead";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      <SEOHead 
        title="About Web Woven | Web Development Company Wolverhampton"
        description="Learn about Web Woven - a professional web development company in Wolverhampton founded by Sharad Raj Aryal. We create affordable, custom websites for small businesses across the UK."
        keywords="about Web Woven, Wolverhampton web design company, Sharad Raj Aryal, UK web developers, small business website agency, professional web design team, West Midlands web development, affordable website designers"
        canonical="https://webwoven.co.uk/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "WebDesignCompany",
            "name": "Web Woven",
            "founder": {
              "@type": "Person",
              "name": "Sharad Raj Aryal",
              "jobTitle": "Founder & Lead Developer"
            },
            "foundingLocation": "Wolverhampton, UK"
          }
        }}
      />
      <HeroSection />
      <CompanySection />
      <FounderSection />
    </div>
  );
};

export default About;