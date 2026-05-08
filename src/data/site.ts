import type { NavItem, SocialLink, Stat } from '@/types';

export const site = {
  name: 'Gul Afroz Akbari',
  firstName: 'Gul',
  role: 'Full-Stack Developer',
  location: 'Hamilton, ON',
  email: 'gulafrozakbari1375@gmail.com',
  phone: '(905) 541-4855',
  /** Place your resume PDF at /public/resume.pdf to activate */
  resumeUrl: '/Gul_Afroz_Akbari_Resume.pdf',
  tagline:
    'I build full-stack web apps and computer-vision pipelines with React, TypeScript, Python, and FastAPI, always aiming for work that is accessible, well-tested, and genuinely useful.',
  summary: `Computer Systems Technician graduate with hands-on experience shipping full-stack web applications, REST APIs, and computer vision pipelines. Dean's Honour List student, Agile-team collaborator, and Audience Choice Award winner at Mohawk College's Ideas to Impact 2026. Seeking software developer or co-op opportunities.`,
  bio: `I am a Computer Systems Technician graduate from Mohawk College, currently pursuing advanced studies in Computer Systems Technology – Software Development. Before switching into tech, I earned a Bachelor's in Economics and Management from Ishraq University, that background still shapes how I think about software: systems, trade-offs, and the people on the other side of the screen.

What I've built so far ranges from a full-stack crisis triage platform for a healthcare client to a computer-vision and OCR pipeline that reads markings off moving train wagons. I work best in Agile teams with real feedback loops and I care about the craft underneath the interface accessibility, performance, clean data shapes, and code someone else can read six months from now.

I'm currently based in Hamilton, ON and looking for software developer or co-op roles where I can keep learning and contributing to products people actually use.`,
} as const;

export const navItems: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Work', href: '/work' },
  { label: 'Experience', href: '/experience' },
  { label: 'Community', href: '/community' },
  { label: 'Contact', href: '/#contact' },
];

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/GulliJan',
    handle: 'github.com/GulliJan',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gul-afroz-akbari-987a3620b',
    handle: 'linkedin.com/in/gul-afroz-akbari',
  },
  {
    label: 'Email',
    href: 'mailto:gulafrozakbari1375@gmail.com',
    handle: 'gulafrozakbari1375@gmail.com',
  },
];

/** Stats strip shown under the hero — all numbers from real project work */
export const heroStats: Stat[] = [
  { value: '3.8+', label: "Dean's Honour List" },
  { value: '1,500+', label: 'Images trained (YOLO)' },
  { value: '138', label: 'Train wagons processed' },
  { value: '🏆', label: 'Audience Choice · 2026' },
];
