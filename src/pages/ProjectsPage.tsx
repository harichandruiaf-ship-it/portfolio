import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Search, ExternalLink, ArrowRight, Star, Sparkles, Filter, Code2 } from 'lucide-react'
import { projectsData, Project } from '../data/projectsData'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = ['All', 'AI & 3D', 'Enterprise Systems', 'Full Stack & Cloud', 'SaaS & Tools']

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        query === '' ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((t) => t.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-[#07070a] text-white pt-28 pb-20 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
          <Code2 size={16} />
          <span>Complete Engineering Index</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          All Projects & Repositories
        </h1>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
          Explore all 12 public GitHub repositories and enterprise distributed architectures built by Harichandru. Filter by technology, architecture, or domain.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-8 border-b border-white/10">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold shadow-md shadow-white/10'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px] sm:min-w-[320px]">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech (e.g. .NET, 3D, React)..."
            className="w-full bg-white/[0.04] border border-white/15 focus:border-cyan-400 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none transition-colors"
          />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-24 rounded-2xl bg-white/[0.02] border border-white/10">
          <p className="text-lg text-white/60">No projects found matching &ldquo;{searchQuery}&rdquo;</p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('')
              setSelectedCategory('All')
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-cyan-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-white/80 border border-white/10">
                    {project.category}
                  </span>
                  {project.stars !== undefined && project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs text-amber-400 font-medium">
                      <Star size={13} className="fill-amber-400" />
                      <span>{project.stars}</span>
                    </span>
                  )}
                  <span className="text-xs font-mono text-white/40">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-white/50 mb-3">{project.subtitle}</p>

                <p className="text-sm text-white/70 leading-relaxed line-clamp-3 mb-5">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded text-[11px] bg-white/[0.04] text-white/70 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  <span>Case Study</span>
                  <ArrowRight size={14} />
                </Link>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* GitHub Note */}
      <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-white">Looking for live code and contributions?</h4>
          <p className="text-sm text-white/60">
            All repositories are maintained on GitHub at <span className="text-cyan-300">@harichandruiaf-ship-it</span>.
          </p>
        </div>
        <a
          href="https://github.com/harichandruiaf-ship-it?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-cyan-400 transition-colors whitespace-nowrap"
        >
          <span>View On GitHub</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}
