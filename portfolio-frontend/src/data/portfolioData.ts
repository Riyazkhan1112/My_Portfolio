// ─── Personal Information ──────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Riyazkhan Pathan',
  firstName: 'Riyazkhan',
  lastName: 'Pathan',
  role: 'Software Engineer',
  roles: [
    'Backend Developer',
    'Node.js Engineer',
    'Microservices Developer',
    'Cloud Enthusiast',
    'AI Builder',
  ],
  tagline:
    'Building scalable backend systems, APIs, microservices, cloud-native applications, and AI-powered solutions.',
  summary:
    'Results-driven Software Engineer with 2.5+ years of experience designing and delivering scalable, high-performance backend systems and microservices architectures. Proven expertise in Node.js, ASP.NET Core, REST API development, and cloud deployment on AWS and Azure. Hands-on experience with SQL and NoSQL databases, Docker, Kubernetes, and CI/CD pipelines. Proficient in integrating AI tools and LLM APIs to build intelligent, production-ready applications. Adept at working in Agile environments with cross-functional teams to deliver robust, maintainable software solutions.',
  email: 'pathanriyaz1112@gmail.com',
  phone: '+91-91728 87505',
  location: 'Pune, Maharashtra, India',
  github: 'https://github.com/riyazkhan-pathan',
  linkedin: 'https://www.linkedin.com/in/riyazkhan-pathan',
  resumeUrl: '/Riyazkhan_Pathan_Resume.pdf',
  stats: {
    experience: 2,
    projects: 10,
    apis: 50,
    technologies: 25,
  },
}

// ─── Experience ───────────────────────────────────────────────────────────────
export interface ExperienceProject {
  name: string
  tech: string[]
  highlights: string[]
}

export interface Experience {
  id: number
  company: string
  companyUrl?: string
  position: string
  duration: string
  period: string
  current: boolean
  location: string
  overview: string
  techStack: string[]
  projects: ExperienceProject[]
}

export const experience: Experience[] = [
  {
    id: 1,
    company: 'Centralogic',
    position: 'Software Engineer',
    duration: 'Jan 2024 – Present',
    period: '1.5 yrs',
    current: true,
    location: 'Pune, India',
    overview:
      'Working as a Backend Developer and Software Engineer, designing, developing, and maintaining scalable enterprise applications. Responsible for backend architecture, REST API development, database design, third-party integrations, performance optimization, and production support.',
    techStack: ['Node.js', 'ASP.NET Core', 'SQL Server', 'PostgreSQL', 'AWS', 'Microservices', 'Docker'],
    projects: [
      {
        name: 'VFS Global — Multi-Country eVisa Platform',
        tech: ['ASP.NET Core', 'Node.js', 'Moleculer', 'Express.js', 'SQL Server', 'PostgreSQL', 'AWS', 'Message Queues'],
        highlights: [
          'Architected a centralized single codebase supporting 10+ country visa workflows with configurable business logic, reducing code duplication by 40%',
          'Developed and maintained scalable backend microservices processing thousands of daily visa transactions',
          'Built secure B2B REST APIs and government integrations for visa submission, status tracking, and document verification',
          'Designed message queue-based event-driven workflows for async operations — notifications, document processing, status sync',
          'Implemented a ledger and transaction management system for payment reconciliation and financial reporting',
          'Deployed and maintained services on AWS ensuring 99.9% uptime with centralized logging and monitoring',
        ],
      },
      {
        name: 'Centra Job — Recruitment Platform',
        tech: ['ASP.NET Core', 'Cosmos DB', 'Elasticsearch', 'Azure'],
        highlights: [
          'Engineered a full-stack recruitment platform connecting students, universities, and employers',
          'Developed ASP.NET Core APIs for job posting, candidate management, application tracking, and employer onboarding',
          'Integrated Elasticsearch for advanced candidate and job search, reducing search response time by 60%',
          'Built scalable backend using Cosmos DB and Azure cloud services',
        ],
      },
    ],
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────
export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'Moleculer', 'ASP.NET Core', 'REST APIs', 'GraphQL', 'gRPC', 'WebSockets', 'Microservices'],
  },
  {
    name: 'Databases',
    skills: ['SQL Server', 'PostgreSQL', 'MongoDB', 'MySQL', 'Cosmos DB', 'Elasticsearch', 'Redis'],
  },
  {
    name: 'Cloud',
    skills: ['AWS', 'EC2', 'S3', 'Lambda', 'CloudWatch', 'Microsoft Azure'],
  },
  {
    name: 'DevOps',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Linux'],
  },
  {
    name: 'AI & LLMs',
    skills: ['OpenAI API', 'GPT-4', 'Claude', 'MCP Servers', 'Prompt Engineering', 'RAG', 'AI Agents'],
  },
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'C#', 'C++'],
  },
  {
    name: 'Tools',
    skills: ['Git', 'Postman', 'JIRA', 'Sourcetree', 'MobaXterm', 'Apidog'],
  },
]

