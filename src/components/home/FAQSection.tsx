import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What web development services does Web Woven offer?",
    answer: "Web Woven provides comprehensive web development services in Wolverhampton and across the UK, including custom website design, e-commerce website development, SEO optimization, and mobile-friendly website solutions. We specialize in creating responsive, user-friendly websites tailored to your business needs.",
  },
  {
    question: "How much do your website development services cost?",
    answer: "We offer affordable web development services for small businesses in the UK. Our pricing varies based on project requirements, but we provide transparent, competitive rates for all our services. Visit our Get a Quote page to receive a personalized estimate.",
  },
  {
    question: "Do you provide ongoing website maintenance?",
    answer: "Yes, we offer professional website maintenance and support services to ensure your website remains secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, and technical support.",
  },
  {
    question: "Are your websites SEO-friendly?",
    answer: "Absolutely! All our websites are built with SEO best practices in mind. We implement comprehensive SEO optimization strategies to improve your search engine rankings and online visibility, helping your business attract more customers.",
  },
  {
    question: "Can you create e-commerce websites?",
    answer: "Yes, we specialize in e-commerce website development for UK businesses. Our team creates secure, scalable online stores with user-friendly interfaces, multiple payment options, and comprehensive inventory management systems.",
  },
  {
    question: "Do you offer mobile-friendly website design?",
    answer: "Yes, all our websites are mobile-optimized and responsive by design. We ensure your website looks and functions perfectly across all devices, providing an optimal user experience for your customers.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-5" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-muted text-center mb-12 max-w-2xl mx-auto">
          Find answers to common questions about our services
        </p>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg px-6 py-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;