import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import Hero from './sections/Hero';

import Profiles from './sections/Profiles';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Achievements from './sections/Achievements';
import Certificates from './sections/Certificates';
import CompetitiveProgramming from './sections/CompetitiveProgramming';
import Contact from './sections/Contact';


function App() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />

      <main className="relative z-10 overflow-x-clip w-full flex flex-col items-center justify-center gap-16 sm:gap-24 md:gap-32 pb-20">
        <Hero />

        <Profiles />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certificates />
        <CompetitiveProgramming />
        <Contact />
      </main>
    </>
  );
}



export default App;
