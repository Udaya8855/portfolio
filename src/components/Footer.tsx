import React from 'react';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer role="contentinfo" className="border-t border-slate-200 dark:border-white/5 py-8 px-4 sm:px-6 bg-white dark:bg-slate-950">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
          <Terminal size={12} className="text-cyan-500" />
        </div>
        <span className="font-mono text-sm text-slate-500 dark:text-slate-500">udaya<span className="text-cyan-500">.</span>dev</span>
      </div>
      {/* <p className="font-mono text-xs text-slate-400">Built with React, TypeScript & Tailwind CSS</p> */}
      <p className="font-mono text-xs text-slate-400">© {new Date().getFullYear()} Udaya Kumar V A</p>
    </div>
  </footer>
);
