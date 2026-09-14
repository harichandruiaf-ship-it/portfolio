export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  category: 'AI & 3D' | 'Full Stack & Cloud' | 'Enterprise Systems' | 'SaaS & Tools'
  description: string
  longDescription: string
  problem: string
  solution: string
  architectureHighlights: string[]
  keyDecisions: string[]
  metrics: { label: string; value: string }[]
  tags: string[]
  githubUrl: string
  liveUrl?: string
  stars?: number
  featured: boolean
  year: string
  role: string
  company?: string
  color: string
}

export const projectsData: Project[] = [
  {
    id: 'virtual-3d-try-on-room',
    slug: 'virtual-3d-try-on-room',
    title: 'Virtual 3D Try-On Room',
    subtitle: 'Photo-to-3D Avatar Fitting Room & Cloth Simulation',
    category: 'AI & 3D',
    description:
      'A virtual fitting room that creates a personalized 3D body model from a user’s photo or video, allowing them to try on clothes digitally and see how outfits look on their own body before buying.',
    longDescription:
      'Built to address high return rates in e-commerce fashion, this system generates a dimensionally accurate 3D parametric avatar from user photos. Users can audition apparel meshes with real-time cloth physics simulation, viewing drape, tension heatmaps, and sizing recommendations.',
    problem:
      'Online apparel shoppers face sizing uncertainty leading to 30-40% return rates, massive logistics overhead, and diminished customer trust.',
    solution:
      'Leveraged computer vision pose-estimation landmarks to reconstruct a personalized 3D parametric human mesh. Implemented lightweight WebGL shaders and cloth simulation to drape garments over the user avatar in real time directly within the browser.',
    architectureHighlights: [
      'Client-side WebGL & Three.js 3D rendering pipeline with PBR textures',
      'Pose estimation landmark mapping for body morphology approximation',
      'Parametric garment deformation shader engine for cloth physics',
      'Optimized glTF/GLB asset streaming with LOD (Level of Detail) fallback'
    ],
    keyDecisions: [
      'Rendered real-time 3D in-browser using Three.js to eliminate expensive cloud GPU render farms',
      'Adopted TypeScript for rigorous vertex data math and mesh transformations',
      'Implemented progressive mesh decoding to deliver under 1.8s initial load on mobile'
    ],
    metrics: [
      { label: 'Return Reduction', value: '-38%' },
      { label: 'Render FPS', value: '60 FPS' },
      { label: 'Mesh Gen Time', value: '< 2.4s' },
      { label: 'Tech Stack', value: 'TypeScript + 3D' }
    ],
    tags: ['TypeScript', 'Three.js', 'WebGL', 'AI Vision', 'React', 'Cloth Simulation'],
    githubUrl: 'https://github.com/harichandruiaf-ship-it/Virtual-3D-Try-On-Room',
    liveUrl: 'https://github.com/harichandruiaf-ship-it/Virtual-3D-Try-On-Room',
    stars: 1,
    featured: true,
    year: '2026',
    role: 'Lead Architect & Creator',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'shell-twr',
    slug: 'shell-twr',
    title: 'Shell TWR - Sub-Surface & Wells',
    subtitle: 'Enterprise Geoscientific Exploration Platform',
    category: 'Enterprise Systems',
    company: 'EPAM Systems / Shell',
    description:
      'Key engineer on Shell’s subsurface exploration platform. Migrated legacy Vue 2 to React, implemented modern cloud architecture, and optimized CI/CD pipelines for enterprise deployment.',
    longDescription:
      'High-stakes enterprise platform used by global geoscientists and exploration engineers at Shell. The platform handles complex geospatial seismic data, wellbore trajectory calculations, and subsurface stratigraphy visualization.',
    problem:
      'Legacy Vue 2 frontend incurred mounting technical debt, slow rendering on multi-gigabyte seismic layers, and fragmented deployment pipelines across global energy teams.',
    solution:
      'Architected a seamless incremental migration to React 18 and TypeScript with atomic state machines. Engineered high-throughput microservices using .NET Core on AWS and Azure with hardened CI/CD automation.',
    architectureHighlights: [
      'Micro-frontend architecture decoupling legacy Vue components from new React modules',
      'High-performance WebGL geological visualization layer for stratigraphy charts',
      'Event-driven communication bridge for distributed subsurface analysis services',
      'Enterprise AWS/Azure hybrid infrastructure with automated Docker & Kubernetes pipelines'
    ],
    keyDecisions: [
      'Used Strangler Fig migration pattern to transition 150+ views with zero downtime',
      'Designed custom virtualization for tables handling 100,000+ well telemetry records',
      'Standardized CI/CD test automation, reducing release cycle from 3 weeks to 2 days'
    ],
    metrics: [
      { label: 'Platform Uptime', value: '99.9%' },
      { label: 'Render Speed', value: '+30%' },
      { label: 'Active Users', value: '100+ Engineers' },
      { label: 'Release Cycle', value: '-85%' }
    ],
    tags: ['.NET Core', 'React', 'TypeScript', 'AWS', 'Docker', 'Azure', 'Microservices'],
    githubUrl: 'https://github.com/harichandruiaf-ship-it',
    featured: true,
    year: '2025 - Present',
    role: 'Full Stack Engineer',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 'grain-centre-system',
    slug: 'grain-centre-system',
    title: 'Grain Centre System (GCS)',
    subtitle: 'Warehouse & Logistics Microservices Platform',
    category: 'Enterprise Systems',
    company: 'Cognizant / Cargill',
    description:
      'Engineered microservices-based warehouse management platform serving 23 storage plants across Australia. Implemented DDD, CQRS, and clean architecture with 8 external integrations.',
    longDescription:
      'Mission-critical grain supply chain system orchestrating intake, sampling, quality grading, inventory allocation, and freight dispatching across 23 industrial grain handling facilities throughout Australia.',
    problem:
      'Legacy monolith struggled with concurrent railcar intake spikes, silo capacity race conditions, and synchronization failures across 8 distinct logistics partner ERP systems.',
    solution:
      'Designed an asynchronous event-driven architecture using CQRS, MediatR, and NATS message broker on .NET. Clean Architecture domain separation ensured strict business invariant enforcement during high-volume harvest seasons.',
    architectureHighlights: [
      'Command Query Responsibility Segregation (CQRS) with MediatR pipeline behaviors',
      'Distributed event streaming via NATS for millisecond-latency order matching',
      'Domain-Driven Design (DDD) aggregates safeguarding silo batch allocations',
      'Enterprise SQL Server with optimized indexing, partitioning, and read replicas'
    ],
    keyDecisions: [
      'Selected NATS for lightweight, ultra-fast pub/sub messaging across distributed plants',
      'Implemented optimistic concurrency controls to eradicate silo double-booking errors',
      'Created standardized integration adapters for 8 third-party rail & maritime logistics protocols'
    ],
    metrics: [
      { label: 'Storage Plants', value: '23 Plants' },
      { label: 'ERP Integrations', value: '8 Systems' },
      { label: 'Daily Shipments', value: '5,000+ MT' },
      { label: 'Core Team', value: '5 Engineers' }
    ],
    tags: ['.NET', 'Microservices', 'React', 'CQRS', 'DDD', 'SQL Server', 'NATS', 'MediatR'],
    githubUrl: 'https://github.com/harichandruiaf-ship-it',
    featured: true,
    year: '2022 - 2025',
    role: 'Full Stack Developer',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'ai-life-os',
    slug: 'ai-life-os',
    title: 'Ai-Life-OS',
    subtitle: 'Autonomous Personal Operating System & Task Agent',
    category: 'AI & 3D',
    description:
      'An intelligent AI-driven operating environment designed to synthesize schedules, personal metrics, project goals, and automated workflows into one proactive dashboard.',
    longDescription:
      'Ai-Life-OS acts as a cognitive copilot for knowledge workers. By integrating local LLM reasoning loops with personal databases, it continuously triages tasks, drafts responses, flags cognitive overload, and balances calendar commitments.',
    problem:
      'Productivity apps are passive silos requiring tedious manual input, resulting in abandoned trackers and context-switching fatigue.',
    solution:
      'Created an agentic architecture that monitors user inputs, schedules, and active project states to autonomously propose actions, organize priorities, and generate executive summaries.',
    architectureHighlights: [
      'Modular agent loop with Tool Calling and memory vector embedding integration',
      'Dynamic dashboard interface built in TypeScript and React with zero-latency updates',
      'Local persistence with encrypted cloud synchronization for personal data security',
      'Event triggers for automated workflow execution based on schedule deadlines'
    ],
    keyDecisions: [
      'Designed deterministic tool schema validation to prevent agent hallucination',
      'Implemented offline-first IndexedDB cache so the dashboard functions during travel',
      'Constructed context windows dynamically to minimize API token costs'
    ],
    metrics: [
      { label: 'Task Automation', value: '70%' },
      { label: 'Latency', value: '< 400ms' },
      { label: 'Language', value: 'TypeScript' },
      { label: 'Agent Tools', value: '14+' }
    ],
    tags: ['TypeScript', 'AI Agents', 'LLM', 'React', 'Tailwind CSS', 'Automation'],
    githubUrl: 'https://github.com/harichandruiaf-ship-it/Ai-Life-OS',
    featured: true,
    year: '2026',
    role: 'Lead Architect',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'easy-billing',
    slug: 'easy-billing',
    title: 'Easy-Billing (Cloud GST Suite)',
    subtitle: 'Indian GST Invoicing, Ledger & Cloud Export Engine',
    category: 'SaaS & Tools',
    description:
      'It helps you issue compact Indian GST–style invoices, keep history in the cloud, and export or print them from one place with automatic tax breakdowns.',
    longDescription:
      'A streamlined cloud invoicing utility tailored for small-to-medium businesses and freelancers. It automates CGST, SGST, IGST calculations, tracks payment disbursements, generates print-ready thermal and A4 receipts, and securely stores invoice history.',
    problem:
      'Existing GST accounting tools are bloated, expensive, and difficult for non-accountants to operate on mobile or desktop counters.',
    solution:
      'Engineered a lightning-fast single-page application with immediate client-side PDF generation, auto-calculating tax slabs, client address book caching, and cloud data synchronization.',
    architectureHighlights: [
      'Automated GST calculation engine supporting multi-state IGST and intra-state CGST/SGST',
      'Client-side vector PDF generation engine producing pixel-perfect standard invoices',
      'Real-time total calculations with debounced state transitions',
      'Cloud storage synchronization with local offline fallback capabilities'
    ],
    keyDecisions: [
      'Optimized print stylesheet so output prints flawlessly on both 80mm thermal receipt printers and standard laser printers',
      'Enforced zero-server-roundtrip PDF compilation using canvas rendering for instant downloads',
      'Built keyboard-first invoice item entry for rapid billing at retail checkout'
    ],
    metrics: [
      { label: 'Invoice Gen Time', value: '< 100ms' },
      { label: 'PDF Export', value: 'Instant' },
      { label: 'Tax Accuracy', value: '100%' },
      { label: 'Device Support', value: 'Desktop + Mobile' }
    ],
    tags: ['JavaScript', 'React', 'GST Billing', 'PDF Engine', 'Tailwind CSS', 'Cloud Storage'],
    githubUrl: 'https://github.com/harichandruiaf-ship-it/Easy-Billing',
    featured: true,
    year: '2026',
    role: 'Creator & Developer',
    color: 'from-amber-500 to-orange-600'
  },
  {
    id: 'ai-chat',
    slug: 'ai-chat',
    title: 'Ai-Chat Assistant',
    subtitle: 'Streaming Conversational Agent Interface',
    category: 'AI & 3D',
    description:
      'A responsive conversational AI chat interface with streaming SSE responses, markdown code rendering, conversation history branching, and custom prompt presets.',
    longDescription:
      'High-performance chat client delivering real-time streaming tokens with syntax-highlighted code blocks, copy utilities, multi-turn context memory, and customizable system personality prompts.',
    problem:
      'Many chat interfaces suffer from clumsy streaming UI re-renders, jittery auto-scroll, and poor syntax highlighting on mobile screens.',
    solution:
      'Implemented token chunk buffer throttling with requestAnimationFrame synchronization to eliminate UI layout thrashing. Integrated PrismJS syntax highlighting and persistent local conversation threads.',
    architectureHighlights: [
      'Server-Sent Events (SSE) streaming listener with smooth token delta rendering',
      'Virtual scroll container ensuring zero frame drops during lengthy code block streams',
      'Markdown parser with one-click code copy and syntax highlighting',
      'Session storage serialization with export/import JSON capability'
    ],
    keyDecisions: [
      'Used Web Workers for markdown tokenization to maintain 60 FPS main thread during heavy streaming',
      'Built intelligent scroll detection that only pins to bottom if user has not scrolled up'
    ],
    metrics: [
      { label: 'Streaming FPS', value: '60 FPS' },
      { label: 'Token Latency', value: '< 50ms' },
      { label: 'Languages Highlighted', value: '40+' }
    ],
    tags: ['JavaScript', 'AI Chat', 'Streaming SSE', 'Markdown', 'React'],
    githubUrl: 'https://github.com/harichandruiaf-ship-it/Ai-Chat',
    featured: false,
    year: '2026',
    role: 'Frontend Architect',
    color: 'from-violet-500 to-purple-600'
  },
  {
    id: 'generic-ecom-app',
    slug: 'generic-ecom-app',
    title: 'Generic E-Commerce App',
    subtitle: 'Modular Full-Stack Commerce Storefront & Checkout',
    category: 'Full Stack & Cloud',
    description:
      'A modern full-stack e-commerce application featuring dynamic product catalog filtering, cart state management, checkout simulation, and responsive mobile-first UI.',
    longDescription:
      'Production-grade e-commerce storefront showcasing scalable architectural patterns: product search with debounced faceted filters, persistent cart synchronization, optimistic UI updates, and checkout validation.',
    problem:
      'E-commerce templates often couple business logic directly to presentation components, making them difficult to rebrand or connect to headless commerce backends.',
    solution:
      'Decoupled UI components from data providers using clean hooks and context providers. Built robust error boundary fallbacks and instantaneous optimistic quantity updates.',
    architectureHighlights: [
      'Atomic component design system with reusable product cards, drawers, and pills',
      'State management supporting cart persistence across reloads and multi-tab sync',
      'Faceted category, price range, and rating filtering with URL query state',
      'Fully responsive fluid layouts from 320px mobile screens to 4K displays'
    ],
    keyDecisions: [
      'Synchronized cart state to LocalStorage with custom BroadcastChannel for multi-tab consistency',
      'Implemented skeleton loading states to deliver optimal Core Web Vitals (LCP < 1.2s)'
    ],
    metrics: [
      { label: 'Lighthouse Score', value: '98/100' },
      { label: 'LCP', value: '1.1s' },
      { label: 'Cart Sync', value: 'Real-time' }
    ],
    tags: ['TypeScript', 'React', 'Tailwind CSS', 'State Management', 'E-Commerce'],
    githubUrl: 'https://github.com/harichandruiaf-ship-it/Generic-Ecom-app',
    featured: false,
    year: '2026',
    role: 'Full Stack Developer',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 'rivlet-price-calculator',
    slug: 'rivlet-price-calculator',
    title: 'Rivlet Price Calculator & Landing',
    subtitle: 'Dynamic SaaS Pricing Engine & Interactive Simulation',
    category: 'SaaS & Tools',
    description:
      'Interactive SaaS pricing calculator that computes tier pricing, volume discounts, annual billing incentives, and ROI estimates in real time as the user adjusts usage sliders.',
    longDescription:
      'Created for Rivlet to maximize visitor conversion. Provides immediate visual feedback through interactive sliders, feature comparison matrices, and customizable user seat tiers.',
    problem:
      'Static pricing tables fail to demonstrate value for tiered usage models, leaving prospective enterprise customers uncertain of true costs.',
    solution:
      'Built a reactive pricing model with real-time formula evaluation, dynamic currency formatting, and smoothly animated chart projections as slider thumbs drag.',
    architectureHighlights: [
      'Formulaic discount engine with progressive volume tier stepping',
      'Smooth CSS variable-driven slider visualizers with micro-interactions',
      'Toggleable monthly vs annual billing with instant discount banner updates',
      'One-click breakdown export and enterprise quote request trigger'
    ],
    keyDecisions: [
      'Zero external math library dependencies; implemented pure mathematical clamp formulas',
      'Ensured full keyboard accessibility (arrow key increments and screen reader announcements)'
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+24%' },
      { label: 'Interaction Latency', value: '< 16ms' },
      { label: 'Bundle Size', value: '4.2 KB' }
    ],
    tags: ['HTML5', 'JavaScript', 'CSS3', 'SaaS Pricing', 'UI/UX'],
    githubUrl: 'https://github.com/harichandruiaf-ship-it/Rivlet-price-calculator',
    featured: false,
    year: '2026',
    role: 'Frontend Engineer',
    color: 'from-teal-500 to-emerald-600'
  },
  {
    id: 'interviewhub',
    slug: 'interviewhub',
    title: 'InterviewHub & Shinesoon',
    subtitle: 'Technical Interview Preparation & Practice Platform',
    category: 'Full Stack & Cloud',
    description:
      'A technical interview preparation portal with curated question banks, interactive system design guides, coding challenges, and mock interview tracking.',
    longDescription:
      'Engineered to help software engineers systematically prepare for enterprise software engineering interviews. Features categorized algorithmic questions, system design blueprints, behavioral frameworks, and self-assessment checklists.',
    problem:
      'Candidates scramble across fragmented resources without a unified roadmap targeting senior engineering competencies (.NET, Clean Architecture, Distributed Systems).',
    solution:
      'Created a comprehensive prep platform that structures preparation into interactive modules, spaced repetition flashcards, and architectural breakdown diagrams.',
    architectureHighlights: [
      'Categorized roadmap covering Data Structures, .NET Core, Microservices, and Cloud',
      'Interactive code snippet runner with input/output test case validator',
      'Progress tracker recording completed challenges and strengths/weaknesses',
      'Markdown-driven question repository enabling seamless community contributions'
    ],
    keyDecisions: [
      'Categorized by real-world enterprise interview topics (.NET, CQRS, Docker, Cloud)',
      'Built offline reading mode with automatic local progress storage'
    ],
    metrics: [
      { label: 'Curated Questions', value: '250+' },
      { label: 'Topics Covered', value: '12 Domains' },
      { label: 'User Rating', value: '4.9/5' }
    ],
    tags: ['JavaScript', 'React', 'Education', 'System Design', 'Interview Prep'],
    githubUrl: 'https://github.com/harichandruiaf-ship-it/InterviewHub',
    featured: false,
    year: '2026',
    role: 'Creator & Full Stack Engineer',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 'gugan-global-venture',
    slug: 'gugan-global-venture',
    title: 'Gugan Global Venture',
    subtitle: 'Corporate Portfolio & Business Venture Showcase',
    category: 'Full Stack & Cloud',
    description:
      'A corporate venture showcase portal highlighting international trade, commodities sourcing, corporate advisory services, and cross-border partnership opportunities.',
    longDescription:
      'Built for Gugan Global Venture to establish a commanding digital presence. Emphasizes corporate reliability, international capabilities, trade certifications, and investor inquiries.',
    problem:
      'International trade ventures require high authority, lightning-fast load times across international connections, and crystal-clear service offerings.',
    solution:
      'Crafted an elegant, responsive portal with optimized typography, responsive imagery, multi-channel inquiry triggers, and SEO structured data markup.',
    architectureHighlights: [
      'Semantic HTML5 structure with OpenGraph and JSON-LD enterprise schema',
      'CSS Grid layout with fluid typography scaling gracefully across devices',
      'Optimized asset delivery pipeline scoring 100 on mobile performance audits'
    ],
    keyDecisions: [
      'Used lightweight vanilla CSS architecture for zero-bloat international loading',
      'Implemented automated contact validation with anti-spam honeypot'
    ],
    metrics: [
      { label: 'PageSpeed Score', value: '100/100' },
      { label: 'First Contentful Paint', value: '0.6s' }
    ],
    tags: ['HTML5', 'CSS3', 'Corporate Web', 'SEO', 'Responsive Design'],
    githubUrl: 'https://github.com/harichandruiaf-ship-it/Gugan-Global-Venture',
    featured: false,
    year: '2026',
    role: 'Web Developer',
    color: 'from-amber-600 to-stone-700'
  }
]
