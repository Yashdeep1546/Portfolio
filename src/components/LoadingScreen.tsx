import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const images = Array.from(document.images);
      const totalImages = images.length;
      
      if (totalImages === 0) {
        // Initial minimum progress while React renders
        setProgress(10);
        return;
      }
      
      const loadedImages = images.filter(img => img.complete).length;
      const targetProgress = (loadedImages / totalImages) * 100;
      
      setProgress(prev => {
        // Prevent progress bar from jumping backwards
        const next = Math.max(prev, targetProgress);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 400);
          return 100;
        }
        return next;
      });
    }, 100);

    // Fallback to remove loading screen after max 8 seconds (if network issues occur)
    const fallback = setTimeout(() => {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setIsLoading(false), 400);
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C0C0C]"
        >
          {/* Animated initials */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative mb-8"
          >
            <motion.span
              className="hero-heading text-7xl sm:text-8xl font-black tracking-tighter"
              animate={{
                textShadow: [
                  '0 0 20px rgba(118,33,176,0.3)',
                  '0 0 40px rgba(182,0,168,0.5)',
                  '0 0 20px rgba(118,33,176,0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Y
            </motion.span>
            {/* Orbiting dot */}
            <motion.div
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '-20px 0',
              }}
            />
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #7621B0, #B600A8, #BE4C00)',
              }}
              initial={{ width: '0%' }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            className="mt-4 text-sm text-white/40 font-light tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.p>

          {/* Background particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-purple-500/20"
              initial={{
                x: Math.random() * window.innerWidth - window.innerWidth / 2,
                y: Math.random() * window.innerHeight - window.innerHeight / 2,
                scale: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
