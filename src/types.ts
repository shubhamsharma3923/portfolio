export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  imageSeed: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
