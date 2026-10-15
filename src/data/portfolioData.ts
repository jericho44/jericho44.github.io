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
  name: 'Rico Wahyu Yudana Putra',
  nickname: 'Rico',
  title: 'Fullstack Engineer',
  tagline: 'Backend & Fullstack Developer specializing in Laravel, Golang, and Vue.js',
  summary:
    'Fullstack Engineer based in Surabaya with 3+ years of experience building enterprise web and backend services. Primarily working with Laravel, Golang, and Spring Boot for backend APIs, paired with Vue.js for user interfaces. Experienced with PostgreSQL, MySQL, Linux VPS maintenance, and Docker.',
  location: 'Surabaya, Indonesia',
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
    label: 'Experience',
    sublabel: 'Enterprise Web & Backend APIs',
  },
  {
    value: '5+ Systems',
    label: 'Delivered',
    sublabel: 'Manufacturing, ERP & Governance',
  },
  {
    value: 'Surabaya',
    label: 'Location',
    sublabel: 'Open for Remote / Hybrid / On-site',
  },
  {
    value: 'Laravel & Go',
    label: 'Primary Stacks',
    sublabel: 'With Vue 3 & PostgreSQL',
  },
]

export const pillarsData: CorePillar[] = [
  {
    title: 'Backend & API Engineering',
    description:
      'Building robust REST APIs and service layers using Laravel, Go, and Spring Boot with structured validation, authentication, and error handling.',
    icon: 'Server',
  },
  {
    title: 'Database Architecture',
    description:
      'Designing relational schemas, optimizing query performance, managing migrations, and configuring indexing in PostgreSQL, MySQL, and SQL Server.',
    icon: 'Database',
  },
  {
    title: 'Frontend Development',
    description:
      'Developing responsive internal web applications and dashboards using Vue.js (Vue 3), TypeScript, and modern CSS.',
    icon: 'Layout',
  },
  {
    title: 'Server & Deployment',
    description:
      'Deploying applications to Linux VPS environments (Ubuntu), configuring Nginx reverse proxy, Supervisor background workers, and Docker containers.',
    icon: 'Cpu',
  },
]

