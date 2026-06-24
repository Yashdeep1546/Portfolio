import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';
import { projects } from '../data/portfolioData';
import { ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react';

const techIcons: Record<string, string> = {
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg',
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'Keras': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg',
  'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
  'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
  'Matplotlib': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Streamlit': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg',
  'Vite': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
};

export default function Projects() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      className="relative px-5 w-full sm:px-8 md:px-10 py-20 lg:py-32 flex flex-col items-center border-b border-white/[0.05]"
      style={{ background: '#0C0C0C' }}
    >
      <div className="w-full max-w-7xl">
        <FadeIn delay={0}>
          <h2
            className="hero-heading text-center leading-none mb-24"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Featured Work
          </h2>
        </FadeIn>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={index}
              onImageClick={setLightboxImage}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={32} />
            </button>
            <img
              src={lightboxImage}
              alt="Fullscreen screenshot"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectRow({
  project,
  index,
  onImageClick,
}: {
  project: typeof projects[0];
  index: number;
  onImageClick: (src: string) => void;
}) {
  const isEven = index % 2 === 0;
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
      
      {/* Visual Side */}
      {project.images.length > 0 ? (
        <FadeIn delay={0.1} className="w-full lg:w-3/5 group relative">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05]">
            <img
              src={project.images[currentImg]}
              alt={project.title}
              className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-700"
              onClick={() => onImageClick(project.images[currentImg])}
            />
          </div>

          {/* Carousel Controls */}
          {project.images.length > 1 && (
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => setCurrentImg(prev => prev === 0 ? project.images.length - 1 : prev - 1)}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-sm transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentImg(prev => prev === project.images.length - 1 ? 0 : prev + 1)}
                className="p-2 rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-sm transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </FadeIn>
      ) : (
        <FadeIn delay={0.1} className="w-full lg:w-3/5">
          <div className="aspect-video w-full rounded-2xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
            <span className="text-[#8a95a0] text-sm uppercase tracking-widest font-medium">No Images Available</span>
          </div>
        </FadeIn>
      )}

      {/* Content Side */}
      <FadeIn delay={0.2} className="w-full lg:w-2/5 flex flex-col justify-center">
        <p className="text-[#8a95a0] text-sm font-medium tracking-widest uppercase mb-4">
          {project.category.join(' • ')}
        </p>
        
        <h3 className="project-title text-white font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-6 leading-tight">
          {project.title}
        </h3>
        
        <p className="text-[#8a95a0] text-base leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4 mb-10">
          {project.techStack.map(tech => {
            const iconUrl = techIcons[tech] || null;
            return (
              <div key={tech} className="flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.05] rounded-lg">
                {iconUrl && <img src={iconUrl} alt={tech} className="w-6 h-6 object-contain" />}
                <span className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA]">{tech}</span>
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-14 h-14 rounded-full bg-white/[0.03] border border-white/[0.05] hover:border-white/20 transition-all"
            >
              <img src="/assets/icons/github.png" alt="GitHub" className="w-10 h-10 object-contain filter grayscale group-hover:grayscale-0 transition-all" />
            </a>
          )}
          
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:opacity-70 transition-opacity"
            >
              <ExternalLink size={18} />
              <span className="text-sm font-semibold uppercase tracking-wider">Live Site</span>
            </a>
          )}
        </div>
      </FadeIn>
    </div>
  );
}
