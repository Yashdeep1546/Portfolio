import { lazy, Suspense } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';

/* Lazy-load below-the-fold sections for performance */
const Profiles = lazy(() => import('./sections/Profiles'));
const About = lazy(() => import('./sections/About'));
const Skills = lazy(() => import('./sections/Skills'));
const Projects = lazy(() => import('./sections/Projects'));
const Experience = lazy(() => import('./sections/Experience'));
const Achievements = lazy(() => import('./sections/Achievements'));
const Certificates = lazy(() => import('./sections/Certificates'));
const CompetitiveProgramming = lazy(() => import('./sections/CompetitiveProgramming'));
const Contact = lazy(() => import('./sections/Contact'));


function App() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />

      <main className="relative z-10 overflow-x-clip w-full flex flex-col items-center justify-center gap-16 sm:gap-24 md:gap-32 pb-20">
        <Hero />

        <Suspense fallback={<SectionSkeleton />}>
          <Profiles />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Certificates />
          <CompetitiveProgramming />
          <Contact />

        </Suspense>
      </main>
    </>
  );
}

/* Minimal skeleton while lazy sections load */
function SectionSkeleton() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
    </div>
  );
}

export default App;