// ─── Featured Project ─────────────────────────────────────────────────────────
export const featuredProject = {
  title: 'VFS Global — Multi-Country eVisa Platform',
  category: 'Enterprise Backend System',
  company: 'Centralogic · Client: VFS Global',
  duration: '2024 – Present',
  overview:
    'A centralized, high-performance eVisa processing platform supporting visa workflows for 10+ countries simultaneously. The system handles thousands of daily transactions, enforces complex country-specific business rules, and integrates with government APIs across multiple regions — all from a single, maintainable codebase.',
  problem:
    'VFS Global needed a unified backend system capable of processing visa applications for 10+ countries, each with different validation requirements, business rules, and government API integrations. Maintaining separate codebases per country was unsustainable and error-prone.',
  solution:
    'Architected a configurable microservices backend with pluggable, country-specific business logic modules. A single codebase drives all workflows via configuration, with event-driven architecture using message queues for high-throughput async processing and a robust ledger system for financial operations.',
  techStack: [
    'Node.js', 'Moleculer', 'ASP.NET Core', 'Express.js',
    'PostgreSQL', 'SQL Server', 'AWS', 'Message Queues', 'Docker',
  ],
  metrics: [
    { value: '40%', label: 'Code Duplication Reduced' },
    { value: '10+', label: 'Countries Supported' },
    { value: '99.9%', label: 'Uptime Achieved' },
    { value: '1000s', label: 'Daily Transactions' },
  ],
  contributions: [
    'Designed the multi-country configurable architecture and module system',
    'Built secure B2B REST APIs and government integration layer',
    'Implemented message queue-based event-driven workflows',
    'Developed ledger & transaction management for payment reconciliation',
    'Optimized complex SQL Server & PostgreSQL queries and stored procedures',
    'Set up centralized logging, monitoring, and alerting on AWS',
    'Led application lifecycle management — tracking, transitions, audit history',
  ],
  architecture: ['Microservices', 'Event-Driven', 'REST APIs', 'Message Queues', 'Cloud-Native', 'Distributed Systems'],
}

// ─── AI Journey ───────────────────────────────────────────────────────────────
export interface AIProject {
  title: string
  description: string
  tags: string[]
  status: 'Production' | 'Completed' | 'Exploring' | 'Learning' | 'Active' | 'Daily Use'
}

export const aiJourney: AIProject[] = [
  {
    title: 'StyleMate — AI Outfit Recommender',
    description:
      'Built an AI-powered outfit recommendation engine using OpenAI GPT-4. Generates personalized outfit suggestions based on wardrobe inventory, user preferences, and occasion type.',
    tags: ['GPT-4', 'Express.js', 'Node.js', 'REST API'],
    status: 'Completed',
  },
  {
    title: 'OpenAI API Integration',
    description:
      'Designing and integrating OpenAI GPT-4 APIs into production-ready backend systems for intelligent automation, content generation, and workflow enhancement.',
    tags: ['OpenAI API', 'GPT-4', 'Node.js', 'TypeScript'],
    status: 'Active',
  },
  {
    title: 'MCP Server Development',
    description:
      'Building Model Context Protocol (MCP) servers to enable AI agents to interact with external tools, APIs, and data sources in a structured, composable way.',
    tags: ['MCP', 'AI Agents', 'TypeScript', 'Tool Use'],
    status: 'Exploring',
  },
  {
    title: 'RAG Systems',
    description:
      'Experimenting with Retrieval-Augmented Generation pipelines for intelligent document search and context-aware question answering using vector databases.',
    tags: ['RAG', 'LangChain', 'Vector DB', 'Embeddings'],
    status: 'Learning',
  },
  {
    title: 'Prompt Engineering',
    description:
      'Advanced prompt engineering techniques for production AI applications — system prompts, chain-of-thought, few-shot learning, and structured output formats.',
    tags: ['GPT-4', 'Claude', 'Anthropic', 'Structured Outputs'],
    status: 'Active',
  },
  {
    title: 'AI-Assisted Development',
    description:
      'Leveraging GitHub Copilot, Cursor, and Claude daily to accelerate feature delivery, automate repetitive tasks, and improve code quality at scale.',
    tags: ['GitHub Copilot', 'Cursor', 'Claude', 'Productivity'],
    status: 'Daily Use',
  },
]

// ─── GitHub Stats (Placeholder) ───────────────────────────────────────────────
export const githubStats = {
  username: 'riyazkhan-pathan',
  profileUrl: 'https://github.com/riyazkhan-pathan',
  repos: [
    {
      name: 'stylemate-api',
      description: 'AI-powered outfit recommendation REST API using OpenAI GPT-4',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 0,
      forks: 0,
      url: 'https://github.com/riyazkhan-pathan/stylemate-api',
    },
    {
      name: 'microservices-boilerplate',
      description: 'Production-ready Node.js microservices boilerplate with Moleculer, JWT auth, and Docker',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: 0,
      forks: 0,
      url: 'https://github.com/riyazkhan-pathan/microservices-boilerplate',
    },
    {
      name: 'node-api-starter',
      description: 'Express.js REST API starter with MongoDB, authentication, validation, and Winston logging',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: 0,
      forks: 0,
      url: 'https://github.com/riyazkhan-pathan',
    },
  ],
  topLanguages: [
    { name: 'TypeScript', percent: 45, color: '#3178c6' },
    { name: 'JavaScript', percent: 30, color: '#f1e05a' },
    { name: 'C#', percent: 20, color: '#178600' },
    { name: 'Other', percent: 5, color: '#555' },
  ],
}

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    issuer: 'Amazon Web Services',
    validity: 'Mar 2026 – Mar 2029',
    badge: 'AWS',
    color: '#FF9900',
  },
]

// ─── Education ────────────────────────────────────────────────────────────────
export const education = {
  degree: 'Bachelor of Engineering (B.E.) — Computer Engineering',
  institution: 'Dr. D Y Patil College of Engineering, Pune',
  university: 'Savitribai Phule Pune University',
  duration: '2021 – 2024',
}
