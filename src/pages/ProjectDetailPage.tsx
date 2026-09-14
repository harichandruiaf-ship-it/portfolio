import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Cpu, Layers, Sparkles, ChevronRight } from 'lucide-react'
import { projectsData } from '../data/projectsData'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const project = projectsData.find((p) => p.slug === slug || p.id === slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-[#07070a] text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold mb-3">Project Not Found</h1>
        <p className="text-white/60 mb-6 text-center">
          The project with identifier &ldquo;{slug}&rdquo; could not be located.
        </p>
        <Link
          to="/projects"
          className="px-6 py-2.5 rounded-full bg-cyan-400 text-black font-semibold text-sm hover:bg-cyan-300"
        >
          Back to Projects
        </Link>
      </div>
    )
  }

  // Related projects
  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-[#07070a] text-white pt-28 pb-24 px-5 sm:px-8 max-w-5xl mx-auto">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm text-white/50 mb-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <ChevronRight size={14} />
        <Link to="/projects" className="hover:text-white transition-colors">
          Projects
        </Link>
        <ChevronRight size={14} />
        <span className="text-cyan-400 font-medium">{project.title}</span>
      </nav>

      {/* Back button */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-white/60 hover:text-white mb-6 group transition-colors"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span>Back to Projects</span>
      </button>

      {/* Case Study Header */}
      <header className="space-y-4 pb-10 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
            {project.category}
          </span>
          {project.company && (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {project.company}
            </span>
          )}
          <span className="text-xs font-mono text-white/40">{project.year}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl text-white/70 max-w-3xl leading-relaxed">
          {project.subtitle}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-cyan-400 hover:scale-105 transition-all shadow-lg"
          >
            <Github size={18} />
            <span>View Source Code</span>
            <ExternalLink size={14} />
          </a>

          {project.liveUrl && project.liveUrl !== project.githubUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-all"
            >
              <span>Live Application</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </header>

      {/* Metrics Banner */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-b border-white/10">
        {project.metrics.map((m, i) => (
          <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="block text-xs uppercase tracking-wider text-white/40 font-medium">
              {m.label}
            </span>
            <span className="text-2xl sm:text-3xl font-black text-white mt-1 block">
              {m.value}
            </span>
          </div>
        ))}
      </section>

      {/* Technical Deep Dive Body */}
      <main className="py-12 space-y-12">
        {/* Executive Summary */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Sparkles size={20} className="text-cyan-400" />
            <span>Overview & Purpose</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-rose-500/[0.04] border border-rose-500/20 space-y-3">
            <h3 className="text-lg font-bold text-rose-300">The Problem</h3>
            <p className="text-sm text-white/70 leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-6 rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/20 space-y-3">
            <h3 className="text-lg font-bold text-emerald-300">The Solution</h3>
            <p className="text-sm text-white/70 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Architecture Highlights */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Layers size={20} className="text-indigo-400" />
            <span>Architecture & System Highlights</span>
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {project.architectureHighlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
              >
                <CheckCircle2 size={18} className="text-cyan-400 flex-none mt-0.5" />
                <span className="text-sm text-white/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Key Engineering Decisions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <Cpu size={20} className="text-purple-400" />
            <span>Key Engineering Decisions</span>
          </h2>
          <div className="space-y-3">
            {project.keyDecisions.map((decision, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/[0.02] border-l-2 border-l-cyan-400 border-white/5 text-sm text-white/80 leading-relaxed"
              >
                {decision}
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Tags */}
        <div className="space-y-4 pt-6 border-t border-white/10">
          <h3 className="text-sm uppercase tracking-wider font-semibold text-white/50">
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.05] text-white/90 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </main>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <aside className="pt-12 border-t border-white/10">
          <h3 className="text-xl font-bold mb-6">More in {project.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.id}
                to={`/projects/${rel.slug}`}
                className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all group"
              >
                <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-white/50 mt-1 line-clamp-2">{rel.description}</p>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </div>
  )
}
