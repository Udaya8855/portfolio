import React from 'react';
import { Code2, Server, Database, Cloud, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import udayakumar from '../../src/assets/UdayaAboutimg.jpg';

const STATS = [
  { value: '1',   label: 'Year of experience' },
  { value: '3',    label: 'Production projects' },
  { value: '150+', label: 'REST APIs built' },
  { value: '90%',  label: 'Avg. test coverage' },
];

const FOCUSES = [
  { icon: <Server size={18} />,   title: 'Backend Systems',  desc: 'Spring Boot microservices, REST API design, and service-layer architecture for scalable enterprise applications.' },
  { icon: <Database size={18} />, title: 'Data Layer',        desc: 'PostgreSQL and MySQL schema design, JPA/Hibernate ORM, query optimization, and database performance tuning.' },
  { icon: <Cloud size={18} />,    title: 'Cloud & DevOps',    desc: 'Docker containerization, AWS (EC2, S3, RDS), and GitHub Actions for automated build and deployment pipelines.' },
  { icon: <Code2 size={18} />,    title: 'Code Quality',      desc: 'Test-driven development with JUnit 5, clean architecture, OpenAPI documentation, and peer code reviews.' },
];

export const AboutSection: React.FC = () => {
  const headerAnim  = useScrollAnimation('fade-up',    { delay: 0 });
  const textAnim    = useScrollAnimation('slide-left', { delay: 100 });
  const imageAnim   = useScrollAnimation('slide-right',{ delay: 150 });
  const statsAnim   = useScrollAnimation('pop-up',     { delay: 250 });
  const focusAnim0  = useScrollAnimation('fade-up',    { delay: 0 });
  const focusAnim1  = useScrollAnimation('fade-up',    { delay: 80 });
  const focusAnim2  = useScrollAnimation('fade-up',    { delay: 160 });
  const focusAnim3  = useScrollAnimation('fade-up',    { delay: 240 });
  const focusAnims  = [focusAnim0, focusAnim1, focusAnim2, focusAnim3];

  return (
    <Section id="about" ariaLabel="About Udaya Kumar V A" className="py-24 px-4 sm:px-6 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div ref={headerAnim.ref as React.RefObject<HTMLDivElement>} style={headerAnim.style}>
          <SectionHeader
            eyebrow="About me"
            title="Backend engineer who ships clean, observable APIs"
            subtitle="I focus on the parts that keep systems running reliably — service boundaries, data integrity, and the infrastructure behind every request."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <div ref={textAnim.ref as React.RefObject<HTMLDivElement>} style={textAnim.style}>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              <p>
                I'm <span className="text-slate-900 dark:text-white font-semibold">Udaya Kumar V A</span>, a backend
                developer based in Chennai, India. I graduated in Computer Science from SSS Arts, Science &amp;
                Management College in 2024 and immediately pursued a hands-on Java Full Stack certification at Besant
                Technologies.
              </p>
              <p>
                Since January 2025 I've been working at{' '}
                <span className="text-slate-900 dark:text-white font-semibold">Esfita Infotech Pvt Ltd</span>, building
                Spring Boot REST APIs and managing MySQL-backed services for enterprise clients.
              </p>
              <p>
                I'm looking for roles where I can grow deeper into distributed systems, cloud infrastructure, and
                high-scale backend engineering.
              </p>
            </div>

            {/* Mini info cards */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-500"><MapPin size={14} /></div>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <div className="p-1.5 rounded-lg bg-green-500/10 text-green-500"><Briefcase size={14} /></div>
                <span>Java Developer @ Esfita Infotech — Jan 2025 – Present</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-500"><GraduationCap size={14} /></div>
                <span>B.Sc Computer Science, SSS Arts & Management College, 2024</span>
              </div>
            </div>
          </div>

          {/* Right — image + stats */}
          <div ref={imageAnim.ref as React.RefObject<HTMLDivElement>} style={imageAnim.style} className="space-y-8">
            {/* Photo with glow */}
            <div className="flex justify-center lg:justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400 to-indigo-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity" />
                <img
                  src={udayakumar}
                  alt="Udaya Kumar V A"
                  className="relative w-48 h-62 rounded-2xl object-cover border-2 border-cyan-300 dark:border-cyan-500/30"
                />
              </div>
            </div>

            {/* Stats */}
            <div ref={statsAnim.ref as React.RefObject<HTMLDivElement>} style={statsAnim.style}
              className="grid grid-cols-2 gap-4 w-full"
            >
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl border border-slate-200 dark:border-white/6 bg-slate-50 dark:bg-slate-800/40 text-center hover:border-cyan-300 dark:hover:border-cyan-500/30 hover:shadow-md hover:shadow-cyan-500/5 transition-all duration-300"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <p className="font-display text-3xl font-bold text-cyan-500 mb-1">{s.value}</p>
                  <p className="font-mono text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-10">
          {FOCUSES.map((f, i) => (
            <div
              key={f.title}
              ref={focusAnims[i].ref as React.RefObject<HTMLDivElement>}
              style={focusAnims[i].style}
              className="p-5 rounded-xl border border-slate-200 dark:border-white/6 bg-slate-50 dark:bg-slate-800/40 hover:border-cyan-300 dark:hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-cyan-500 mb-3">
                <div className="p-1.5 rounded-lg bg-cyan-500/10">{f.icon}</div>
                <span className="font-mono text-sm font-semibold text-slate-900 dark:text-white">{f.title}</span>
              </div>
              <p className="text-slate-500 dark:text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
