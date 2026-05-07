import React from 'react';
import { motion } from 'framer-motion';

const FloatingElement = ({ children, duration = 3, delay = 0, yOffset = 20, xOffset = 10 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -yOffset, 0],
        x: [0, xOffset, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;
