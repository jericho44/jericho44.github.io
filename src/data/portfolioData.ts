import type {
  Profile,
  StatItem,
  CorePillar,
  SkillItem,
  WorkExperience,
  PortfolioProject,
  EducationItem,
} from '../types'

export const profileData: Profile = {
  name: 'RICO WAHYU YUDANA PUTRA',
  nickname: 'Rico Wahyu',
  title: 'Fullstack Engineer',
  tagline: 'Building High-Performance Enterprise Applications & Scalable Backend Systems',
  summary:
    'Fullstack Engineer with 3+ years of experience engineering mission-critical enterprise web and mobile systems across manufacturing, governance, ERP, and document management. Specialized in resilient backend architectures with Laravel, Golang, Spring Boot, and modern reactive frontends with Vue.js & TypeScript.',
  location: 'Surabaya / East Java, Indonesia',
  phone: '+62 856-0453-3743',
  email: 'ricowahyu04@gmail.com',
  linkedin: 'https://linkedin.com/in/rico-wahyu',
  github: 'https://github.com/jericho44',
  whatsapp: 'https://wa.me/6285604533743',
  resumeUrl: './Rico_Wahyu_Resume.pdf',
  availableForWork: true,
}

export const statsData: StatItem[] = [
  {
    value: '3+ Years',
    label: 'Engineering Experience',
    sublabel: 'Enterprise Web & Scalable APIs',
  },
  {
    value: '5+ Enterprise',
    label: 'Mission-Critical Systems',
    sublabel: 'Manufacturing, Governance, ERP & FinTech',
  },
  {
    value: '100%',
    label: 'Production Quality',
    sublabel: 'Clean Architecture & Tested APIs',
  },
  {
    value: '4+ Core',
    label: 'Enterprise Frameworks',
    sublabel: 'Laravel, Go, Spring Boot, Vue.js',
  },
]

export const pillarsData: CorePillar[] = [
  {
    title: 'Scalable Backend Architecture',
    description:
      'Designing clean, maintainable RESTful services following Clean Architecture, SOLID principles, and decoupled repository patterns.',
    icon: 'Server',
  },
  {
    title: 'Relational Database Mastery',
    description:
      'High-throughput schema design, query optimization, indexing strategies, and transactional integrity on PostgreSQL, MySQL, and SQL Server.',
    icon: 'Database',
  },
  {
    title: 'Modern Reactive Frontends',
    description:
      'Crafting intuitive, responsive enterprise dashboards and operational interfaces utilizing Vue.js, TypeScript, and state management.',
    icon: 'Layout',
  },
  {
    title: 'DevOps & Linux Deployment',
    description:
      'Deploying and maintaining production workloads on Linux VPS, configuring Nginx reverse proxies, Supervisor processes, and Docker containers.',
    icon: 'Cpu',
  },
]

