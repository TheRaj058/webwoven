import { useEffect, useState } from "react";

const messages = [
  "Custom Website Design",
  "E-commerce Website Development",
  "SEO-Friendly Websites",
  "Mobile-Optimized Solutions",
  "Professional Web Development",
  "Local Business Websites",
  "WordPress Development",
  "Website Maintenance"
];

const TypewriterEffect = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeInterval = 4000;
    const fadeTransitionDuration = 500;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, fadeTransitionDuration);
      
    }, fadeInterval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 text-xl text-muted-foreground overflow-hidden">
      <div
        className={`transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {messages[currentMessageIndex]}
      </div>
    </div>
  );
};

export default TypewriterEffect;