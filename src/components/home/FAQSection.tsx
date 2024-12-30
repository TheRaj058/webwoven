import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services does Web Woven offer?",
    answer: "Web Woven specializes in web design, web development, and SEO optimization. We also provide tailored plans to suit your specific business needs.",
  },
  {
    question: "How long does it take to complete a website project?",
    answer: "The timeline varies based on the complexity of the project. Most projects are completed within 1–4 weeks, depending on whether the website is simple or complex.",
  },
  {
    question: "Do you provide ongoing support after the website is live?",
    answer: "Yes, we offer maintenance and support packages to ensure your website runs smoothly and stays up-to-date.",
  },
  {
    question: "Can I request custom features for my website?",
    answer: "Absolutely! We specialize in building customized websites tailored to your business requirements.",
  },
  {
    question: "What is the cost of your services?",
    answer: "Our pricing depends on the services and features you choose. Visit the \"Get a Quote\" page to explore our plans and get a tailored quote.",
  },
  {
    question: "Is the website optimized for mobile devices?",
    answer: "Yes, every website we create is fully responsive and optimized for mobile, tablet, and desktop.",
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