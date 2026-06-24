export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  features: string[];
  github: string;
  liveDemo?: string;
  duration: string;
  role: string;
  category: string[];
  images: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location?: string;
  description: string;
  technologies: string[];
  type: 'work' | 'internship' | 'virtual' | 'leadership' | 'hackathon';
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year?: string;
  organization?: string;
  icon: 'trophy' | 'medal' | 'star' | 'award' | 'code';
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  date?: string;
  image?: string;
  verificationLink?: string;
}

export interface CompetitivePlatform {
  id: string;
  name: string;
  rating: string;
  maxRating: string;
  stars?: string;
  icon: string;
  profileUrl: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  branch: string;
  cgpa: string;
  duration: string;
}
