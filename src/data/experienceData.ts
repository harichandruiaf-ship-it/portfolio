export interface ExperienceItem {
  id: string
  company: string
  client?: string
  role: string
  period: string
  location: string
  current: boolean
  description: string
  highlights: string[]
  architectureDecisions: string[]
  technologies: string[]
  metrics: { label: string; value: string }[]
}

export const experienceData: ExperienceItem[] = [
  {
    id: 'epam-shell',
    company: 'EPAM Systems',
    client: 'Shell (Global Energy)',
    role: 'Senior Full Stack Engineer',
    period: 'Jul 2025 - Present',
    location: 'Chennai / Hybrid',
    current: true,
    description:
      'Core full-stack engineer developing Shell’s mission-critical Sub-Surface Exploration & Wells application suite (TWR). Driving frontend modernization, enterprise microservice architecture, and cloud automation.',
    highlights: [
      'Spearheaded the zero-downtime migration of a massive legacy Vue 2 application into modern React 18 with TypeScript and modular state architecture.',
      'Developed high-throughput backend microservices on .NET 8 / .NET Core hosted on AWS and Azure cloud environments.',
      'Created custom WebGL geological data visualization charts for seismic layers and subsurface stratigraphy maps.',
      'Automated Dockerized CI/CD test and build pipelines, shrinking deployment friction from multiple weeks to under 48 hours.'
    ],
    architectureDecisions: [
      'Adopted the Strangler Fig pattern for incremental component replacement without halting feature deliveries.',
      'Introduced domain micro-frontends with shared design tokens to unify 4 separate internal geoscience tooling portals.',
      'Constructed memory-efficient client-side caching for dense borehole log telemetry arrays.'
    ],
    technologies: ['React', 'TypeScript', '.NET Core', 'C#', 'AWS', 'Azure', 'Docker', 'CI/CD', 'Microservices', 'SQL Server'],
    metrics: [
      { label: 'Enterprise Users', value: '100+' },
      { label: 'System Uptime', value: '99.9%' },
      { label: 'Render Optimization', value: '+30%' },
      { label: 'Release Velocity', value: '4x' }
    ]
  },
  {
    id: 'cognizant-cargill',
    company: 'Cognizant Technology Solutions',
    client: 'Cargill (Global Agricultural Supply Chain)',
    role: 'Full Stack Developer',
    period: 'Oct 2022 - Jul 2025',
    location: 'Chennai, India',
    current: false,
    description:
      'Engineered the Grain Centre System (GCS), a distributed microservices warehouse management platform coordinating storage, intake quality grading, and freight logistics across 23 grain storage plants throughout Australia.',
    highlights: [
      'Designed and deployed Clean Architecture microservices utilizing CQRS pattern with MediatR and NATS message broker.',
      'Integrated the platform with 8 critical external logistics and enterprise ERP systems (rail, truck freight, maritime export ports).',
      'Engineered complex SQL Server stored procedures, indexing strategies, and read-replica routing for peak harvest periods handling over 5,000 MT daily intake.',
      'Collaborated in a high-velocity core engineering squad of 5 developers following rigorous agile sprint cadences.'
    ],
    architectureDecisions: [
      'Employed CQRS to decouple heavy analytical report queries from critical millisecond-level grain intake transaction pipelines.',
      'Implemented Domain-Driven Design (DDD) aggregates ensuring silo capacity invariants could never be violated by race conditions.',
      'Selected NATS for lightweight publish/subscribe event distribution between disconnected storage facilities and central cloud servers.'
    ],
    technologies: ['.NET', 'C#', 'React', 'Microservices', 'CQRS', 'DDD', 'NATS', 'MediatR', 'SQL Server', 'REST APIs'],
    metrics: [
      { label: 'Storage Plants', value: '23' },
      { label: 'External Integrations', value: '8' },
      { label: 'Daily Shipments', value: '5,000+ MT' },
      { label: 'Core Team', value: '5' }
    ]
  }
]

