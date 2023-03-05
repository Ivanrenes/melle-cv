'use client'

import { motion } from "framer-motion";

interface SectionBaseProps {
  name: string;
  children: React.ReactNode;
}

const titleVariants = {
  initial: {
    opacity: 0,
    y: -20
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


export default function SectionBase({ name, children }: SectionBaseProps) {
  return (<motion.section
    initial="initial"
      animate="animate"
      variants={titleVariants}
    className={`section ${name}-section`}>{children}</motion.section>);
}
