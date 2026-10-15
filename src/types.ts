export interface Profile {
  name: string
  nickname: string
  title: string
  tagline: string
  summary: string
  location: string
  phone: string
  email: string
  linkedin: string
  github: string
  whatsapp: string
  resumeUrl: string
  availableForWork: boolean
}

export interface StatItem {
  value: string
  label: string
  sublabel: string
}

export interface CorePillar {
  title: string
  description: string
  icon: string
}

export interface SkillItem {
  name: string
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'architecture'
  highlight?: boolean
  description?: string
}

export interface WorkExperience {
  id: string
  role: string
  company: string
  location: string
  period: string
  isCurrent: boolean
  description?: string
  bulletPoints: string[]
  technologies: string[]
}

export interface PortfolioProject {
  id: string
  title: string
  client: string
  category: 'Enterprise / ERP' | 'Governance & Compliance' | 'Internal Workflow' | 'Fullstack'
  date: string
  summary: string
  highlights: string[]
  technologies: string[]
  metrics?: string
  demoUrl?: string
  githubUrl?: string
}

export interface EducationItem {
  institution: string
  degree: string
  major: string
  location: string
  period: string
  gpa: string
  description?: string
}
