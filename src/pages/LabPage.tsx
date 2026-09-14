import { useState } from 'react'
import { Terminal, Sparkles, ExternalLink, Play, Sliders, RefreshCw, Eye } from 'lucide-react'

export default function LabPage() {
  const [activeTab, setActiveTab] = useState<'spaceedu' | 'interactive-console'>('spaceedu')
  const [customPrompt, setCustomPrompt] = useState('Architect an event-driven microservice system on .NET and NATS.')
  const [simulatedResponse, setSimulatedResponse] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSimulateAgent = () => {
    setIsGenerating(true)
    setSimulatedResponse(null)
    setTimeout(() => {
      setSimulatedResponse(
        `[Agent A.R.I.A Online] Analyzing requirement: "${customPrompt}"\n\n→ Recommended Topology:\n1. Ingress API Gateway with rate limiting & JWT verification\n2. NATS JetStream cluster for persistent pub/sub event bus\n3. CQRS MediatR handlers with transactional outbox pattern\n4. Read replicas on SQL Server with Redis write-through cache\n\nEstimated throughput: 15,000 req/sec at < 18ms latency.`
      )
      setIsGenerating(false)
    }, 700)
  }

  return (
    <div className="min-h-screen bg-[#07070a] text-white pt-28 pb-24 px-5 sm:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
          <Terminal size={16} />
          <span>Interactive Creative Lab</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Experimental Lab & Prototypes
        </h1>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
          Where creative frontend design systems meet full-stack engineering. Audition live interactive prototypes, experimental shaders, and the SpaceEdu celestial hero.
        </p>
      </div>

      {/* Lab Tabs */}
      <div className="flex gap-3 mb-8 border-b border-white/10 pb-4">
        <button
          type="button"
          onClick={() => setActiveTab('spaceedu')}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'spaceedu'
              ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-black shadow-lg shadow-cyan-500/20'
              : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
          }`}
        >
          🌌 SpaceEdu Celestial Hero (Live Spec)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('interactive-console')}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'interactive-console'
              ? 'bg-gradient-to-r from-cyan-400 to-indigo-500 text-black shadow-lg shadow-cyan-500/20'
              : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
          }`}
        >
          ⚡ A.R.I.A Agentic Console Sandbox
        </button>
      </div>

      {/* Tab 1: SpaceEdu */}
      {activeTab === 'spaceedu' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                Pixel-Faithful Standalone HTML
              </span>
              <h2 className="text-2xl font-bold text-white">SpaceEdu Planet Switcher</h2>
              <p className="text-sm text-white/70 leading-relaxed">
                Full-viewport space-themed hero built to the exact mathematical <code className="text-cyan-300">--u</code> design system. Features 3 synchronized looping planetary clips (Earth, Venus, Mars), zero-flash 2048px PNG cutout swapping, entrance animations, and responsive breakpoints.
              </p>
            </div>
            <a
              href="/spaceedu.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap self-start md:self-auto"
            >
              <Eye size={16} />
              <span>Launch Fullscreen Hero</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Embedded Live Preview */}
          <div className="rounded-2xl border border-white/15 overflow-hidden shadow-2xl bg-black">
            <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs text-white/40 ml-2 font-mono">spaceedu.html (Interactive Preview)</span>
              </div>
              <a
                href="/spaceedu.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>Open in new tab</span>
                <ExternalLink size={12} />
              </a>
            </div>
            <div className="w-full h-[640px] relative bg-black">
              <iframe
                src="/spaceedu.html"
                title="SpaceEdu Celestial Hero"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: A.R.I.A Agentic Console */}
      {activeTab === 'interactive-console' && (
        <div className="space-y-8 animate-fadeIn">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              Interactive Agent Interface
            </span>
            <h2 className="text-2xl font-bold text-white">Mainframe A.R.I.A Architecture Sandbox</h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Test simulated cognitive agent tool calling and architecture reasoning. Type any software challenge below to see an instant architectural recommendation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <label htmlFor="prompt-input" className="block text-xs uppercase tracking-wider text-white/50 font-semibold">
              Enter Architectural Problem Statement:
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="prompt-input"
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="e.g. Build real-time 3D cloth physics simulation in browser..."
                className="flex-1 bg-white/5 border border-white/15 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleSimulateAgent}
                disabled={isGenerating}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-bold text-sm hover:opacity-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isGenerating ? (
                  <RefreshCw size={16} className="animate-spin" />
                ) : (
                  <Play size={16} />
                )}
                <span>Run Architecture Agent</span>
              </button>
            </div>

            {simulatedResponse && (
              <div className="mt-6 p-5 rounded-xl bg-black/60 border border-cyan-400/30 font-mono text-xs sm:text-sm text-cyan-300 whitespace-pre-wrap leading-relaxed shadow-inner">
                {simulatedResponse}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
