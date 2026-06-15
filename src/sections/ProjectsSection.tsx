import React from 'react';
import { Section, SectionHeader } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Github } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const headerAnim = useScrollAnimation('fade-up', { delay: 0 });
  const card0Anim = useScrollAnimation('slide-left', { delay: 0 });
  const card1Anim = useScrollAnimation('fade-up', { delay: 100 });
  const card2Anim = useScrollAnimation('slide-right', { delay: 200 });
  const footerAnim = useScrollAnimation('fade-in', { delay: 300 });
  const cardAnims = [card0Anim, card1Anim, card2Anim];

  return (
    <Section id="projects" ariaLabel="Projects portfolio" className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div ref={headerAnim.ref as React.RefObject<HTMLDivElement>} style={headerAnim.style}>
          <SectionHeader
            eyebrow="Work"
            title="Things I've built"
            subtitle="Backend-focused projects — all production-minded, all built with real engineering decisions."
          />
        </div>

        {/* Grid with items-stretch to ensure all cells have same height */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              ref={cardAnims[i]?.ref as React.RefObject<HTMLDivElement>}
              style={cardAnims[i]?.style}
              className="flex"  // ← makes this cell a flex container
            >
              {/* Force the card to fill the entire height of the grid cell */}
              <div className="w-full h-full">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>

        <div
          ref={footerAnim.ref as React.RefObject<HTMLDivElement>}
          style={footerAnim.style}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <p className="font-mono text-sm text-slate-400 text-center">
            More open-source work on{' '}
            <a
              href="https://github.com/Udaya8855"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View more projects on GitHub"
              className="text-cyan-500 hover:text-cyan-400 underline underline-offset-4"
            >
              github.com/Udaya8855
            </a>
          </p>
          <a
            href="https://github.com/Udaya8855"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-white/8 text-sm font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/20 transition-all hover:scale-[1.02]"
          >
            <Github size={15} /> View GitHub Profile
          </a>
        </div>
      </div>
    </Section>
  );
};