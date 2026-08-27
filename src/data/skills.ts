import { Skill } from '@/types';

export const skills: Skill[] = [
  { name: 'Node.js', category: 'framework' },
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Express', category: 'framework' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'Knex', category: 'framework' },
  { name: 'RabbitMQ', category: 'tools' },
  { name: 'AWS', category: 'cloud' },
  { name: 'Docker', category: 'tools' },
  { name: 'Kubernetes', category: 'tools' },
  { name: 'MinIO', category: 'cloud' },
  { name: 'REST APIs', category: 'architecture' },
  { name: 'React', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Three.js', category: 'framework' },
  { name: 'Software Architecture', category: 'architecture' },
  { name: 'Use Cases Architecture', category: 'architecture' },
  { name: 'SaaS Systems', category: 'architecture' },
  { name: 'Observability', category: 'tools' },
  { name: 'Automated Testing', category: 'tools' },
  { name: 'AI / LLMs', category: 'tools' },
];

export const skillCategories = [
  { key: 'language', label: 'Languages' },
  { key: 'framework', label: 'Frameworks' },
  { key: 'database', label: 'Databases' },
  { key: 'cloud', label: 'Cloud & Infra' },
  { key: 'tools', label: 'Tools' },
  { key: 'architecture', label: 'Architecture' },
] as const;
