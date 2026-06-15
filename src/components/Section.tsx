import React from 'react';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '', ariaLabel }) => (
  <section id={id} aria-label={ariaLabel} className={`w-full ${className}`}>
    {children}
  </section>
);

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, subtitle, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
    {eyebrow && (
      <span className="font-mono text-xs text-cyan-500 tracking-widest uppercase mb-3 block">{eyebrow}</span>
    )}
    <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">{title}</h2>
    {subtitle && (
      <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
    )}
  </div>
);
