import { motion } from 'framer-motion';
import { personalInfo, navItems, socialLinks } from '../data/portfolioData';
import { Heart } from 'lucide-react';
import Magnet from '../components/ui/Magnet';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative px-5 sm:px-8 md:px-10 pt-16 pb-8 border-t border-white/[0.04]"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Name & tagline */}
          <div className="text-center md:text-left">
            <h3 className="hero-heading font-black text-3xl sm:text-4xl uppercase tracking-tighter mb-1">
              {personalInfo.name}
            </h3>
            <p className="text-[#8a95a0] text-sm font-light">
              AI Engineer & Full Stack Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#8a95a0] text-xs uppercase tracking-wider hover:text-[#D7E2EA] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-8">
          {socialLinks.map((link) => (
            <Magnet key={link.name} strength={0.25}>
              <motion.a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center hover:border-white/20 transition-all filter grayscale hover:grayscale-0"
                aria-label={link.name}
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-6 h-6 object-contain"
                  loading="lazy"
                />
              </motion.a>
            </Magnet>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.04] mb-6" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[#8a95a0] text-xs">
          <p>
            © {year} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
