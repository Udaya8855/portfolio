import React, { useState } from 'react';
import {
  Cpu, Database as DbIcon, Box, Cloud,
  Code2, Server, LayoutGrid, GitBranch, FlaskConical,
  FileCode, Package, TestTube2, BookOpen,
} from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { SKILLS } from '../data';
import type { SkillCategory, SkillLevel } from '../types';
import { SiSonarqubeserver } from 'react-icons/si';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SKILL_ICONS: Record<string, React.ReactNode> = {
  sb:      <Server size={20} />,
  java:    <Code2 size={20} />,
  ms:      <LayoutGrid size={20} />,
  rest:    <FileCode size={20} />,
  pg:      <DbIcon size={20} />,
  mysql:   <DbIcon size={20} />,
  jpa:     <BookOpen size={20} />,
  docker:  <Box size={20} />,
  k8s:     <Cpu size={20} />,
  aws:     <Cloud size={20} />,
  ec2:     <Cloud size={20} />,
  git:     <GitBranch size={20} />,
  gradle:  <Package size={20} />,
  junit:   <TestTube2 size={20} />,
  swagger: <FlaskConical size={20} />,
  sonar:   <SiSonarqubeserver size={20} />,
  maven:   <Package size={20} />,
};

const CATEGORIES: SkillCategory[] = ['Backend', 'Database', 'DevOps', 'Cloud', 'Tools'];

const LEVEL_CONFIG: Record<SkillLevel, { label: string; bars: number; lightBar: string; darkBar: string }> = {
  advanced:   { label: 'Advanced',   bars: 3, lightBar: 'bg-cyan-500',   darkBar: 'bg-cyan-400'   },
  proficient: { label: 'Proficient', bars: 2, lightBar: 'bg-indigo-500', darkBar: 'bg-indigo-400' },
  familiar:   { label: 'Familiar',   bars: 1, lightBar: 'bg-slate-400',  darkBar: 'bg-slate-500'  },
};

type CategoryStyle = {
  lightCard: string;
  darkCard: string;
  lightIcon: string;
  darkIcon: string;
};

const CATEGORY_STYLES: Record<SkillCategory, CategoryStyle> = {
  Backend: {
    lightCard: 'border-green-200 bg-green-50 hover:border-green-300 hover:bg-green-100',
    darkCard:  'dark:border-green-800 dark:bg-green-950 dark:hover:border-green-600 dark:hover:bg-green-900',
    lightIcon: 'text-green-600',
    darkIcon:  'dark:text-green-400',
  },
  Database: {
    lightCard: 'border-blue-200 bg-blue-50 hover:border-blue-300 hover:bg-blue-100',
    darkCard:  'dark:border-blue-800 dark:bg-blue-950 dark:hover:border-blue-600 dark:hover:bg-blue-900',
    lightIcon: 'text-blue-600',
    darkIcon:  'dark:text-blue-400',
  },
  DevOps: {
    lightCard: 'border-sky-200 bg-sky-50 hover:border-sky-300 hover:bg-sky-100',
    darkCard:  'dark:border-sky-800 dark:bg-sky-950 dark:hover:border-sky-600 dark:hover:bg-sky-900',
    lightIcon: 'text-sky-600',
    darkIcon:  'dark:text-sky-400',
  },
  Cloud: {
    lightCard: 'border-orange-200 bg-orange-50 hover:border-orange-300 hover:bg-orange-100',
    darkCard:  'dark:border-orange-800 dark:bg-orange-950 dark:hover:border-orange-600 dark:hover:bg-orange-900',
    lightIcon: 'text-orange-600',
    darkIcon:  'dark:text-orange-400',
  },
  Tools: {
    lightCard: 'border-purple-200 bg-purple-50 hover:border-purple-300 hover:bg-purple-100',
    darkCard:  'dark:border-purple-800 dark:bg-purple-950 dark:hover:border-purple-600 dark:hover:bg-purple-900',
    lightIcon: 'text-purple-600',
    darkIcon:  'dark:text-purple-400',
  },
};

