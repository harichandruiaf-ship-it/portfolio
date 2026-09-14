import { useState } from 'react'
import { Cpu, Award, CheckCircle, Sparkles, Layers, ShieldCheck } from 'lucide-react'
import { skillsData, certificationsData } from '../data/experienceData'

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filteredCategories =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((cat) => cat.title === activeCategory)

  return (
    <div className="min-h-screen bg-[#07070a] text-white pt-28 pb-24 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
          <Cpu size={16} />
          <span>Capability Matrix</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Skills & Certifications
        </h1>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
          Comprehensive breakdown of backend engineering, frontend graphics, distributed cloud microservices, and specialized AI architectural certifications.
        </p>
      </div>

      {/* Certifications Banner */}
      <div className="mb-16">
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-white/60 mb-6">
          <Award size={18} className="text-amber-400" />
          <span>Official Certifications & Credentials</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-amber-400/30 transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-400/10 text-amber-300 border border-amber-400/20">
                  {cert.badge}
                </span>
                <span className="text-xs font-mono text-white/40">{cert.year}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{cert.title}</h3>
              <p className="text-xs font-medium text-cyan-400">{cert.issuer}</p>
              <p className="text-xs text-white/60 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-white/10">
        <button
          type="button"
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
            activeCategory === 'All'
              ? 'bg-white text-black font-semibold'
              : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
          }`}
        >
          All Domains
        </button>
        {skillsData.map((cat) => (
          <button
            key={cat.title}
            type="button"
            onClick={() => setActiveCategory(cat.title)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
              activeCategory === cat.title
                ? 'bg-white text-black font-semibold'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Skills Categories Grid */}
      <div className="space-y-12">
        {filteredCategories.map((cat) => (
          <div key={cat.title} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white">{cat.title}</h2>
              <p className="text-sm text-white/50 mt-1">{cat.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-base text-white">{skill.name}</span>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20">
                      {skill.experienceYears}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-3">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {skill.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-white/60 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
