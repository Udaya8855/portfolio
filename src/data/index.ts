import type { Project, Skill, TimelineEntry, NavLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home',     href: '#home',     ariaLabel: 'Go to home section' },
  { label: 'About',    href: '#about',    ariaLabel: 'Go to about section' },
  { label: 'Skills',   href: '#skills',   ariaLabel: 'Go to skills section' },
  { label: 'Projects', href: '#projects', ariaLabel: 'Go to projects section' },
  { label: 'Timeline', href: '#timeline', ariaLabel: 'Go to experience timeline' },
  { label: 'Contact',  href: '#contact',  ariaLabel: 'Go to contact section' },
];

export const SKILLS: Skill[] = [
  // Backend
  { id: 'sb',      name: 'Spring Boot',      category: 'Backend',  level: 'advanced'   },
  { id: 'java',    name: 'Java',             category: 'Backend',  level: 'advanced'   },
  { id: 'ms',      name: 'Microservices',    category: 'Backend',  level: 'proficient' },
  { id: 'rest',    name: 'REST APIs',        category: 'Backend',  level: 'advanced'   },
  // Database
  { id: 'pg',      name: 'PostgreSQL',       category: 'Database', level: 'advanced'   },
  { id: 'mysql',   name: 'MySQL',            category: 'Database', level: 'proficient' },
  { id: 'jpa',     name: 'JPA / Hibernate',  category: 'Database', level: 'proficient' },
  // DevOps
  { id: 'docker',  name: 'Docker',           category: 'DevOps',   level: 'proficient' },
  // { id: 'k8s',     name: 'Kubernetes',       category: 'DevOps',   level: 'familiar'   },
  // Cloud
  { id: 'aws',     name: 'AWS',              category: 'Cloud',    level: 'proficient' },
  { id: 'ec2',     name: 'EC2 / S3 / RDS',  category: 'Cloud',    level: 'proficient' },
  // Tools
  { id: 'git',     name: 'GitHub',           category: 'Tools',    level: 'advanced'   },
  { id: 'gradle',  name: 'Gradle',           category: 'Tools',    level: 'proficient' },
  
  { id: 'junit',   name: 'JUnit 5',          category: 'Tools',    level: 'proficient' },
  { id: 'sonar',   name: 'SonarQube',        category: 'Tools',    level: 'proficient' },
  { id: 'swagger', name: 'Swagger / OpenAPI',category: 'Tools',    level: 'proficient' },
  { id: 'maven',   name: 'Maven',            category: 'Tools',    level: 'proficient' },
];

