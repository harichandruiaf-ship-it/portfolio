import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Shell TWR - Sub-Surface & Wells',
    company: 'EPAM Systems (Current)',
    period: 'Jul 2025 - May 2026',
    description:
      'Key engineer on Shell\\'s subsurface exploration platform. Migrated Vue 2 to React, implemented modern cloud architecture, and optimized CI/CD pipelines for enterprise deployment.',
    tags: ['.NET Core', 'React', 'TypeScript', 'AWS', 'Docker', 'Azure'],
    metrics: [
      { label: 'Users', value: '100+' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Performance', value: '+30%' },
    ],
    color: 'from-blue-500 to-cyan-500',
    link: 'https://www.epam.com',
  },
  {
    id: 2,
    title: 'Grain Centre System (GCS)',
    company: 'Cognizant (Cargill)',
    period: 'Oct 2022 - Jul 2025',
    description:
      'Engineered microservices-based warehouse management platform serving 23 storage plants across Australia. Implemented DDD, CQRS, and clean architecture with 8 external integrations.',
    tags: ['Microservices', '.NET', 'React', 'SQL Server', 'NATS', 'MediatR'],
    metrics: [
      { label: 'Plants', value: '23' },
      { label: 'Interfaces', value: '8' },
      { label: 'Team', value: '5' },
    ],
    color: 'from-green-500 to-emerald-500',
    link: 'https://www.cognizant.com',
  },
  {
    id: 3,
    title: 'Open Source & Personal Projects',
    company: 'GitHub: harichandruiaf-ship-it',
    period: 'Ongoing',
    description:
      'Building and sharing innovative projects on GitHub including full-stack applications, cloud infrastructure templates, and AI-assisted development tools. All repositories are public for community contribution.',
    tags: ['Full Stack', 'Open Source', 'Cloud', 'DevOps', 'Microservices'],
    metrics: [
      { label: 'Public Repos', value: 'Many' },
      { label: 'Community', value: 'Open' },
      { label: 'Active', value: 'Yes' },
    ],
    color: 'from-purple-500 to-pink-500',
    link: 'https://github.com/harichandruiaf-ship-it',
  },
]

interface ProjectsProps {
  scrollY: number
}

export default function Projects({ scrollY }: ProjectsProps) {
  return (
    <section id="projects" className="relative min-h-screen w-full py-20 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0C0C0C] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4 hero-gradient">
            Featured Projects
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            High-impact solutions delivered for industry leaders
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: '50px' }}
              className="group relative"
            >
              <div className={`p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl hover:border-white/30 transition-all duration-500 overflow-hidden`}>
                {/* Gradient background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/60 flex flex-col sm:flex-row sm:gap-3">
                        <span className="font-medium">{project.company}</span>
                        <span className="hidden sm:inline">•</span>
                        <span>{project.period}</span>
                      </p>
                    </div>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 rounded-lg bg-white/10 w-fit hover:bg-indigo-500/20 transition-colors"
                    >
                      <ExternalLink size={20} className="text-white/60 hover:text-indigo-400 transition-colors" />
                    </motion.a>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-white/10">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <p className="text-2xl font-bold text-white">
                          {metric.value}
                        </p>
                        <p className="text-xs text-white/60 mt-1">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
