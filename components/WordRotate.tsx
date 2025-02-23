"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: string;
  color?: string;
}

const WordRotate = ({ 
  words = ["Hello", "World", "React"], 
  duration = 2500,
  className = "",
  style,
  fontSize = "2rem",
  color = "black"
}: WordRotateProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div 
      style={{ 
        overflow: "hidden",
        padding: "0.5rem 0",
        margin: 0,
        transform: "translateY(0.2rem)",    
        ...style
      }}
    >
        <motion.div
          key={words[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={className}
          style={{
            fontSize,
            color,
            margin: 0
          }}
        >
          <>.</> {words[index]}
        </motion.div>
    </div>
  );
};

export default WordRotate;