import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.4'],
  });

  const words = text.split('');

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((char, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <AnimatedChar
            key={i}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
}

function AnimatedChar({
  char,
  progress,
  range,
}: {
  char: string;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline"
      aria-hidden="true"
    >
      {char}
    </motion.span>
  );
}
