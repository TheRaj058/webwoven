import { useEffect, useState } from "react";

const messages = [
  "Responsive Web Design",
  "Dynamic Web Development",
  "SEO Optimization",
  "E-Commerce Solutions"
];

const TypewriterEffect = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const currentMessage = messages[currentMessageIndex];
      
      if (!isDeleting) {
        if (currentText.length < currentMessage.length) {
          setCurrentText(currentMessage.slice(0, currentText.length + 1));
          setTimeout(type, typeSpeed);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentMessage.slice(0, currentText.length - 1));
          setTimeout(type, deleteSpeed);
        } else {
          setIsDeleting(false);
          setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
        }
      }
    };

    const timeout = setTimeout(type, 100);
    return () => clearTimeout(timeout);
  }, [currentText, currentMessageIndex, isDeleting]);

  return (
    <div className="h-8 text-xl text-muted-foreground">
      <span className="inline-block min-w-0">{currentText}</span>
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypewriterEffect;