import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'ziefah-health',
    title: 'Ziefah Health',
    tagline: 'Crisis triage & clinician matching platform.',
    description:
      'A full-stack crisis triage and clinician-matching web application built for a healthcare client. The platform pairs users experiencing mental-health crises with appropriate clinicians through a responsive, accessible interface backed by a typed REST API.',
    year: '2025',
    role: 'Full-stack developer · Agile team',
    tags: ['React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Shadcn UI', 'REST API', 'Accessibility', 'Agile'],
    highlights: [
      'Designed matching logic and REST endpoints pairing users with the right clinicians, using mock JSON sources to simulate real patient and clinician records',
      'Built a responsive Shadcn UI front end with real-time updates and WCAG-compliant colour contrast, keyboard navigation, and semantic HTML for users in crisis',
      'Collaborated in sprint reviews, stand-ups, and Git workflows, incorporated client feedback iteratively and aligned the platform with clinical resource guidelines',
    ],
    links: {
      repo: 'https://github.com/GulliJan',
    },
    featured: true,
  },
  {
    slug: 'train-wagon-ocr',
    title: 'Automated Train Wagon OCR',
    tagline: 'Computer-vision pipeline for moving railway footage.',
    description:
      'An end-to-end computer vision and OCR pipeline that detects, tracks, and extracts identification markings from moving train wagons in video footage, outputting clean, structured JSON per wagon. Built with a 4-person team as an Applied Research project at Mohawk College; earned the Audience Choice Award at Ideas to Impact 2026.',
    year: '2025 – 2026',
    role: 'ML & pipeline engineer · Team of 4',
    tags: ['Python', 'OpenCV', 'YOLO', 'ByteTrack', 'EasyOCR', 'Tesseract', 'Roboflow', 'Poetry', 'Computer Vision', 'Machine Learning'],
    highlights: [
      'Trained an Ultralytics YOLO object-detection model on a custom dataset of 1,500+ annotated images via Roboflow; integrated ByteTrack to keep consistent wagon identities across frames',
      'Built a dual-engine OCR layer (EasyOCR with Tesseract fallback) using frame-quality scoring, multi-frame aggregation, and confidence-based selection to handle motion blur and variable lighting',
      'Delivered a modular, Poetry-managed pipeline that finalized 138 wagons during evaluation; shipped structured JSON output per wagon with full reproducibility',
      'Collaborated with a 4-person team through Git, code reviews, and regular sprint check-ins',
    ],
    links: {
      repo: 'https://github.com/GulliJan',
      caseStudy: '#',
    },
    image: '/images/ideas-to-impact-2026.jpeg',
    imageAlt:
      "Gul Afroz Akbari with her team presenting the Automated Train Identification project at Mohawk College's Ideas to Impact 2026 poster competition.",
    award: 'Audience Choice · Ideas to Impact 2026',
    featured: true,
  },
  {
    slug: 'nail-salon-site',
    title: 'Local Nail Salon Website',
    tagline: 'Freelance, mobile-first site with on-page SEO.',
    description:
      'A responsive, mobile-first website built for a Hamilton-based nail salon. Designed and developed end-to-end with service listings, galleries, and contact workflows then optimized with semantic HTML, meta tags, alt text, and fast-loading assets to improve local search visibility.',
    year: '2025',
    role: 'Freelance — design & development',
    tags: ['HTML/CSS', 'JavaScript', 'SEO', 'Performance', 'Accessibility'],
    highlights: [
      'Delivered a production-ready site tailored to the client\u2019s brand through iterative feedback cycles',
      'Implemented on-page SEO (semantic HTML, meta tags, alt text, image optimization) to boost local discoverability',
      'Built mobile-first with attention to tap targets, legibility, and fast loading on weak connections',
    ],
    links: {
      demo: 'https://royalnails.netlify.app/'},
    featured: false,
  },
];
