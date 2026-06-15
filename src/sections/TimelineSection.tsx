import React, { useState } from 'react';
import { Download, MapPin, Calendar, ChevronRight, Briefcase, GraduationCap, Award } from 'lucide-react';
import { Section, SectionHeader } from '../components/Section';
import { Button } from '../components/Button';
import { Tag } from '../components/Tag';
import { TIMELINE } from '../data';
import udayaCv from "../assets/UDAYAKUMARVA.pdf";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ENTRY_ICONS = [
  <Briefcase size={14} />,
  <Award size={14} />,
  <GraduationCap size={14} />,
];

const DOT_COLORS = [
  'border-cyan-400 bg-cyan-500/20 dark:bg-cyan-500/20',
  'border-amber-400 bg-amber-500/20',
  'border-indigo-400 bg-indigo-500/20',
];

export const TimelineSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(TIMELINE[0].id);

  const headerAnim = useScrollAnimation('fade-up',    { delay: 0 });
  const entry0Anim = useScrollAnimation('slide-left', { delay: 0   });
  const entry1Anim = useScrollAnimation('slide-left', { delay: 120 });
  const entry2Anim = useScrollAnimation('slide-left', { delay: 240 });
  const entryAnims = [entry0Anim, entry1Anim, entry2Anim];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = udayaCv;
    link.download = 'Udaya_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section id="timeline" ariaLabel="Experience timeline and resume" className="py-24 px-4 sm:px-6 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-4xl mx-auto">

        <div ref={headerAnim.ref as React.RefObject<HTMLDivElement>} style={headerAnim.style}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <SectionHeader eyebrow="Experience" title="Career timeline" />
          <Button
            onClick={handleDownloadCV}
            variant="outline"
            size="sm"
            leftIcon={<Download size={14} />}
            aria-label="Download Udaya Kumar's resume PDF"
          >
            Download CV
          </Button>
        </div>

        <ol aria-label="Career history" className="relative space-y-0">
          {TIMELINE.map((entry, idx) => {
            const isExpanded = expandedId === entry.id;
            const isLast = idx === TIMELINE.length - 1;
            const anim = entryAnims[idx];

            return (
              <li
                key={entry.id}
                ref={anim?.ref as React.RefObject<HTMLLIElement>}
                style={anim?.style}
                className="relative pl-10"
              >
                {/* Vertical connector */}
                {!isLast && (
                  <div aria-hidden="true" className="absolute left-[15px] top-8 bottom-0 w-px bg-gradient-to-b from-slate-300 dark:from-slate-600 to-transparent" />
                )}

                {/* Timeline dot */}
                <div
                  aria-hidden="true"
                  className={`absolute left-0 top-2 w-8 h-8 rounded-full border-2 flex items-center justify-center text-slate-600 dark:text-slate-400 transition-transform duration-300 ${
                    isExpanded ? 'scale-110' : ''
                  } ${DOT_COLORS[idx] || 'border-slate-400 bg-slate-100 dark:bg-slate-800'}`}
                >
                  {ENTRY_ICONS[idx]}
                </div>

                {/* Card */}
                <div className={`mb-8 ml-2 rounded-xl border transition-all duration-300 ${
                  isExpanded
                    ? 'border-cyan-300 dark:border-cyan-500/25 bg-white dark:bg-slate-800/60 shadow-md shadow-cyan-500/5'
                    : 'border-slate-200 dark:border-white/6 bg-white dark:bg-slate-800/30 hover:border-slate-300 dark:hover:border-white/12 hover:shadow-sm'
                }`}>
                  <button
                    onClick={() => setExpandedId(isExpanded ? '' : entry.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`timeline-detail-${entry.id}`}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{entry.role}</h3>
                        {idx === 0 && (
                          <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-500/15 border border-green-300 dark:border-green-500/25 text-green-700 dark:text-green-400 animate-pulse-glow">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="font-semibold text-cyan-600 dark:text-cyan-400 text-sm mb-2">{entry.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} aria-hidden="true" />{entry.startDate} — {entry.endDate}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} aria-hidden="true" />{entry.location}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      size={18}
                      aria-hidden="true"
                      className={`text-slate-400 shrink-0 mt-1 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
                    />
                  </button>

                  {isExpanded && (
                    <div id={`timeline-detail-${entry.id}`} className="px-5 pb-5 border-t border-slate-100 dark:border-white/5 pt-4">
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{entry.description}</p>
                      <ul aria-label={`Achievements at ${entry.company}`} className="space-y-2 mb-5">
                        {entry.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                            <ChevronRight size={14} className="text-cyan-500 mt-0.5 shrink-0" aria-hidden="true" />
                            {a}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-1.5" aria-label={`Technologies used at ${entry.company}`}>
                        {entry.techUsed.map((t) => <Tag key={t} name={t} size="sm" />)}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
};
