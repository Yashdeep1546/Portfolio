import { motion } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';
import Card3D from '../components/ui/Card3D';
import Magnet from '../components/ui/Magnet';
import { competitivePlatforms } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';

export default function CompetitiveProgramming() {
  return (
    <section
      id="competitive"
      className="relative w-full px-5 sm:px-8 md:px-10 py-20 lg:py-32 flex flex-col items-center border-b border-white/[0.05]"
      style={{ background: '#0C0C0C' }}
    >
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <FadeIn delay={0}>
          <h2
            className="hero-heading font-black uppercase tracking-tighter text-center leading-none mb-6"
            style={{ fontSize: 'clamp(2rem, 7vw, 5rem)' }}
          >
            Competitive Programming
          </h2>
        </FadeIn>


        {/* Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {competitivePlatforms.map((platform, i) => (
            <FadeIn key={platform.id} delay={i * 0.1} y={30}>
              <Magnet strength={0.1}>
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card3D
                    className="p-6 sm:p-8 text-center relative overflow-hidden group cursor-pointer"
                    glowColor={`${platform.color}30`}
                  >
                    {/* Background glow */}
                    <div
                      className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 30%, ${platform.color}, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Platform icon */}
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="mx-auto mb-5 w-16 h-16 sm:w-20 sm:h-20 relative"
                      >
                        <img
                          src={platform.icon}
                          alt={platform.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                          loading="lazy"
                        />
                        {/* Glow behind icon */}
                        <div
                          className="absolute inset-0 rounded-full blur-xl opacity-30"
                          style={{ background: platform.color }}
                        />
                      </motion.div>

                      {/* Platform name */}
                      <h3 className="text-[#D7E2EA] font-bold text-lg sm:text-xl mb-3">
                        {platform.name}
                      </h3>

                      {/* Stars badge */}
                      {platform.stars && (
                        <motion.div
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 + 0.3, type: 'spring' }}
                          className="inline-block px-3 py-1 rounded-full mb-4 text-sm font-semibold"
                          style={{
                            background: `${platform.color}20`,
                            color: platform.color,
                            border: `1px solid ${platform.color}40`,
                          }}
                        >
                          {platform.stars}
                        </motion.div>
                      )}

                      {/* Stats */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-[#8a95a0]">Rating</span>
                          <AnimatedCounter value={parseInt(platform.rating)} color={platform.color} delay={i * 0.1} />
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-[#8a95a0]">Max Rating</span>
                          <AnimatedCounter value={parseInt(platform.maxRating)} color={platform.color} delay={i * 0.1 + 0.1} />
                        </div>
                      </div>

                      {/* Visit link */}
                      <div className="mt-5 flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider font-medium opacity-60 group-hover:opacity-100 transition-opacity"
                        style={{ color: platform.color }}
                      >
                        View Profile
                        <ExternalLink size={12} />
                      </div>
                    </div>
                  </Card3D>
                </a>
              </Magnet>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Animated Counter ── */
function AnimatedCounter({ value, color, delay = 0 }: { value: number; color: string; delay?: number }) {
  return (
    <motion.span
      className="font-bold text-base"
      style={{ color }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: delay + 0.2 }}
    >
      {value}
    </motion.span>
  );
}
