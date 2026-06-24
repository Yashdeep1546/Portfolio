
import FadeIn from '../components/ui/FadeIn';
import Magnet from '../components/ui/Magnet';
import { personalInfo, socialLinks } from '../data/portfolioData';

export default function Profiles() {
  const mainProfiles = socialLinks.filter(l => 
    ['CodeChef', 'Codeforces', 'LeetCode', 'GitHub', 'LinkedIn', 'Email'].includes(l.name)
  );

  return (
    <section className="relative w-full flex flex-col items-center py-12 sm:py-16 overflow-hidden border-y border-white/[0.04]">
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16">
          {mainProfiles.map((profile, i) => (
            <FadeIn key={profile.name} delay={i * 0.1}>
              <Magnet strength={0.3}>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                </a>
              </Magnet>
            </FadeIn>
          ))}
          
          <FadeIn delay={0.3}>
            <Magnet strength={0.3}>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.02] border border-white/[0.05] group hover:border-white/20 transition-all duration-300"
              >
                <span className="text-[#8a95a0] group-hover:text-white font-semibold tracking-widest uppercase text-xs transition-colors">
                  Resume
                </span>
              </a>
            </Magnet>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
