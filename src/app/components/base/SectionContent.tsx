'use client'

import { motion } from "framer-motion";

const paragraphVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut"
    }
  }
};

interface SectionContentProps {
  content: string;
}

export default function SectionContent({ content } : SectionContentProps) {
  return (
    <motion.div
    initial="initial"
    animate="animate"
      variants={paragraphVariants} className="summary">
      <p>{content}</p>
    </motion.div>
  );
}
