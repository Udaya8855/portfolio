import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Section } from '../components/Section';
import { Button } from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ROTATING_ROLES = [
  'Backend Developer',
  'Java Developer',
  'Spring Boot Engineer',
  'REST API Specialist',
  'Cloud & DevOps Learner',
];

const QUICK_STATS = [
  { value: '1+', label: 'Yr Experience' },
  { value: '150+', label: 'REST APIs' },
  { value: '3', label: 'Live Projects' },
  { value: '90%', label: 'Test Coverage' },
];

export const HomeSection: React.FC = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  const nameAnim = useScrollAnimation('fade-up', { delay: 100 });
  const roleAnim = useScrollAnimation('fade-up', { delay: 200 });
  const descAnim = useScrollAnimation('fade-up', { delay: 300 });
  const ctaAnim  = useScrollAnimation('pop-up',  { delay: 420 });
  const socialAnim = useScrollAnimation('fade-in', { delay: 520 });
  const statsAnim  = useScrollAnimation('fade-up', { delay: 600 });

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx((i) => (i + 1) % ROTATING_ROLES.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  const handleMailClick = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=udayakumar12221@gmail.com&su=Hello%20Udaya%20Kumar&body=Hi%2C%20I%20came%20across%20your%20portfolio...',
      '_blank'
    );
  };

  return (
    <Section
      id="home"
      ariaLabel="Introduction"
      className="relative pt-28 sm:pt-20 pb-16 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-slate-950"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(6,182,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.05) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      {/* Radial blobs */}
      <div aria-hidden="true" className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-float" />
      <div aria-hidden="true" className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '1.5s' }} />
      <div aria-hidden="true" className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-500/6 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">

      

        {/* Name */}
        <div ref={nameAnim.ref as React.RefObject<HTMLDivElement>} style={nameAnim.style}>
          <p className="font-mono text-slate-400 dark:text-slate-500 text-sm tracking-widest uppercase mb-3">
            Hello, I'm
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight tracking-tight">
            Udaya Kumar{' '}
            <span className="relative text-cyan-500">
              V A
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-cyan-500 to-indigo-500"
              />
            </span>
          </h1>
        </div>

        {/* Rotating role */}
        <div ref={roleAnim.ref as React.RefObject<HTMLDivElement>} style={roleAnim.style}
          aria-label={`Current role: ${ROTATING_ROLES[roleIdx]}`}
          className="h-12 flex items-center justify-center mb-6"
        >
          <span
            className={`font-mono text-xl sm:text-2xl text-cyan-500 transition-all duration-300 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            {ROTATING_ROLES[roleIdx]}
            <span className="animate-blink text-cyan-400 ml-0.5">_</span>
          </span>
        </div>

        {/* Description */}
        <div ref={descAnim.ref as React.RefObject<HTMLDivElement>} style={descAnim.style}>
          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Backend developer passionate about building{' '}
            <span className="text-slate-900 dark:text-white font-medium">scalable REST APIs</span> and{' '}
            <span className="text-slate-900 dark:text-white font-medium">microservice architectures</span> using
            Spring Boot, Docker, and AWS. Based in <span className="text-cyan-500 font-medium">Chennai, India</span>.
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaAnim.ref as React.RefObject<HTMLDivElement>} style={ctaAnim.style}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <Button size="lg" onClick={() => scrollTo('#contact')} aria-label="Get in touch">
            Get in touch
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo('#projects')} aria-label="View projects">
            View work
          </Button>
        </div>

        {/* Social icons */}
        <div ref={socialAnim.ref as React.RefObject<HTMLDivElement>} style={socialAnim.style}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <a
            href="https://github.com/Udaya8855"
            target="_blank" rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="p-2.5 rounded-lg border border-slate-200 dark:border-white/8 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all hover:scale-110"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/udayakumar2003"
            target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="p-2.5 rounded-lg border border-slate-200 dark:border-white/8 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all hover:scale-110"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={handleMailClick}
            aria-label="Send email (opens Gmail)"
            className="p-2.5 rounded-lg border border-slate-200 dark:border-white/8 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/5 transition-all hover:scale-110 cursor-pointer"
          >
            <Mail size={18} />
          </button>
        </div>

        {/* Quick stats */}
        <div
          ref={statsAnim.ref as React.RefObject<HTMLDivElement>}
          style={statsAnim.style}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto mb-4"
        >
          {QUICK_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 dark:border-white/8 bg-slate-50/80 dark:bg-white/[0.03] px-3 py-4 text-center"
            >
              <p className="font-display text-2xl sm:text-3xl font-bold text-cyan-500">{stat.value}</p>
              <p className="font-mono text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

      
    </Section>
  );
};