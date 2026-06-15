import React from 'react';

interface TagProps { name: string; color?: string; size?: 'sm' | 'md'; }

export const Tag: React.FC<TagProps> = ({ name, color, size = 'sm' }) => {
  const defaultColor = 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700/60 dark:text-slate-300 dark:border-slate-600/40';
  const sizeClass = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';
  return (
    <span className={`inline-flex items-center border rounded-md font-mono font-medium whitespace-nowrap ${sizeClass} ${color || defaultColor}`}>
      {name}
    </span>
  );
};