export const skillsData: SkillItem[] = [
  // Backend
  { name: 'Laravel', category: 'backend', highlight: true, description: 'Enterprise APIs, Queues, Eloquent' },
  { name: 'Golang', category: 'backend', highlight: true, description: 'High-concurrency microservices' },
  { name: 'Spring Boot', category: 'backend', highlight: true, description: 'Java/Kotlin enterprise services' },
  { name: 'Ruby on Rails', category: 'backend', description: 'Rapid web application development' },
  { name: 'RESTful API Design', category: 'backend', highlight: true, description: 'Standardized envelopes & Swagger' },
  { name: 'JWT & OAuth2 SSO', category: 'backend', highlight: true, description: 'Azure SSO & token auth' },

  // Frontend
  { name: 'Vue.js (Vue 3)', category: 'frontend', highlight: true, description: 'Composition API & Single Page Apps' },
  { name: 'TypeScript', category: 'frontend', highlight: true, description: 'Type-safe enterprise applications' },
  { name: 'JavaScript (ES6+)', category: 'frontend', highlight: true, description: 'Modern asynchronous programming' },
  { name: 'Tailwind CSS & CSS3', category: 'frontend', description: 'Responsive, fluid utility styling' },
  { name: 'HTML5 Semantic Web', category: 'frontend', description: 'Accessible & structured layouts' },

  // Database
  { name: 'PostgreSQL', category: 'database', highlight: true, description: 'Complex queries, JSONB, indexing' },
  { name: 'MySQL', category: 'database', highlight: true, description: 'High-performance transactional data' },
  { name: 'Microsoft SQL Server', category: 'database', description: 'Enterprise governance databases' },
  { name: 'Redis', category: 'database', description: 'In-memory caching and session stores' },

  // DevOps & Tooling
  { name: 'Linux VPS & Ubuntu', category: 'devops', highlight: true, description: 'Server administration & hardening' },
  { name: 'Docker & Compose', category: 'devops', highlight: true, description: 'Containerized reproducible services' },
  { name: 'Nginx', category: 'devops', highlight: true, description: 'Reverse proxy, SSL, and load balancing' },
  { name: 'Git & GitHub Actions', category: 'devops', highlight: true, description: 'Version control & automated CI/CD' },
  { name: 'Supervisor', category: 'devops', description: 'Worker queue daemon management' },
  { name: 'Postman & Swagger', category: 'devops', description: 'API contract documentation & testing' },

  // Architecture
  { name: 'Clean Architecture', category: 'architecture', highlight: true, description: 'Domain-driven separation of concerns' },
  { name: 'Repository & Service Pattern', category: 'architecture', highlight: true, description: 'Maintainable business logic' },
  { name: 'ERP & Workflow Automation', category: 'architecture', highlight: true, description: 'Manufacturing & corporate operations' },
]

