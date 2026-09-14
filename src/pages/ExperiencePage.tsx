import { Building2, Calendar, MapPin, CheckCircle2, Layers, Cpu, ArrowUpRight } from 'lucide-react'
import { experienceData } from '../data/experienceData'

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#07070a] text-white pt-28 pb-24 px-5 sm:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
          <Building2 size={16} />
          <span>Enterprise Engineering Track Record</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Experience & Architecture
        </h1>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
          4.5+ years architecting enterprise-grade applications, driving large-scale frontend modernization, and engineering high-throughput microservice backends for global industry leaders like Shell and Cargill.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        {experienceData.map((item, index) => (
          <div
            key={item.id}
            className="relative rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 p-6 sm:p-10 transition-all duration-300"
          >
            {/* Header / Role Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">{item.role}</h2>
                  {item.current && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-lg font-medium text-cyan-400">
                  {item.company} {item.client && <span className="text-white/60">({item.client})</span>}
                </p>
              </div>

              <div className="flex flex-col md:items-end gap-1 text-xs sm:text-sm text-white/50">
                <div className="flex items-center gap-1.5 font-mono">
                  <Calendar size={14} className="text-white/40" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-white/40" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-white/10">
              {item.metrics.map((m, i) => (
                <div key={i}>
                  <span className="text-xs text-white/40 block uppercase tracking-wider">{m.label}</span>
                  <span className="text-2xl font-black text-white mt-0.5 block">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Overview */}
            <div className="py-6 border-b border-white/10 space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-white/50">
                Scope & Responsibility
              </h3>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Key Contributions & Achievements */}
            <div className="py-6 border-b border-white/10 space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-white/50 flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Key Deliverables & Engineering Achievements</span>
              </h3>
              <ul className="space-y-2.5">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-none mt-2" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Decisions */}
            <div className="py-6 border-b border-white/10 space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-white/50 flex items-center gap-1.5">
                <Layers size={14} className="text-indigo-400" />
                <span>Architectural Patterns & Engineering Decisions</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {item.architectureDecisions.map((dec, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border-l-2 border-l-indigo-400 text-xs sm:text-sm text-white/80 leading-relaxed">
                    {dec}
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="pt-6">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-white/50 mb-3">
                Technologies Applied
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] text-white/80 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
