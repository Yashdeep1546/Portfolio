import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';
import Card3D from '../components/ui/Card3D';
import { certificates } from '../data/portfolioData';
import { Award, ExternalLink, X, Maximize2 } from 'lucide-react';

export default function Certificates() {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);



  return (
    <section
      id="certificates"
      className="relative w-full px-5 sm:px-8 md:px-10 py-20 lg:py-32 flex flex-col items-center border-b border-white/[0.05]"
      style={{ background: '#0a0a0a' }}
    >
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <FadeIn delay={0}>
          <h2
            className="hero-heading font-black uppercase tracking-tighter text-center leading-none mb-16"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 6rem)' }}
          >
            Certificates
          </h2>
        </FadeIn>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 0.08} y={30}>
              <Card3D className="p-0 overflow-hidden h-full group" glowColor="rgba(31, 138, 203, 0.15)">
                {/* Certificate image / preview */}
                {cert.image ? (
                  <div className="relative h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] mx-auto mt-8 rounded-full overflow-hidden cursor-pointer bg-white/[0.02] border border-white/[0.05]"
                    onClick={() => setExpandedCert(cert.id)}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Maximize2 size={24} className="text-white" />
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <div className="h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] mx-auto mt-8 rounded-full flex items-center justify-center border border-white/[0.05]"
                    style={{
                      background: 'linear-gradient(135deg, rgba(118,33,176,0.1), rgba(31,138,203,0.1))',
                    }}
                  >
                    <Award size={40} className="text-purple-400/40" />
                  </div>
                )}

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Organization badge */}
                  <span className="inline-block px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] uppercase tracking-wider font-semibold mb-3">
                    {cert.organization}
                  </span>

                  <h3 className="text-[#D7E2EA] font-semibold text-base sm:text-lg mb-2">
                    {cert.title}
                  </h3>

                  {cert.date && (
                    <p className="text-[#8a95a0] text-xs mb-3">{cert.date}</p>
                  )}

                  <div className="flex gap-2">
                    {cert.image && (
                      <motion.button
                        onClick={() => setExpandedCert(cert.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ghost-btn px-3 py-1.5 rounded-full text-[#D7E2EA] text-xs uppercase tracking-wider font-medium inline-flex items-center gap-1.5"
                      >
                        <Maximize2 size={12} />
                        View
                      </motion.button>
                    )}
                    {cert.verificationLink && (
                      <motion.a
                        href={cert.verificationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="gradient-btn px-3 py-1.5 rounded-full text-white text-xs uppercase tracking-wider font-medium inline-flex items-center gap-1.5"
                      >
                        <ExternalLink size={12} />
                        Verify
                      </motion.a>
                    )}
                  </div>
                </div>
              </Card3D>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Expanded certificate lightbox */}
      <AnimatePresence>
        {expandedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setExpandedCert(null)}
          >
            <button
              onClick={() => setExpandedCert(null)}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full"
            >
              {certificates.find(c => c.id === expandedCert)?.image && (
                <img
                  src={certificates.find(c => c.id === expandedCert)!.image}
                  alt="Certificate fullscreen"
                  className="w-full rounded-lg shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
