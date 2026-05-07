import type { Experience, Certification, LeadershipItem } from '@/types';

export const experience: Experience[] = [
  {
    role: 'Freelance Web Developer',
    organization: 'Nail Salon Client, Hamilton, ON',
    period: '2025',
    summary:
      'Designed and developed a mobile-first website for a local business, end-to-end.',
    bullets: [
      'Built a responsive site with service listings, galleries, and contact workflows tailored to the client\u2019s brand',
      'Implemented on-page SEO, semantic HTML, meta tags, alt text, fast-loading assets, to improve local search visibility',
      'Worked directly with the client through iterative feedback cycles to deliver a production-ready result',
    ],
  },
  {
    role: 'Pizza Department Associate',
    organization: 'Fortinos Canada, Hamilton, ON',
    period: 'Dec 2022 – Present',
    summary:
      'Balancing full-time studies with consistent performance in a fast-paced retail environment.',
    bullets: [
      'Deliver quality and customer service in a high-volume department while carrying a full academic load',
      'Demonstrated reliability, teamwork, and time-management across multiple years of continuous employment',
    ],
  },
  {
  role: 'English Language and Computer Instructor',
  organization: 'Meraj High School, Afghanistan',
  period: 'March 2015 – September 2019',
  summary: 'Taught English language and computer skills while developing students\' problem-solving abilities and technical readiness.',
  bullets: [
    'Mentored students in problem-solving and critical thinking, preparing them for technical certifications and job readiness.',
    'Improved efficiency by implementing automated tracking systems.',
  ],
},
];

export const certifications: Certification[] = [
  {
    name: 'Advanced Docker, Data Persistence and Orchestration',
    issuer: 'Coursera / Packt',
    year: '2025',
    description:
      'Volumes, networks, and multi-container orchestration for production-ready backend deployment.',
    credentialUrl: '#',
  },
  {
    name: 'Docker Fundamentals, Understanding Containers and Images',
    issuer: 'Coursera / Packt',
    year: '2025',
    description:
      'Containerization fundamentals, image creation, and container lifecycle management for modern deployment workflows.',
    credentialUrl: '#',
  },
  {
    name: 'Dean\u2019s Honour List',
    issuer: 'Mohawk College · Computer Systems Technician',
    year: '2023 – 2025',
    description:
      'Awarded The fisrt semesters for sustained academic excellence.',
  },
  {
    name: 'Audience Choice Award',
    issuer: 'Ideas to Impact 2026 · Mohawk College',
    year: '2026',
    description:
      'Awarded for the Automated Train Identification project, a computer-vision pipeline for extracting markings from moving railway footage.',
  },
];

export const leadership: LeadershipItem[] = [
  {
    role: 'Patient Advisor',
    organization: 'Patient Expertise in Research Collaboration Centre (PERC), McMaster University',
    period: '2023 – Present',
    description:
      'Contributing as a patient partner to primary healthcare research in Ontario, helping ensure that studies, tools, and resources reflect the real needs and experiences of patients, families, and communities. Presented PERC research at NAPCRG 2024 in Quebec City as a patient partner, and also attended Trillium in 2024 and 2025 to continue learning, connecting, and contributing to patient-oriented healthcare research.',
    category: 'Research',
    image: '/images/leadership/perc-napcrg.jpg',
    imageAlt:
      'Gul Afroz Akbari presenting a PERC research poster at the NAPCRG 2025 conference in Quebec City.',
    imageSecondary: '/images/leadership/perc-napcrg-2.jpg',
    imageSecondaryAlt:
      'Gul Afroz Akbari with PERC researchers in front of the “Envisioning roles for patient partners” poster at NAPCRG 2025.',
  },
  {
    role: 'Orientation Ambassador',
    organization: 'Mohawk College',
    period: '2023 – 2026',
    description:
      'Welcomed and mentored incoming students across three consecutive academic years (2023–24, 2024–25, 2025–26), leading campus tours, answering questions, and helping new students feel at home on their first day.',
    category: 'Leadership',
    image: '/images/leadership/mocrew-orientation.jpg',
    imageAlt:
      'Gul with the MoCrew Orientation Ambassador team at Mohawk College, all in MO CREW shirts.',
  },
  {
    role: 'Leadership Conference Attendee',
    organization: 'MoCrew · Mohawk College Student Life',
    period: '2024 & 2026',
    description:
      'Selected for the MoCrew Student Leadership Camp (2024) and the MoCrew Student Leadership Conference (2026), multi-day programs focused on peer leadership, communication, and community-building skills.',
    category: 'Leadership',
    image: '/images/leadership/mocrew-leadership-camp.jpg',
    imageAlt:
      'MoCrew Student Leadership Camp group photo at the cabin, MoCrew flag flying.',
    imageSecondary: '/images/leadership/mocrew-camp-2.jpg',
    imageSecondaryAlt:
      'Gul with fellow student leaders during a hike at the MoCrew Leadership Camp.',
  },
  {
    role: 'Youth Ambassador',
    organization: 'RightToLearn',
    period: 'Ongoing',
    description:
      'Supporting an organization focused on educational access, attended a Toronto networking event amplifying the voices of Afghan girls and their artwork as an expression of healing and hope.',
    category: 'Volunteer',
    image: '/images/leadership/right-to-learn.jpg',
    imageAlt:
      'Group photo at the “Her Right to Learn” symposium hosted by Canadian Women for Women in Afghanistan at McGill University.',
    imageSecondary: '/images/leadership/right-to-learn-2.jpg',
    imageSecondaryAlt:
      'Gul speaking on a panel at the APT networking event focused on youth, art, and dialogue.',
  },
  {
    role: 'Member',
    organization: 'Global Shapers Toronto Hub · World Economic Forum',
    period: 'Ongoing',
    description:
      'Part of a global community of young people driving dialogue, action, and change on issues that matter locally and globally.',
    category: 'Community',
  },
  {
    role: 'Chair',
    organization: 'ISC Model United Nations',
    period: 'Past',
    description:
      'Led committee sessions at the ISC Model UN, moderating debate, facilitating resolutions, and mentoring delegates through the diplomatic process.',
    category: 'Leadership',
  },
  {
    role: 'Speech Prize Winner',
    organization: 'Indian Embassy',
    period: '2019',
    description:
      'Recognized with a speech prize awarded by the Indian Embassy for public-speaking excellence.',
    category: 'Recognition',
  },
  
];
