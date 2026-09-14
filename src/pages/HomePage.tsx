import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Copy, Check, Sparkles, Terminal, Layers, Star, ExternalLink, Cpu, Globe, Shield } from 'lucide-react'
import { projectsData } from '../data/projectsData'

// Typewriter hook inspired by Mainframe
function useTypewriter(text: string, speed = 36, startDelay = 500) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    let intervalId: ReturnType<typeof setInterval>

    timeoutId = setTimeout(() => {
      let currentIndex = 0
      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayed(text.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          setDone(true)
          clearInterval(intervalId)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId)
    }
  }, [text, speed, startDelay])

  return { displayed, done }
}

export default function HomePage() {
  const [copied, setCopied] = useState(false)
  const typewriterText =
    "Glad you stopped in. High-scale architecture and creative code tend to find us. Now, what are we building?"
  const { displayed, done } = useTypewriter(typewriterText, 32, 400)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('harichandruiaf@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4)

  return (
    <div className="min-h-screen bg-[#07070a] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* HERO SECTION (Agency-grade aesthetic with typewriter & interactive pills) */}
      <section className="relative min-h-[92vh] flex flex-col justify-center pt-24 pb-16 px-5 sm:px-8 md:px-12 overflow-hidden border-b border-white/10">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-600/15 via-cyan-500/10 to-purple-600/15 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="relative max-w-5xl mx-auto w-full z-10">
          {/* 1. Blurred / Glass Intro Label */}
          <div className="inline-block mb-6 select-none animate-fadeIn">
            <div className="px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/80">
                Hey there, welcome to Harichandru&apos;s Engineering Console
              </span>
            </div>
          </div>

          {/* 2. Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">enterprise platforms</span> &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 font-serif italic">
              creative AI experiences
            </span>
          </h1>

          {/* 3. Typewriter Prompt */}
          <div className="mb-8 min-h-[58px] max-w-3xl">
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-normal leading-relaxed">
              {displayed}
              {!done && (
                <span className="inline-block w-[2px] h-[1.1em] bg-cyan-400 align-middle ml-1 animate-pulse" />
              )}
            </p>
          </div>

          {/* 4. Action Pill Buttons (Inspired by Mainframe) */}
          <div className="flex flex-wrap gap-2.5 pt-2 items-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center bg-white text-black font-semibold rounded-full text-xs sm:text-sm px-5 py-2.5 hover:bg-cyan-400 hover:text-black hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
            >
              Explore 12 Public Repos
            </Link>

            <Link
              to="/projects/virtual-3d-try-on-room"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full text-xs sm:text-sm px-5 py-2.5 transition-all duration-200"
            >
              Virtual 3D Try-On
            </Link>

            <Link
              to="/experience"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full text-xs sm:text-sm px-5 py-2.5 transition-all duration-200"
            >
              Enterprise Career (Shell & Cargill)
            </Link>

            <Link
              to="/lab"
              className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600/40 to-cyan-500/40 hover:from-indigo-600 hover:to-cyan-500 text-cyan-200 hover:text-white border border-cyan-400/40 rounded-full text-xs sm:text-sm px-5 py-2.5 transition-all duration-200"
            >
              <Terminal size={14} className="mr-1.5" />
              SpaceEdu 3D Lab
            </Link>

            {/* Email Copy Pill */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 text-white/90 bg-white/5 hover:bg-white/15 border border-white/20 rounded-full text-xs sm:text-sm px-4 py-2.5 transition-all duration-200 cursor-pointer"
            >
              <span>harichandruiaf@gmail.com</span>
              {copied ? (
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Check size={14} />
                  <span className="text-[11px]">Copied!</span>
                </span>
              ) : (
                <Copy size={13} className="text-white/60" />
              )}
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">4.5+</p>
              <p className="text-xs sm:text-sm text-white/50 mt-0.5">Years Enterprise Exp</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-cyan-400">23</p>
              <p className="text-xs sm:text-sm text-white/50 mt-0.5">Storage Plants Scaled (Cargill)</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-indigo-400">12</p>
              <p className="text-xs sm:text-sm text-white/50 mt-0.5">Open Source Repositories</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-emerald-400">99.9%</p>
              <p className="text-xs sm:text-sm text-white/50 mt-0.5">Shell Production Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CASE STUDIES REEL */}
      <section className="py-20 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <Sparkles size={14} />
              <span>Selected Work & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Enterprise Solutions & AI Inventions
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-cyan-400 transition-colors group"
          >
            <span>View all 12 projects</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/80 border border-white/10">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-white/40">{project.year}</span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-white/60 mb-4">{project.subtitle}</p>
                <p className="text-sm text-white/70 leading-relaxed line-clamp-3 mb-6">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/5 mb-6">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <span className="block text-xs text-white/40">{m.label}</span>
                      <span className="text-base font-bold text-white">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded text-xs bg-white/[0.04] text-white/70 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Read Deep Case Study</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE TECHNICAL DOMAINS */}
      <section className="py-20 px-5 sm:px-8 border-t border-white/10 bg-[#09090d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 block mb-2">
              Full Stack Mastery
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Enterprise Engineering Meets Modern Web
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-3">
              Combining 4.5+ years of robust backend distributed system design with fluid, state-of-the-art frontend experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Domain 1 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center border border-blue-500/20">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Distributed Architecture</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Expert in CQRS, Domain-Driven Design (DDD), and event streaming with NATS and MediatR on .NET Core. Proven at 23-plant enterprise scale.
              </p>
              <Link to="/experience" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:underline pt-2">
                <span>View Cargill & Shell details</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Domain 2 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Next-Gen AI & Agents</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Claude Certified Architect (Anthropic, 2026). Creator of Ai-Life-OS and conversational streaming engines with tool execution loops.
              </p>
              <Link to="/skills" className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline pt-2">
                <span>View AI Certifications</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Domain 3 */}
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center border border-purple-500/20">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">3D WebGL & Performance</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                Crafting client-side parametric avatars, cloth physics shaders, and cinematic responsive design systems (like SpaceEdu & Mainframe).
              </p>
              <Link to="/lab" className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:underline pt-2">
                <span>Launch Interactive Lab</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 px-5 sm:px-8 border-t border-white/10 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            Let&apos;s Build Together
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Have an ambitious project or role?
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            I am available for full-time senior engineering opportunities, technical advisory, and architectural leadership.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-cyan-400 hover:scale-105 transition-all duration-200"
            >
              Start a Conversation
            </Link>
            <a
              href="mailto:harichandruiaf@gmail.com"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-200"
            >
              Direct Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
