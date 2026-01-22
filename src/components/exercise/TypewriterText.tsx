import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  onComplete?: () => void;
  showCursor?: boolean;
}

export function TypewriterText({ 
  text, 
  className = "", 
  speed = 30, 
  onComplete,
  showCursor = true 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return (
    <motion.span className={className}>
      {displayedText}
      {showCursor && !isComplete && (
        <span className="animate-pulse text-primary">▋</span>
      )}
    </motion.span>
  );
}
