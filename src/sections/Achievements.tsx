import { motion } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';
import Card3D from '../components/ui/Card3D';
import { achievements } from '../data/portfolioData';
import { Trophy, Medal, Star, Award, Code } from 'lucide-react';

const iconMap = {
  trophy: Trophy,
  medal: Medal,
  star: Star,
  award: Award,
  code: Code,
};

const iconColors: Record<string, string> = {
  trophy: '#FFD700',
  medal: '#C0C0C0',
  star: '#22C55E',
  award: '#1F8ACB',
  code: '#BE4C00',
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full px-5 sm:px-8 md:px-10 py-20 lg:py-32 flex flex-col items-center border-b border-white/[0.05]"
      style={{ background: '#0C0C0C' }}
    >
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <FadeIn delay={0}>
          <h2
            className="hero-heading font-black uppercase tracking-tighter text-center leading-none mb-16"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Achievements
          </h2>
        </FadeIn>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, i) => {
            const Icon = iconMap[achievement.icon] || Trophy;
            const color = iconColors[achievement.icon] || '#FFD700';

            return (
              <FadeIn key={achievement.id} delay={i * 0.08} y={30}>
                <Card3D className="p-6 h-full relative overflow-hidden group" glowColor={`${color}20`}>
                  {/* Background glow */}
                  <div
                    className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
                    style={{ background: color }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <Icon size={22} style={{ color }} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-[#D7E2EA] font-bold text-lg mb-2">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#8a95a0] text-sm leading-relaxed mb-3">
                      {achievement.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-2 text-xs text-[#8a95a0]">
                      {achievement.year && (
                        <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                          {achievement.year}
                        </span>
                      )}
                      {achievement.organization && (
                        <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                          {achievement.organization}
                        </span>
                      )}
                    </div>
                  </div>
                </Card3D>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
