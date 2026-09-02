import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import FadeIn from '../components/FadeIn'

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  }

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0C0C0C] via-[#1a1a1a] to-[#0C0C0C]">
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Decorative blurred blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20"
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block"
        >
          <div className="px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md w-fit mx-auto">
            <p className="text-xs sm:text-sm font-medium text-white/80">
              ✨ Full Stack Developer & AI Enthusiast
            </p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-tight">
            <span className="block text-white">
              Build <span className="hero-gradient">extraordinary</span>
            </span>
            <span className="block text-white">
              software <span className="hero-gradient">experiences</span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed"
        >
          .NET Full Stack Developer with 4.5+ years crafting scalable, high-performance enterprise applications. Specialized in microservices, cloud infrastructure, and modern frontend frameworks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
            <ArrowRight size={20} />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 pt-12 max-w-md mx-auto"
        >
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-white">4.5+</p>
            <p className="text-xs sm:text-sm text-white/60">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-white">20+</p>
            <p className="text-xs sm:text-sm text-white/60">Projects Delivered</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-black text-white">5</p>
            <p className="text-xs sm:text-sm text-white/60">Team Led</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-1.5 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