export interface SkillCategory {
  title: string
  description: string
  skills: {
    name: string
    level: number
    experienceYears: string
    icon: string
    featured: boolean
    tags: string[]
  }[]
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Backend & Microservices',
    description: 'Enterprise server-side architecture, distributed event streaming, and domain modeling',
    skills: [
      { name: '.NET Core / C#', level: 95, experienceYears: '4.5+ yrs', icon: 'Cpu', featured: true, tags: ['ASP.NET Core', 'C# 12', 'Web APIs'] },
      { name: 'Microservices & CQRS', level: 92, experienceYears: '4+ yrs', icon: 'Layers', featured: true, tags: ['MediatR', 'Event-Driven', 'Clean Arch'] },
      { name: 'NATS Messaging', level: 88, experienceYears: '3 yrs', icon: 'Radio', featured: true, tags: ['Pub/Sub', 'Message Queues', 'Streaming'] },
      { name: 'Domain-Driven Design (DDD)', level: 90, experienceYears: '3.5 yrs', icon: 'Compass', featured: true, tags: ['Aggregates', 'Value Objects', 'Bounded Contexts'] },
      { name: 'REST & GraphQL APIs', level: 92, experienceYears: '4.5 yrs', icon: 'Network', featured: false, tags: ['OpenAPI', 'Versioning', 'Security'] }
    ]
  },
  {
    title: 'Frontend & UI Engineering',
    description: 'Modern reactive web interfaces, 3D WebGL graphics, and performance optimization',
    skills: [
      { name: 'React 18 & Next.js', level: 94, experienceYears: '4+ yrs', icon: 'Atom', featured: true, tags: ['Hooks', 'Context', 'Server Components'] },
      { name: 'TypeScript', level: 92, experienceYears: '4+ yrs', icon: 'FileCode', featured: true, tags: ['Strict Typing', 'Generics', 'AST'] },
      { name: 'Tailwind CSS & Styling', level: 95, experienceYears: '4 yrs', icon: 'Palette', featured: true, tags: ['Modern CSS', 'Responsive', 'Design Systems'] },
      { name: 'Three.js & WebGL', level: 85, experienceYears: '2 yrs', icon: 'Box', featured: true, tags: ['3D Avatars', 'Cloth Physics', 'PBR Shaders'] },
      { name: 'Framer Motion', level: 90, experienceYears: '3 yrs', icon: 'Sparkles', featured: false, tags: ['Micro-interactions', 'Gestures', 'Layout Animations'] }
    ]
  },
  {
    title: 'Cloud, DevOps & Containers',
    description: 'Scalable cloud infrastructure, automated build pipelines, and container virtualization',
    skills: [
      { name: 'AWS Cloud Services', level: 88, experienceYears: '3 yrs', icon: 'Cloud', featured: true, tags: ['EC2', 'S3', 'Lambda', 'RDS'] },
      { name: 'Microsoft Azure', level: 86, experienceYears: '3 yrs', icon: 'CloudCog', featured: true, tags: ['App Services', 'Azure SQL', 'Blob Storage'] },
      { name: 'Docker & Containers', level: 90, experienceYears: '3.5 yrs', icon: 'Container', featured: true, tags: ['Multi-stage Builds', 'Docker Compose'] },
      { name: 'CI/CD Pipelines', level: 88, experienceYears: '3 yrs', icon: 'GitMerge', featured: false, tags: ['GitHub Actions', 'Azure DevOps'] }
    ]
  },
  {
    title: 'Database & Data Systems',
    description: 'Relational data modeling, high-throughput query optimization, and caching strategies',
    skills: [
      { name: 'SQL Server (T-SQL)', level: 92, experienceYears: '4.5 yrs', icon: 'Database', featured: true, tags: ['Query Tuning', 'Stored Procs', 'Indexing'] },
      { name: 'Entity Framework Core & LINQ', level: 94, experienceYears: '4.5 yrs', icon: 'Binary', featured: true, tags: ['Code-First', 'Migrations', 'Compiled Queries'] },
      { name: 'NoSQL & Redis', level: 84, experienceYears: '2.5 yrs', icon: 'Server', featured: false, tags: ['Caching', 'Session Store', 'Key-Value'] }
    ]
  },
  {
    title: 'AI, LLMs & Agentic Systems',
    description: 'Autonomous cognitive agents, prompt engineering, and real-time streaming interfaces',
    skills: [
      { name: 'Claude & LLM Tooling', level: 95, experienceYears: '2 yrs', icon: 'Bot', featured: true, tags: ['Claude Certified Architect', 'Tool Calling', 'System Prompts'] },
      { name: 'AI Agents & Automation', level: 90, experienceYears: '2 yrs', icon: 'Workflow', featured: true, tags: ['Memory Augmentation', 'Agent Loops', 'Tool Schemas'] },
      { name: 'Streaming SSE & WebSockets', level: 90, experienceYears: '3 yrs', icon: 'Zap', featured: false, tags: ['Token Buffering', 'Real-Time Sync'] }
    ]
  }
]

export const certificationsData = [
  {
    title: 'Claude Certified Architect',
    issuer: 'Anthropic',
    year: '2026',
    description: 'Certified expertise in architecting cognitive LLM workflows, tool use, memory systems, and prompt engineering.',
    badge: '🏆 Top Credential'
  },
  {
    title: 'Claude Code In Action',
    issuer: 'Anthropic',
    year: '2026',
    description: 'Mastery in autonomous agentic software development, terminal tooling, and enterprise codebase acceleration.',
    badge: '🏆 Certified'
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    year: '2023',
    description: 'Cloud architectural principles, Azure core services, security, governance, and compliance.',
    badge: 'Cloud Certified'
  }
]
