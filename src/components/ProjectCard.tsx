import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import type { Project } from '../types';
import { Tag } from './Tag';

interface ProjectCardProps { project: Project; }

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-white/8 bg-white dark:bg-slate-900/60 shadow-sm dark:shadow-none overflow-hidden transition-all duration-300 hover:border-cyan-300 dark:hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 h-full"
      // 👆 Added "h-full" – this makes the card fill its parent container's height
      aria-label={`Project: ${project.title}`}
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs text-slate-400 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/50 px-2 py-0.5 rounded">{project.year}</span>
          <div className="flex items-center gap-2">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                aria-label={`View ${project.title} source on GitHub`}
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Github size={17} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="text-slate-400 hover:text-cyan-500 transition-colors">
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>

        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-100 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {expanded && (
          <div className="mb-4 space-y-3">
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{project.longDescription}</p>
            <ul aria-label={`${project.title} highlights`} className="space-y-1.5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <ArrowRight size={14} className="text-cyan-500 mt-0.5 shrink-0" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-cyan-500 transition-colors mb-5 w-fit"
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? 'Show less' : 'Show details'}
        </button>

        <div className="mt-auto flex flex-wrap gap-1.5" aria-label="Tech stack">
          {project.techStack.map((tag) => (
            <Tag key={tag.name} name={tag.name} color={tag.color} />
          ))}
        </div>
      </div>
    </article>
  );
};