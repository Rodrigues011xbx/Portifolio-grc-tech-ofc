import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'project-one',
    title: 'PROJECT ONE',
    description: 'A scalable backend product built with modular architecture, async processing, and cloud infrastructure.',
    category: 'Backend Platform',
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
    image: '/projects/placeholder.jpg',
    year: '2026',
    featured: true,
    details: [
      'Use Cases Architecture',
      'Modular Architecture',
      'REST APIs',
      'Async Processing',
      'Document Management',
      'Dynamic Workflows',
      'Cloud Infrastructure',
      'Service Integration',
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
