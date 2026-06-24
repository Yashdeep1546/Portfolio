import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  rotate?: number;
  className?: string;
}

const createVariants = (x: number, y: number, scale: number, rotate: number): Variants => ({
  hidden: {
    opacity: 0,
    x,
    y,
    scale,
    rotate,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
  },
});

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 40,
  scale = 1,
  rotate = 0,
  className = '',
}: FadeInProps) {
  return (
    <motion.div
      variants={createVariants(x, y, scale, rotate)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
