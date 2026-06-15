import React from 'react';
import { User } from 'lucide-react';

interface ImagePlaceholderProps {
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  note?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ alt = 'Profile photo placeholder', size = 'lg', className = '', note = 'Upload your photo here' }) => {
  const sizeClasses = { sm: 'w-20 h-20', md: 'w-32 h-32', lg: 'w-48 h-48' };
  const iconSizes = { sm: 28, md: 40, lg: 64 };
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cyan-300 dark:border-cyan-500/30 bg-slate-50 dark:bg-slate-800/50 ${sizeClasses[size]} ${className}`}
    >
      <div className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500">
        <User size={iconSizes[size]} strokeWidth={1.2} className="text-cyan-400 dark:text-cyan-500/40" />
        {size === 'lg' && <span className="text-xs text-slate-400 font-mono text-center px-3 leading-snug">{note}</span>}
      </div>
      <div className="absolute inset-0 rounded-2xl border border-cyan-200 dark:border-cyan-500/10 animate-pulse" />
    </div>
  );
};
