import { motion } from 'framer-motion'
import { Code2, Cloud, Database, Zap, Users, Layers } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'Enterprise-grade applications using .NET Core, React, Vue, and TypeScript. Clean architecture, SOLID principles, and modern design patterns.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description:
      'AWS and Azure deployments, containerization with Docker/Kubernetes, CI/CD pipelines, and serverless architecture design.',
  },
  {
    icon: Database,
    title: 'Database Optimization',
    description:
      'SQL Server tuning, NoSQL solutions, query optimization, and database architecture for high-performance applications.',
  },
  {
    icon: Zap,
    title: 'Microservices Architecture',
    description:
      'Domain-Driven Design, CQRS pattern, MediatR implementation, REST APIs, and event-driven systems with NATS.',
  },
  {
    icon: Users,
    title: 'Team Leadership',
    description:
      'Mentoring developers, code reviews, Agile sprint management, and cross-functional collaboration for scalable deliverables.',
  },
  {
    icon: Layers,
    title: 'AI & GenAI Integration',
    description:
      'Anthropic Claude integration, AI-assisted development, prompt engineering, and intelligent automation solutions.',
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="relative min-h-screen w-full py-20 px-6 bg-white text-[#0C0C0C]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4">
            Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for modern software development, from architecture to deployment
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 p-3 rounded-lg bg-indigo-100 w-fit group-hover:bg-indigo-200 transition-colors">
                  <Icon size={28} className="text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
