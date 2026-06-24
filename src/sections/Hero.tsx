import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroAvatar from '../components/HeroAvatar';
import Magnet from '../components/ui/Magnet';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center overflow-x-clip"
      style={{ background: '#0C0C0C' }}
    >
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 pb-10 relative z-10">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading uppercase font-black tracking-tighter leading-none whitespace-nowrap text-[8vw] sm:text-[9vw] md:text-[10vw] lg:text-[11vw] text-center pr-4 md:pr-8"
        >
          Hi, I'm {personalInfo.name}
        </motion.h1>

        {/* Avatar */}
        <div className="my-6 md:my-8">
          <Magnet strength={0.15}>
            <HeroAvatar />
          </Magnet>
        </div>


      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-white/40"
            animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