export const experiencesData: WorkExperience[] = [
  {
    id: 'wonokoyo',
    role: 'Fullstack Developer',
    company: 'PT Wonokoyo Jaya Corporindo',
    location: 'Surabaya, Indonesia',
    period: 'Jan 2026 - Present',
    isCurrent: true,
    description:
      'Driving fullstack development and maintenance for mission-critical enterprise applications supporting RPA (Rumah Potong Ayam) operational workflows and corporate digitalization initiatives.',
    bulletPoints: [
      'Developed and maintained enterprise applications for RPA (Rumah Potong Ayam) operational processes and internal business systems.',
      'Built fullstack web applications for production workflows, inventory management, operational monitoring, and reporting systems.',
      'Developed RESTful APIs and backend services using Laravel and integrated frontend features using Vue.js.',
      'Designed and optimized relational database structures to support operational scalability and data accuracy.',
      'Contributed to the development and maintenance of further internal systems to support digital transformation initiatives.',
      'Managed application deployment, server monitoring, and continuous debugging on production environments.',
    ],
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'MySQL', 'REST API', 'Linux VPS', 'Docker'],
  },
  {
    id: 'energeek',
    role: 'Backend Developer',
    company: 'Energeek (CV. Arfa Nusantara Teknologi)',
    location: 'Surabaya, Jawa Timur, Indonesia',
    period: 'May 2023 - Jan 2026',
    isCurrent: false,
    description:
      'Engineered enterprise web and mobile backend APIs for state-owned enterprises (BUMN) and private corporations, ensuring rigorous security, database normalization, and high reliability.',
    bulletPoints: [
      'Developed and maintained RESTful APIs for enterprise web and mobile applications using Laravel.',
      'Designed relational database schemas using PostgreSQL and MySQL to handle high transactional throughput.',
      'Integrated internal and third-party enterprise services (payment, notification, SSO, and external document platforms).',
      'Collaborated closely with cross-functional frontend and mobile teams to deliver scalable features on tight deadlines.',
      'Managed Linux VPS deployments, Nginx configurations, and ongoing server maintenance.',
      'Created and maintained interactive API documentation using Swagger and Postman collections.',
      'Debugged and benchmarked backend systems to enhance response stability and minimize query latency.',
    ],
    technologies: ['Laravel', 'PostgreSQL', 'MySQL', 'Linux VPS', 'Nginx', 'Swagger', 'Postman'],
  },
  {
    id: 'investree',
    role: 'Backend Developer',
    company: 'PT. Investree Radhika Jaya',
    location: 'Jakarta Selatan, Indonesia',
    period: 'Jun 2022 - Aug 2022',
    isCurrent: false,
    description:
      'Contributed to backend financial and corporate communication services at one of Indonesia\'s leading fintech platforms.',
    bulletPoints: [
      'Developed enterprise backend microservices utilizing Java, Kotlin, and Spring Boot.',
      'Implemented robust JWT authentication mechanisms for secure account access and session validation.',
      'Constructed REST APIs and modular backend controllers for enterprise web applications.',
      'Developed internal company news and communication portal features using Spring Boot.',
    ],
    technologies: ['Java', 'Kotlin', 'Spring Boot', 'JWT', 'REST API', 'Microservices'],
  },
  {
    id: 'yabb',
    role: 'Backend Developer',
    company: 'Yayasan Anak Bangsa Bisa (GoTo Impact Foundation)',
    location: 'Jakarta Selatan, Indonesia',
    period: 'Feb 2022 - May 2022',
    isCurrent: false,
    description:
      'Participated in intensive backend software engineering initiatives and developed restaurant management architectures.',
    bulletPoints: [
      'Developed backend features and MVC architectural patterns using Ruby on Rails.',
      'Participated in end-to-end implementation of multiple web application projects.',
      'Contributed to restaurant management system development, ordering workflows, and inventory tracking.',
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'REST API', 'Git'],
  },
  {
    id: 'behaestex',
    role: 'IT Support Engineer',
    company: 'PT. BEHAESTEX',
    location: 'Gresik, Jawa Timur, Indonesia',
    period: 'Jul 2021 - Sep 2021',
    isCurrent: false,
    description:
      'Provided tier-1 and tier-2 IT and ERP system issue resolution for textile manufacturing enterprise operations.',
    bulletPoints: [
      'Supported ERP system issue resolution through structured internal helpdesk workflows.',
      'Handled operational data issues related to procurement, inventory management, and product pricing calculations.',
      'Assisted internal business users in troubleshooting ERP-related exceptions and data integrity checks.',
    ],
    technologies: ['ERP Systems', 'Database Troubleshooting', 'Technical Support', 'Helpdesk Workflows'],
  },
]

