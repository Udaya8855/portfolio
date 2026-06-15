export type SkillLevel = 'familiar' | 'proficient' | 'advanced';

export type SkillCategory = 'Backend' | 'Database' | 'DevOps' | 'Cloud' | 'Tools';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  // icon field removed - using lucide icons instead
}

export interface TechTag {
  name: string;
  color?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: TechTag[];
  repoUrl?: string;
  liveUrl?: string;
  imageAlt: string;
  highlights: string[];
  year: number;
}

export interface TimelineEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  techUsed: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
  ariaLabel?: string;
}
