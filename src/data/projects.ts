import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'wello',
    title: 'WELLO',
    description: 'SaaS platform focused on occupational risk management. A complex system built with modular architecture, async processing, and AI integration.',
    category: 'SaaS Platform',
    technologies: [
      'Node.js',
      'TypeScript',
      'Express',
      'PostgreSQL',
      'Knex',
      'RabbitMQ',
      'AWS',
      'MinIO',
      'Docker',
    ],
    image: '/projects/wello.jpg',
    year: '2026',
    featured: true,
    details: [
      'Use Cases Architecture',
      'Modular Architecture',
      'REST APIs',
      'Async Processing',
      'Document Management',
      'Dynamic Forms',
      'Risk Management',
      'Action Plans',
      'AI Integration',
    ],
  },
  {
    id: 'project-2',
    title: 'PROJECT TWO',
    description: 'Coming soon — a new project is in the works.',
    category: 'Backend System',
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL'],
    image: '/projects/placeholder.jpg',
    year: '2026',
  },
];
