import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeSection } from './sections/HomeSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { TimelineSection } from './sections/TimelineSection';
import { ContactSection } from './sections/ContactSection';
import { useDarkMode } from './hooks/useDarkMode';

const App: React.FC = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] bg-cyan-500 text-slate-950 font-mono font-bold px-4 py-2 rounded-lg text-sm"
      >
        Skip to main content
      </a>

      <Header isDark={isDark} onToggleDark={toggle} />

      <main id="main-content">
        <HomeSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <TimelineSection />
        <div className="section-divider" />
        <ContactSection />
      </main>

      <div className="section-divider" />
      <Footer />
    </>
  );
};

export default App;