export const skillsData: SkillItem[] = [
  // Backend
  { name: 'Laravel', category: 'backend', highlight: true, description: 'Eloquent ORM, Queues, REST APIs, Service Layer' },
  { name: 'Golang', category: 'backend', highlight: true, description: 'REST APIs, Fiber, Goroutines' },
  { name: 'Spring Boot', category: 'backend', highlight: true, description: 'Java & Kotlin backend services, JWT Auth' },
  { name: 'Ruby on Rails', category: 'backend', description: 'MVC web development, Active Record' },
  { name: 'RESTful API Design', category: 'backend', highlight: true, description: 'Clean request validation, OpenAPI / Swagger specs' },
  { name: 'Authentication & SSO', category: 'backend', highlight: true, description: 'JWT tokens, OAuth2, Microsoft Azure SSO' },

  // Frontend
  { name: 'Vue.js (Vue 3)', category: 'frontend', highlight: true, description: 'Composition API, Pinia, Single Page Applications' },
  { name: 'TypeScript', category: 'frontend', highlight: true, description: 'Type-safe interfaces, refactoring, code quality' },
  { name: 'JavaScript (ES6+)', category: 'frontend', highlight: true, description: 'Async/await, DOM APIs, modern standards' },
  { name: 'HTML5 & CSS3', category: 'frontend', description: 'Responsive layouts, Flexbox, Grid, Tailwind CSS' },

  // Database
  { name: 'PostgreSQL', category: 'database', highlight: true, description: 'Relational modeling, indexing, JSONB queries' },
  { name: 'MySQL', category: 'database', highlight: true, description: 'Transaction safety, query tuning, migrations' },
  { name: 'Microsoft SQL Server', category: 'database', description: 'Enterprise databases, stored procedures' },
  { name: 'Redis', category: 'database', description: 'Caching layers, session management' },

  // DevOps & Tools
  { name: 'Linux VPS (Ubuntu)', category: 'devops', highlight: true, description: 'Server configuration, user security, CLI tools' },
  { name: 'Docker & Compose', category: 'devops', highlight: true, description: 'Local container environments, Dockerfiles' },
  { name: 'Nginx', category: 'devops', highlight: true, description: 'Reverse proxy, SSL setup, virtual hosts' },
  { name: 'Git & GitHub Actions', category: 'devops', highlight: true, description: 'Version control, automated CI/CD workflows' },
  { name: 'Supervisor', category: 'devops', description: 'Process monitoring, queue worker daemons' },
  { name: 'Postman & Swagger', category: 'devops', description: 'API contract documentation, integration testing' },

  // Architecture & Engineering Practices
  { name: 'Clean Architecture', category: 'architecture', highlight: true, description: 'Separation of concerns, domain isolation' },
  { name: 'Repository & Service Pattern', category: 'architecture', highlight: true, description: 'Maintainable business logic, testability' },
  { name: 'ERP & Internal Tooling', category: 'architecture', highlight: true, description: 'Manufacturing, inventory tracking, approval workflows' },
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
      'Working on internal enterprise applications supporting RPA (Rumah Potong Ayam) production workflows, inventory systems, and operational monitoring.',
    bulletPoints: [
      'Develop and maintain internal web applications for chicken processing plant (RPA) operational workflows.',
      'Build fullstack features for inventory tracking, production workflows, and operational reports.',
      'Develop RESTful APIs using Laravel and integrate user interface components with Vue.js.',
      'Design and optimize relational database schemas to handle operational data reliably.',
      'Manage application deployments, server monitoring, and troubleshooting in production.',
    ],
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'MySQL', 'REST API', 'Linux VPS', 'Docker'],
  },
  {
    id: 'energeek',
    role: 'Backend Developer',
    company: 'Energeek (CV. Arfa Nusantara Teknologi)',
    location: 'Surabaya, Indonesia',
    period: 'May 2023 - Jan 2026',
    isCurrent: false,
    description:
      'Developed backend APIs and databases for various enterprise clients, state-owned enterprises (BUMN), and web/mobile projects.',
    bulletPoints: [
      'Developed and maintained RESTful APIs for web and mobile client applications using Laravel.',
      'Designed database schemas using PostgreSQL and MySQL for high-volume transactions.',
      'Integrated internal services and third-party APIs (payment gateways, SSO, notifications).',
      'Collaborated with frontend and mobile developers to define API contracts and specs.',
      'Configured and maintained Linux VPS servers, Nginx web servers, and deployment scripts.',
      'Documented endpoints using Swagger and Postman collections.',
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
      'Contributed to backend development using Java and Spring Boot for fintech and internal corporate services.',
    bulletPoints: [
      'Built backend modules and services using Java, Kotlin, and Spring Boot framework.',
      'Implemented JWT token authentication for user authentication and authorization.',
      'Developed REST APIs for internal company portals and service integrations.',
    ],
    technologies: ['Java', 'Kotlin', 'Spring Boot', 'JWT', 'REST API'],
  },
  {
    id: 'yabb',
    role: 'Backend Developer',
    company: 'Yayasan Anak Bangsa Bisa',
    location: 'Jakarta Selatan, Indonesia',
    period: 'Feb 2022 - May 2022',
    isCurrent: false,
    description:
      'Participated in software engineering program, building backend systems and restaurant management applications.',
    bulletPoints: [
      'Implemented backend features using Ruby on Rails following MVC conventions.',
      'Collaborated on web application projects including restaurant ordering and inventory features.',
      'Worked with relational databases and RESTful routing standards.',
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'REST API', 'Git'],
  },
  {
    id: 'behaestex',
    role: 'IT Support Engineer',
    company: 'PT. BEHAESTEX',
    location: 'Gresik, Indonesia',
    period: 'Jul 2021 - Sep 2021',
    isCurrent: false,
    description:
      'Provided technical and ERP system support for textile manufacturing operations.',
    bulletPoints: [
      'Assisted internal users in troubleshooting ERP operations, procurement, and inventory data.',
      'Resolved helpdesk tickets regarding pricing records, master data, and system access.',
    ],
    technologies: ['ERP Systems', 'Database Support', 'Helpdesk Workflows'],
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
      'An enterprise operational system built to manage and monitor fertilizer bagging plant lines, batch quality logs, and warehouse inventory movements.',
    highlights: [
      'Line operational monitoring including temperature logs, sampling inspection records, and shipping batches',
      'Inbound and outbound inventory tracking to minimize stock discrepancies and packaging errors',
      'Off-spec product quarantine and reclamation workflow',
      'REST APIs engineered with Laravel, connected to PostgreSQL database, tested and documented in Postman',
    ],
    technologies: ['Laravel', 'PostgreSQL', 'REST API', 'Postman'],
    metrics: 'Active plant operational system for daily bagging and inventory logistics',
  },
  {
    id: 'krakatau-eoffice',
    title: 'E-Office Correspondence System',
    client: 'Krakatau Sarana Properti',
    category: 'Internal Workflow',
    date: 'Sep 2024 - Aug 2025',
    summary:
      'Digital correspondence application to replace paper-based letter routing, incoming/outgoing memos, and organizational dispositions.',
    highlights: [
      'Hierarchical digital disposition routing following the corporate structure',
      'Multi-level document review and approval workflows with digital audit trails',
      'Role-based access control (RBAC) separating departmental and confidential letters',
      'REST API backend developed with Laravel and PostgreSQL schemas',
    ],
    technologies: ['Laravel', 'PostgreSQL', 'RBAC', 'Document Management'],
    metrics: 'Replaced manual paper memos with an auditable digital disposition flow',
  },
  {
    id: 'pp-performance',
    title: 'Corporate Performance Management System',
    client: 'PT PP (Persero)',
    category: 'Governance & Compliance',
    date: 'Nov 2023 - Feb 2024',
    summary:
      'KPI scorecard and financial planning management application used by holding management and subsidiary business units.',
    highlights: [
      'Consolidated KPI target setting and realization tracking across business divisions',
      'Integrated enterprise Microsoft Azure Single Sign-On (SSO) for corporate account access',
      'Financial planning entry and summary reporting modules',
      'Backend services developed with Laravel and MySQL',
    ],
    technologies: ['Laravel', 'MySQL', 'Microsoft Azure SSO', 'REST API'],
    metrics: 'Centralized KPI tracking for holding company and subsidiaries',
  },
  {
    id: 'pp-gcg',
    title: 'Good Corporate Governance (GCG) System',
    client: 'PT PP Presisi',
    category: 'Governance & Compliance',
    date: 'Jul 2023 - Nov 2023',
    summary:
      'Monitoring and evaluation system for Good Corporate Governance annual assessments, target realization, and reporting.',
    highlights: [
      'Annual GCG parameter planning and realization entry modules',
      'Issue and audit tracking dashboard across organizational units',
      'Backend APIs developed with Laravel and Microsoft SQL Server',
    ],
    technologies: ['Laravel', 'Microsoft SQL Server', 'REST API'],
    metrics: 'Streamlined annual GCG compliance reporting and documentation',
  },
  {
    id: 'wonokoyo-rpa',
    title: 'RPA Operational & Production Workflows',
    client: 'PT Wonokoyo Jaya Corporindo',
    category: 'Enterprise / ERP',
    date: 'Jan 2026 - Present',
    summary:
      'Internal application suite to manage chicken slaughterhouse (RPA) operational workflows, live production monitoring, and inventory tracking.',
    highlights: [
      'Production line tracking and operational workflow coordination',
      'Interactive frontend dashboards built with Vue.js single page application architecture',
      'Reliable transactional backend APIs built with Laravel, PostgreSQL, and MySQL',
      'Daily yield and inventory balance reporting',
    ],
    technologies: ['Laravel', 'Vue.js', 'PostgreSQL', 'MySQL', 'REST API'],
    metrics: 'In active daily use supporting plant production operations',
  },
]

export const educationData: EducationItem[] = [
  {
    institution: 'Semen Indonesia International University (UISI)',
    degree: 'Bachelor of Information Systems (S.Kom)',
    major: 'Information Systems',
    location: 'Gresik, Indonesia',
    period: '2018 - 2022',
    gpa: '3.38 / 4.00',
    description:
      'Coursework focused on Enterprise Systems, Relational Databases, Software Engineering, and Information Systems Architecture.',
  },
]