export const PROJECTS: Project[] = [
 {
  id: 'p1',
  title: 'Raise Tickets — Complaint Management System',
  description: 'Enterprise complaint management platform for raising, tracking, and resolving customer and internal service requests.',
  longDescription: 'A scalable ticket management application built using Spring Boot microservices architecture. The system enables users to create complaints, track ticket status, assign issues to support teams, and monitor resolution workflows. Spring Security is implemented for secure authentication and authorization, while SonarQube ensures code quality and PostgreSQL provides reliable data storage.',
  techStack: [
    { name: 'Java',            color: 'bg-amber-500/20 text-amber-700 border-amber-500/30 dark:text-amber-300' },
    { name: 'Spring Boot',     color: 'bg-green-500/20 text-green-700 border-green-500/30 dark:text-green-300' },
    { name: 'Spring Security', color: 'bg-red-500/20 text-red-700 border-red-500/30 dark:text-red-300' },
    { name: 'Microservices',   color: 'bg-cyan-500/20 text-cyan-700 border-cyan-500/30 dark:text-cyan-300' },
    { name: 'PostgreSQL',      color: 'bg-blue-500/20 text-blue-700 border-blue-500/30 dark:text-blue-300' },
    { name: 'SonarQube',       color: 'bg-purple-500/20 text-purple-700 border-purple-500/30 dark:text-purple-300' },
  ],
  repoUrl: 'https://github.com/Udaya8855',
  imageAlt: 'Raise Tickets complaint management system dashboard',
  highlights: [
    'Complaint and service request lifecycle management',
    'Role-based authentication and authorization using Spring Security',
    'Microservices-based architecture for scalability and maintainability',
    'Code quality analysis and security checks using SonarQube',
  ],
  year: 2026,
},

{
  id: 'p2',
  title: '3D Lights Shopping Platform',
  description: 'Enterprise e-commerce application for browsing, purchasing, and managing decorative 3D lighting products.',
  longDescription: 'A full-stack shopping platform developed with React and Spring Boot. The application provides product catalog management, shopping cart functionality, order processing, and responsive user interfaces. Spring Security secures user accounts and APIs, while MySQL manages product and order data.',
  techStack: [
    { name: 'Java',            color: 'bg-amber-500/20 text-amber-700 border-amber-500/30 dark:text-amber-300' },
    { name: 'Spring Boot',     color: 'bg-green-500/20 text-green-700 border-green-500/30 dark:text-green-300' },
    { name: 'Spring Security', color: 'bg-red-500/20 text-red-700 border-red-500/30 dark:text-red-300' },
    { name: 'React',           color: 'bg-sky-500/20 text-sky-700 border-sky-500/30 dark:text-sky-300' },
    { name: 'MySQL',           color: 'bg-indigo-500/20 text-indigo-700 border-indigo-500/30 dark:text-indigo-300' },
  ],
  repoUrl: 'https://github.com/Udaya8855',
  imageAlt: '3D Lights Shopping Platform product catalog interface',
  highlights: [
    'Interactive product browsing and search functionality',
    'Secure login and protected APIs using Spring Security',
    'Shopping cart and order management workflows',
    'Responsive React-based user interface',
  ],
  year: 2025,
},

{
  id: 'p3',
  title: 'Employee Management System',
  description: 'Secure employee management platform for managing employee records, roles, departments, and organizational workflows.',
  longDescription: 'A comprehensive employee management application built with Spring Boot and MySQL. The system allows administrators to manage employee profiles, departments, attendance records, and user roles. Spring Security provides authentication and role-based access control to ensure secure access to sensitive employee information.',
  techStack: [
    { name: 'Java',            color: 'bg-amber-500/20 text-amber-700 border-amber-500/30 dark:text-amber-300' },
    { name: 'Spring Boot',     color: 'bg-green-500/20 text-green-700 border-green-500/30 dark:text-green-300' },
    { name: 'Spring Security', color: 'bg-red-500/20 text-red-700 border-red-500/30 dark:text-red-300' },
    { name: 'MySQL',           color: 'bg-indigo-500/20 text-indigo-700 border-indigo-500/30 dark:text-indigo-300' },
  ],
  repoUrl: 'https://github.com/Udaya8855',
  imageAlt: 'Employee Management System dashboard',
  highlights: [
    'Employee profile and department management',
    'Role-based authentication and authorization',
    'Secure CRUD operations for employee records',
    'Centralized employee data management with MySQL',
  ],
  year: 2025,
}
];

export const TIMELINE: TimelineEntry[] = [
  {
    id: 't1',
    role: 'Java Developer',
    company: 'Esfita Infotech Pvt Ltd',
    location: 'Chennai, India',
    startDate: 'Jan 2025',
    endDate: 'Present',
    description: 'Developing and maintaining flexible backend applications using Java Spring Boot for backend services and REST API development for enterprise clients.',
    achievements: [
      'Built REST APIs using Spring Boot for client-facing enterprise applications',
      'Designed and optimized MySQL database schemas for multi-module projects',
      'Containerized services using Docker, improving deployment consistency across environments',
      'Collaborated with cross-functional teams using GitHub for version control and code reviews',
    ],
    techUsed: ['Spring Boot', 'Java', 'MySQL', 'Docker', 'Gradle', 'GitHub'],
  },
  {
    id: 't2',
    role: 'Java Full Stack — Certification Training',
    company: 'Besant Technologies',
    location: 'Chennai, India',
    startDate: 'Jun 2024',
    endDate: 'Dec 2024',
    description: 'Completed an intensive Java Full Stack certification program covering core Java, Spring Boot, REST APIs, database management, and cloud fundamentals.',
    achievements: [
      'Mastered core Java, OOP, collections, and exception handling',
      'Built REST APIs with Spring Boot, Spring MVC, and Spring Data JPA',
      'Hands-on practice with MySQL, PostgreSQL, and JPA/Hibernate ORM',
      'Completed capstone project: a full-stack task management application deployed via Docker',
    ],
    techUsed: ['Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'JPA', 'Docker', 'Gradle'],
  },
  {
    id: 't3',
    role: 'BSc Computer Science',
    company: 'SSS Arts, Science & Management College — Arcot',
    location: 'Arcot, Tamil Nadu',
    startDate: 'Jun 2021',
    endDate: 'Apr 2024',
    description: 'Bachelor of Science in Computer Science. Built a strong foundation in programming fundamentals, data structures, database management, and software engineering.',
    achievements: [
      'Core coursework: Data Structures, DBMS, Operating Systems, Computer Networks, OOP with Java',
      'Final year project: Student Result Management System using Java and MySQL',
      'Active participant in college technical symposiums and coding contests',
    ],
    techUsed: ['Java', 'MySQL', 'Python', 'HTML', 'CSS', 'Linux'],
  },
];
