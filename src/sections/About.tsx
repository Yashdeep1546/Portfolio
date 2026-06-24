
import FadeIn from '../components/ui/FadeIn';
import AnimatedText from '../components/ui/AnimatedText';
import Card3D from '../components/ui/Card3D';
import { personalInfo, education } from '../data/portfolioData';
import { GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full px-5 sm:px-8 md:px-10 py-20 lg:py-32 flex flex-col items-center border-b border-white/[0.05]"
      style={{ background: '#0C0C0C' }}
    >


      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <FadeIn delay={0}>
          <h2
            className="hero-heading font-black uppercase tracking-tighter text-center leading-none mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            About Me
          </h2>
        </FadeIn>

        {/* Animated paragraph */}
        <div className="max-w-[650px] mx-auto mb-32 md:mb-40">
          <AnimatedText
            text={personalInfo.summary}
            className="text-[#D7E2EA] font-medium leading-relaxed text-center"
            // @ts-expect-error style prop works fine at runtime
            style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}
          />
        </div>

        {/* Education Cards */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col items-center gap-8 mb-20 w-full">
            <h3 className="text-[#D7E2EA] uppercase tracking-widest text-3xl font-bold flex items-center gap-3 mb-4">
              <GraduationCap size={32} />
              Education
            </h3>
            {education.map((edu, i) => (
              <Card3D key={i} className="w-full max-w-[650px] p-8 sm:p-10 text-center">
                <div className="flex flex-col items-center justify-center">
                  <h4 className="text-white font-bold text-xl sm:text-2xl mb-3">
                    {edu.institution}
                  </h4>
                  <p className="text-[#D7E2EA] font-medium text-lg mb-2">
                    {edu.degree} in {edu.branch}
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-4 text-base text-[#8a95a0]">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">
                      CGPA: {edu.cgpa}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </FadeIn>


      </div>
    </section>
  );
}
