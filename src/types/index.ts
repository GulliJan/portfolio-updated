export type ProjectTag =
  | 'React'
  | 'TypeScript'
  | 'JavaScript'
  | 'Python'
  | 'FastAPI'
  | 'PostgreSQL'
  | 'Shadcn UI'
  | 'Tailwind'
  | 'Node.js'
  | 'OpenCV'
  | 'YOLO'
  | 'ByteTrack'
  | 'EasyOCR'
  | 'Tesseract'
  | 'Roboflow'
  | 'Poetry'
  | 'REST API'
  | 'Accessibility'
  | 'Performance'
  | 'SEO'
  | 'Computer Vision'
  | 'Machine Learning'
  | 'Agile'
  | 'HTML/CSS';

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  tags: ProjectTag[];
  highlights: string[];
  links: {
    demo?: string;
    repo?: string;
    caseStudy?: string;
  };
  image?: string;
  imageAlt?: string;
  award?: string;
  featured: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  summary: string;
  bullets: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  description?: string;
  credentialUrl?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  period: string;
  description: string;
  category: 'Research' | 'Leadership' | 'Volunteer' | 'Community' | 'Recognition';
  /** Optional banner image shown at the top of the card */
  image?: string;
  /** Optional secondary image — when present, card renders a 2-image collage */
  imageSecondary?: string;
  /** Alt text for the primary image */
  imageAlt?: string;
  /** Alt text for the secondary image */
  imageSecondaryAlt?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface Stat {
  value: string;
  label: string;
}