interface SkillBarsProps { level: SkillLevel; }

const SkillBars: React.FC<SkillBarsProps> = ({ level }) => {
  const { bars, lightBar, darkBar } = LEVEL_CONFIG[level];
  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {[1, 2, 3].map((b) => (
        <div
          key={b}
          className={`h-1 w-3 rounded-full transition-all ${
            b <= bars
              ? `${lightBar} ${darkBar}`
              : 'bg-slate-200 dark:bg-slate-700'
          }`}
        />
      ))}
    </div>
  );
};

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'All'>('All');
  const filtered = activeCategory === 'All' ? SKILLS : SKILLS.filter((s) => s.category === activeCategory);

  const headerAnim   = useScrollAnimation('fade-up',    { delay: 0 });
  const filterAnim   = useScrollAnimation('fade-in',    { delay: 100 });
  const gridAnim     = useScrollAnimation('fade-up',    { delay: 180 });
  const legendAnim   = useScrollAnimation('fade-in',    { delay: 250 });

  return (
    <Section
      id="skills"
      ariaLabel="Skills and technologies"
      className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">

        <div ref={headerAnim.ref as React.RefObject<HTMLDivElement>} style={headerAnim.style}>
          <SectionHeader
            eyebrow="Technical skills"
            title="Tools of the trade"
            subtitle="Technologies I work with daily — and a few I'm actively learning."
          />
        </div>

        {/* Category filters */}
        <div
          ref={filterAnim.ref as React.RefObject<HTMLDivElement>}
          style={filterAnim.style}
          role="group"
          aria-label="Filter skills by category"
          className="flex flex-wrap gap-2 mb-10"
        >
          {(['All', ...CATEGORIES] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all ${
                activeCategory === cat
                  ? 'border-cyan-500 bg-cyan-500 text-white dark:bg-cyan-500 dark:border-cyan-500 dark:text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'border-slate-300 bg-white text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div
          ref={gridAnim.ref as React.RefObject<HTMLDivElement>}
          style={gridAnim.style}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          role="list"
          aria-label="Skills list"
        >
          {filtered.map((skill, idx) => {
            const styles = CATEGORY_STYLES[skill.category];
            const levelConfig = LEVEL_CONFIG[skill.level];
            return (
              <div
                key={skill.id}
                role="listitem"
                aria-label={`${skill.name} — ${levelConfig.label}`}
                className={`
                  flex flex-col gap-3 p-4 rounded-xl border
                  transition-all duration-200 cursor-default
                  hover:-translate-y-1 hover:shadow-md
                  ${styles.lightCard} ${styles.darkCard}
                `}
                style={{
                  transitionDelay: `${idx * 30}ms`,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className={`${styles.lightIcon} ${styles.darkIcon}`} aria-hidden="true">
                    {SKILL_ICONS[skill.id]}
                  </span>
                  <SkillBars level={skill.level} />
                </div>
                <div>
                  <p className="font-mono text-sm font-semibold leading-tight text-slate-900 dark:text-slate-100">
                    {skill.name}
                  </p>
                  <p className="font-mono text-xs mt-0.5 text-slate-500 dark:text-slate-400">
                    {levelConfig.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div
          ref={legendAnim.ref as React.RefObject<HTMLDivElement>}
          style={legendAnim.style}
          className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700"
        >
          <span className="font-mono text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Legend:
          </span>
          {(Object.entries(LEVEL_CONFIG) as [SkillLevel, typeof LEVEL_CONFIG[SkillLevel]][]).map(
            ([level, { label, bars, lightBar, darkBar }]) => (
              <div key={level} className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((b) => (
                    <div
                      key={b}
                      className={`h-1 w-3 rounded-full ${
                        b <= bars ? `${lightBar} ${darkBar}` : 'bg-slate-200 dark:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-mono text-xs text-slate-500 dark:text-slate-400">{label}</span>
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
};
