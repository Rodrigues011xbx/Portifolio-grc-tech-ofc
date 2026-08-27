export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  year: string;
  github?: string;
  live?: string;
  featured?: boolean;
  details?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  year: string;
  description: string;
  technologies: string[];
  highlights?: string[];
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'database' | 'cloud' | 'tools' | 'architecture';
}

export interface NavItem {
  label: string;
  href: string;
}
