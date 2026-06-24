import FadeIn from '../components/ui/FadeIn';
import Magnet from '../components/ui/Magnet';
import { socialLinks } from '../data/portfolioData';

export default function Contact() {
  const contactLinks = socialLinks.filter(l => ['Email', 'LinkedIn'].includes(l.name));

  return (
    <section
      id="contact"
      className="relative w-full px-5 sm:px-8 md:px-10 py-20 lg:py-32 flex flex-col items-center border-y border-white/[0.04]"
      style={{ background: '#0a0a0a' }}
    >
      <div className="w-full max-w-5xl">
        {/* Heading */}
        <FadeIn delay={0}>
          <h2
            className="hero-heading font-black uppercase tracking-tighter text-center leading-none mb-12 sm:mb-20"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Get In Touch
          </h2>
        </FadeIn>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {contactLinks.map((profile, i) => (
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
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    loading="lazy"
                  />
                </a>
              </Magnet>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
