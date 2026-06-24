import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { avatarImages } from '../data/portfolioData';

/**
 * Pseudo-3D Avatar: Maps mouse position to different angle photographs
 * to simulate a rotating 3D model.
 */
export default function HeroAvatar() {
  const { normalized } = useMousePosition();


  // Map of all angles arranged in a grid based on x,y normalized position
  const angleMap = useMemo(() => [
    { xRange: [-1, -0.6], yRange: [-1, -0.3], src: avatarImages.leftBack },
    { xRange: [-0.6, -0.2], yRange: [-1, -0.3], src: avatarImages.leftSide },
    { xRange: [-0.2, 0.2], yRange: [-1, -0.3], src: avatarImages.highAngle },
    { xRange: [0.2, 0.6], yRange: [-1, -0.3], src: avatarImages.rightSide },
    { xRange: [0.6, 1], yRange: [-1, -0.3], src: avatarImages.rightBack },
    // Middle row
    { xRange: [-1, -0.5], yRange: [-0.3, 0.3], src: avatarImages.leftSide },
    { xRange: [-0.5, -0.15], yRange: [-0.3, 0.3], src: avatarImages.left45 },
    { xRange: [-0.15, 0.15], yRange: [-0.3, 0.3], src: avatarImages.front },
    { xRange: [0.15, 0.5], yRange: [-0.3, 0.3], src: avatarImages.right45 },
    { xRange: [0.5, 1], yRange: [-0.3, 0.3], src: avatarImages.rightSide },
    // Bottom row
    { xRange: [-1, -0.6], yRange: [0.3, 1], src: avatarImages.leftBack },
    { xRange: [-0.6, -0.2], yRange: [0.3, 1], src: avatarImages.left45 },
    { xRange: [-0.2, 0.2], yRange: [0.3, 1], src: avatarImages.lowAngle },
    { xRange: [0.2, 0.6], yRange: [0.3, 1], src: avatarImages.right45 },
    { xRange: [0.6, 1], yRange: [0.3, 1], src: avatarImages.rightBack },
  ], []);

  const currentImage = useMemo(() => {
    const match = angleMap.find(
      a =>
        normalized.x >= a.xRange[0] &&
        normalized.x < a.xRange[1] &&
        normalized.y >= a.yRange[0] &&
        normalized.y < a.yRange[1]
    );
    return match?.src || avatarImages.front;
  }, [normalized.x, normalized.y, angleMap]);



  // Preload all images
  useMemo(() => {
    Object.values(avatarImages).forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Floating animation wrapper */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative"
      >
        {/* Glow behind avatar */}
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            transform: 'scale(1.2)',
          }}
        />

        {/* Shadow beneath */}
        <div
          className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full blur-xl"
          style={{ background: 'rgba(0,0,0,0.4)' }}
        />

        {/* Avatar container */}
        <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px] lg:w-[540px] lg:h-[540px] rounded-full overflow-hidden border border-white/10 shadow-2xl bg-[#202122]">
          {/* Dynamic lighting overlay */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${50 + normalized.x * 30}% ${50 + normalized.y * 30}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
            }}
          />

          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt="Yashdeep - Interactive 3D Avatar"

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full h-full object-contain p-4 sm:p-6 md:p-8 scale-[1.2] translate-y-10"
              loading="eager"
            />
          </AnimatePresence>

          {/* Glass rim effect */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5), inset 0 -2px 6px rgba(255,255,255,0.05)',
            }}
          />
        </div>

      </motion.div>
    </motion.div>
  );
}
