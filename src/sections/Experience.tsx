import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';
import { experiences } from '../data/portfolioData';
import { Briefcase, Globe, Users, Code } from 'lucide-react';

const typeIcons: Record<string, typeof Briefcase> = {
  work: Briefcase,
  internship: Briefcase,
  virtual: Globe,
  leadership: Users,
  hackathon: Code,
};

const typeColors: Record<string, string> = {
  work: '#7621B0',
  internship: '#B600A8',
  virtual: '#1F8ACB',
  leadership: '#22C55E',
  hackathon: '#BE4C00',
};

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative w-full px-5 sm:px-8 md:px-10 py-20 lg:py-32 flex flex-col items-center border-b border-white/[0.05]"
      style={{ background: '#0a0a0a' }}
    >
      <div className="w-full max-w-5xl">
        {/* Heading */}
        <FadeIn delay={0}>
          <h2
            className="hero-heading font-black uppercase tracking-tighter text-center leading-none mb-16"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Experience
          </h2>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line — background */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-white/[0.06]" />
          {/* Timeline line — animated progress */}
          <motion.div
            className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 w-[2px]"
            style={{
              height: lineHeight,
              background: 'linear-gradient(180deg, #7621B0, #B600A8, #BE4C00)',
            }}
          />

          {/* Experience items */}
          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, i) => {
              const Icon = typeIcons[exp.type] || Briefcase;
              const color = typeColors[exp.type] || '#7621B0';
              const isLeft = i % 2 === 0;

              return (
                <FadeIn
                  key={exp.id}
                  delay={i * 0.08}
                  x={isLeft ? -30 : 30}
                  y={20}
                >
                  <div className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Node dot */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full z-10 border-2 border-[#0C0C0C]"
                      style={{ background: color, boxShadow: `0 0 12px ${color}60` }}
                    />

                    {/* Card */}
                    <div className={`ml-14 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="glass-card p-5 sm:p-6 rounded-xl relative group"
                      >
                        {/* Glow line on hover */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            boxShadow: `inset 0 1px 0 ${color}40, 0 0 20px ${color}10`,
                          }}
                        />

                        <div className="relative z-10">
                          {/* Type badge */}
                          <div className="flex items-center gap-2 mb-3">
                            <div
                              className="p-1.5 rounded-lg"
                              style={{ background: `${color}20` }}
                            >
                              <Icon size={14} style={{ color }} />
                            </div>
                            <span
                              className="text-[10px] uppercase tracking-wider font-semibold"
                              style={{ color }}
                            >
                              {exp.type === 'virtual' ? 'Virtual Internship' : exp.type}
                            </span>
                            <span className="ml-auto text-[#8a95a0] text-xs">
                              {exp.duration}
                            </span>
                          </div>

                          <h3 className="text-[#D7E2EA] font-bold text-base sm:text-lg mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-purple-400 text-sm font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-[#8a95a0] text-xs leading-relaxed mb-3">
                            {exp.description}
                          </p>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {exp.technologies.map(tech => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[#D7E2EA] text-[10px] font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <FadeIn delay={0.2}>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Projects', value: '4+' },
              { label: 'Internships', value: '2' },
              { label: 'Technologies', value: '20+' },
              { label: 'Languages', value: '6+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-4 rounded-xl text-center"
              >
                <motion.span
                  className="hero-heading text-2xl sm:text-3xl font-black block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-[#8a95a0] text-xs uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
