import { motion } from 'framer-motion';
import FadeIn from '../components/ui/FadeIn';
import Card3D from '../components/ui/Card3D';
import { skillCategories } from '../data/portfolioData';

/* Technology icon URLs from devicon CDN */
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

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full px-5 sm:px-8 md:px-10 py-20 lg:py-32 flex flex-col items-center border-b border-white/[0.05]"
      style={{ background: '#0C0C0C' }}
    >
      <div className="w-full max-w-6xl">
        {/* Heading */}
        <FadeIn delay={0}>
          <h2
            className="hero-heading font-black uppercase tracking-tighter text-center leading-none mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <FadeIn key={category.title} delay={catIdx * 0.08} y={30}>
              <Card3D className="p-6 h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-[#D7E2EA] font-semibold text-base sm:text-lg">
                    {category.title}
                  </h3>
                </div>

                {/* Skills grid */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIdx * 0.08 + skillIdx * 0.04,
                        duration: 0.4,
                      }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: '0 0 20px rgba(255,255,255,0.1)',
                      }}
                      className="group relative flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] cursor-default transition-colors hover:bg-white/[0.06] hover:border-white/20"
                    >
                      {techIcons[skill] && (
                        <img
                          src={techIcons[skill]}
                          alt={skill}
                          className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-12"
                          loading="lazy"
                        />
                      )}
                      <span className="text-[#D7E2EA] text-xs sm:text-sm font-medium">
                        {skill}
                      </span>

                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-white/10 text-[10px] text-white/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none backdrop-blur-sm">
                        {skill}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card3D>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
