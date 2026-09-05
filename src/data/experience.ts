import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'project-one',
    role: 'Backend Developer',
    company: 'Project One',
    period: '2025 — Present',
    year: '2026',
    description:
      'Developing and architecting a scalable backend product with modular architecture, async processing, and cloud infrastructure.',
    technologies: [
      'Node.js',
      'TypeScript',
      'PostgreSQL',
      'AWS',
      'RabbitMQ',
      'Docker',
      'Express',
      'Knex',
    ],
    highlights: [
      'Designed use-case driven architecture',
      'Implemented async message processing with RabbitMQ',
      'Built document management system with MinIO',
      'Integrated services to support evolving product requirements',
    ],
  },
];
