import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: 'wello',
    role: 'Backend Developer',
    company: 'Wello',
    period: '2025 — Present',
    year: '2026',
    description:
      'Developing and architecting a complex SaaS platform for occupational risk management. Building scalable backend systems with modular architecture, async processing, and cloud infrastructure.',
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
      'Integrated AI capabilities for risk analysis',
    ],
  },
];
