import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead = ({ 
  title = "Web Woven | Professional Web Development & Design Services in Wolverhampton",
  description = "Affordable web development services for small businesses in the UK. Expert website design, e-commerce solutions, and SEO optimization in Wolverhampton. Get custom, responsive websites that drive results.",
  keywords = "web development services UK, affordable website solutions, custom website design, professional web design UK, Wolverhampton web development, SEO-friendly websites, e-commerce website development, mobile-friendly websites, local website developers UK, business website creation",
  canonical,
  ogImage = "https://webwoven.co.uk/lovable-uploads/00174f1f-5990-4134-bafd-4c0348710aba.png",
  structuredData,
  noIndex = false
}: SEOHeadProps) => {
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `https://webwoven.co.uk${ogImage}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Web Woven" />
      <meta property="og:locale" content="en_GB" />
      {canonical && <meta property="og:url" content={canonical} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;