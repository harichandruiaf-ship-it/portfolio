import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <section className="relative min-h-screen w-full py-20 px-6 bg-gradient-to-b from-[#0C0C0C] to-[#1a1a1a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
          animate={{ y: [0, -50, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '50px' }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-12"
      >
        {/* Heading */}
        <motion.div variants={itemVariants}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight hero-gradient">
            About Me
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={itemVariants}
          className="space-y-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto"
        >
          <p>
            I'm a passionate full-stack developer with 4.5+ years of experience building enterprise-grade applications for global organizations like <span className="font-semibold text-white">Shell</span> and <span className="font-semibold text-white">Cargill</span>.
          </p>

          <p>
            My expertise spans <span className="font-semibold text-indigo-400">.NET Core, React, Vue, and cloud infrastructure (AWS/Azure)</span>. I specialize in designing scalable microservices, optimizing database performance, and delivering robust solutions under Agile methodologies.
          </p>

          <p>
            Recently certified in <span className="font-semibold text-indigo-400">Anthropic Claude AI</span>, I'm leveraging AI-assisted development to build smarter, faster applications. I'm passionate about clean code, performance optimization, and mentoring teams to deliver exceptional results.
          </p>

          <div className="pt-6">
            <p className="text-sm text-white/50 uppercase tracking-widest">Key Achievements</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
              {[
                '30% Faster DB Queries',
                '20% Reduced Load',
                '23 Plants Deployed',
                'Led Teams of 5',
                '8 API Integrations',
                '4.5Y+ Experience',
              ].map((achievement, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                  <p className="font-semibold text-white text-sm">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="pt-8"
        >
          <a
            href="https://www.linkedin.com/in/harichandru-t-6a405a240/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-white/40 text-white hover:border-white/80 hover:bg-white/5 transition-all duration-300"
          >
            Connect on LinkedIn
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              →
            </motion.span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