export const projectsData: PortfolioProject[] = [
  {
    id: 'petrokimia-bagging',
    title: 'Fertilizer Bagging System',
    client: 'PT Petrokimia Gresik',
    category: 'Enterprise / ERP',
    date: 'Mar 2024',
    summary:
      'Enterprise fertilizer bagging management platform developed for operational monitoring, batch quality assurance, and real-time stock management across factory lines.',
    highlights: [
      'Real-time temperature and ambient operational parameter monitoring across bagging lines',
      'Quality control sampling reports and lab inspection sign-off workflows',
      'Inbound and outbound stock tracking system boosting inventory accuracy and operational transparency',
      'Off-spec fertilizer inventory isolation, tracking, and reclamation management',
      'Standardized RESTful API architecture built with Laravel and PostgreSQL, documented in Postman',
    ],
    technologies: ['Laravel', 'PostgreSQL', 'RESTful API', 'Postman', 'Inventory Tracking'],
    metrics: 'Production-ready system supporting high-volume daily plant operations',
  },
  {
    id: 'krakatau-eoffice',
    title: 'Enterprise E-Office Correspondence System',
    client: 'Krakatau Sarana Properti',
    category: 'Internal Workflow',
    date: 'Sep 2024 - Aug 2025',
    summary:
      'Comprehensive paperless correspondence and document management system built for corporate-wide incoming/outgoing letters, hierarchical approvals, and digital dispositions.',
    highlights: [
      'Digital disposition system dynamically routing documents through corporate organizational hierarchy',
      'Multi-level digital signature and sign-off workflows with immutable audit trails',
      'Accelerated document approval turnaround time from days to minutes through digitalization',
      'Scalable RESTful API backend engineered with Laravel and optimized PostgreSQL schemas',
      'Comprehensive security with role-based access control (RBAC) and confidential document classification',
    ],
    technologies: ['Laravel', 'PostgreSQL', 'Digital Disposition', 'RBAC', 'Document Management'],
    metrics: 'Modernized corporate-wide correspondence across multi-department units',
  },
  {
    id: 'pp-performance',
    title: 'Enterprise Performance Management System',
    client: 'PT PP (Persero) Tbk',
    category: 'Governance & Compliance',
    date: 'Nov 2023 - Feb 2024',
    summary:
      'Strategic corporate KPI and financial planning management platform for PT PP (Persero) holding and its diverse subsidiary entities.',
    highlights: [
      'Consolidated KPI scorecard management and annual target vs. realization tracking',
      'Integrated enterprise Microsoft Azure Single Sign-On (SSO) authentication for seamless corporate access',
      'Financial planning consolidation dashboards for parent holding and subsidiaries',
      'Robust backend services and REST APIs developed with Laravel and MySQL',
      'Executive dashboard reporting with automated performance scoring calculations',
    ],
    technologies: ['Laravel', 'MySQL', 'Microsoft Azure SSO', 'KPI Analytics', 'REST API'],
    metrics: 'Unified multi-subsidiary governance and corporate performance tracking',
  },
  {
    id: 'pp-gcg',
    title: 'Good Corporate Governance (GCG) Monitoring',
    client: 'PT PP Presisi Tbk',
    category: 'Governance & Compliance',
    date: 'Jul 2023 - Nov 2023',
    summary:
      'Annual governance monitoring, compliance self-assessment, and scoring evaluation platform ensuring regulatory compliance with state-owned enterprise standards.',
    highlights: [
      'Annual planning, compliance realization, and automated scoring algorithms',
      'Centralized monitoring for outstanding audit findings and corrective action plans across business units',
      'High-performance backend APIs powered by Laravel and Microsoft SQL Server',
      'Comprehensive audit logs and exportable compliance review reports for executive stakeholders',
    ],
    technologies: ['Laravel', 'Microsoft SQL Server', 'Compliance Engine', 'REST API', 'Reporting'],
    metrics: 'Strengthened corporate governance audit readiness and risk management',
  },
  {
    id: 'wonokoyo-rpa',
    title: 'RPA Operational & Production Workflows',
    client: 'PT Wonokoyo Jaya Corporindo',
    category: 'Enterprise / ERP',
    date: 'Jan 2026 - Present',
    summary:
      'Fullstack operational monitoring and manufacturing execution system for Rumah Potong Ayam (RPA) production lines, inventory streams, and enterprise reporting.',
    highlights: [
      'End-to-end production workflow automation from raw intake to cold storage distribution',
      'Real-time operational monitoring dashboards built with Vue.js single page architecture',
      'Optimized transactional backend APIs engineered with Laravel, PostgreSQL, and MySQL',
      'Live inventory balance tracking, yields calculations, and operational variance reporting',
    ],
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'MySQL', 'Realtime Workflows', 'Fullstack'],
    metrics: 'Active production system driving daily manufacturing efficiency',
  },
]

export const educationData: EducationItem[] = [
  {
    institution: 'Semen Indonesia International University (UISI)',
    degree: 'Bachelor of Information Systems (S.Kom)',
    major: 'Information Systems',
    location: 'Gresik, Jawa Timur, Indonesia',
    period: 'Jul 2018 - Aug 2022',
    gpa: '3.38 / 4.00',
    description:
      'Specialized in Enterprise Systems, Database Architecture, Business Process Modeling, and Software Engineering. Actively involved in technology development projects.',
  },
]
