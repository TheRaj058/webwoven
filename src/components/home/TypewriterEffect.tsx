import { useEffect, useState } from "react";

const messages = [
  "Responsive Web Design",
  "Dynamic Web Development",
  "SEO Optimization",
  "E-Commerce Solutions"
];

const TypewriterEffect = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const fadeInterval = 4000; // 4 seconds for each message
    const fadeTransitionDuration = 500; // 0.5 seconds for fade transition

    const interval = setInterval(() => {
      // Start fade out
      setIsVisible(false);
      
      // After fade out, change message and fade in
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