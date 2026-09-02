import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Backend',
    skills: ['.NET Core', 'C#', 'ASP.NET', 'Entity Framework', 'T-SQL', 'REST APIs', 'MediatR'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Vue', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Database',
    skills: ['SQL Server', 'NoSQL', 'SSRS', 'Query Optimization', 'LINQ', 'SSIS'],
  },
  {
    category: 'Architecture',
    skills: ['Microservices', 'DDD', 'Clean Architecture', 'CQRS', 'SOLID', 'Design Patterns'],
  },
  {
    category: 'AI & Tools',
    skills: ['Anthropic Claude', 'GitHub Copilot', 'GenAI Integration', 'Visual Studio', 'NATS'],
  },
]

export default function Skills() {
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
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative min-h-screen w-full py-20 px-6 bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a]">
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
            Technical Skills
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Comprehensive expertise across modern development stacks and practices
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl hover:border-white/30 transition-all duration-300 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors">
                {group.category}
              </h3>

              <div className="space-y-3">
                {group.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400" />
                    <span className="text-white/70 group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            🏆 Certifications & Achievements
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-1 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full" />
              <div>
                <p className="font-semibold text-white">Claude Certified Architect</p>
                <p className="text-sm text-white/60">Anthropic · 2026</p>
                <p className="text-sm text-white/50 mt-1">Foundations in AI architecture and integration</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full" />
              <div>
                <p className="font-semibold text-white">Claude Code In Action</p>
                <p className="text-sm text-white/60">Anthropic · 2026</p>
                <p className="text-sm text-white/50 mt-1">Advanced AI-assisted development practices</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
