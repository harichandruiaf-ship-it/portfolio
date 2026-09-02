import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react'

export default function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'harichandru_thirumurugan@epam.com',
      href: 'mailto:harichandru_thirumurugan@epam.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '@harichandru-t',
      href: 'https://www.linkedin.com/in/harichandru-t-6a405a240/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'harichandruiaf-ship-it',
      href: 'https://github.com/harichandruiaf-ship-it',
    },
  ]

  return (
    <section id="contact" className="relative w-full py-20 px-6 bg-gradient-to-b from-[#1a1a1a] to-[#0C0C0C]">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/2 w-96 h-96 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            y: [0, 50, 0],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
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
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter hero-gradient">
            Let's Build Something
            <br />
            <span className="text-white">Extraordinary Together</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Open to exciting opportunities, collaborations, and conversations about technology, innovation, and growth.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-3 gap-6 py-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-white/10 w-fit mx-auto mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  <Icon size={28} className="text-white group-hover:text-indigo-400 transition-colors" />
                </div>
                <p className="text-sm text-white/60 mb-2">{method.label}</p>
                <p className="font-semibold text-white break-all">
                  {method.value}
                </p>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Main CTA */}
        <motion.div variants={itemVariants} className="pt-8">
          <motion.a
            href="mailto:harichandru_thirumurugan@epam.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300"
          >
            Let's Start a Conversation
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="pt-12 border-t border-white/10"
        >
          <p className="text-sm text-white/50">
            © 2026 Harichandru Thirumurugan. All rights reserved.
          </p>
          <p className="text-xs text-white/40 mt-4">
            Crafted with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
