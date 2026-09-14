import { useState } from 'react'
import { Mail, Github, Linkedin, Copy, Check, Send, Terminal, Sparkles, MessageSquare } from 'lucide-react'

export default function ContactPage() {
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sentStatus, setSentStatus] = useState<string | null>(null)

  const handleCopy = () => {
    navigator.clipboard.writeText('harichandruiaf@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return

    setSentStatus('Packaging message for harichandruiaf@gmail.com...')
    setTimeout(() => {
      // Trigger user's email client
      const subject = encodeURIComponent(`Project Inquiry from ${form.name}`)
      const body = encodeURIComponent(
        `Hi Harichandru,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`
      )
      window.open(`mailto:harichandruiaf@gmail.com?subject=${subject}&body=${body}`, '_blank')
      setSentStatus('✓ Message prepared! Your email client has been launched.')
    }, 400)
  }

  return (
    <div className="min-h-screen bg-[#07070a] text-white pt-28 pb-24 px-5 sm:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
          <MessageSquare size={16} />
          <span>Direct Connection</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-white/70 text-base sm:text-lg leading-relaxed">
          Open to senior engineering roles, cloud microservice architecture discussions, and innovative AI / WebGL product collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left: Contact Info Cards (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center border border-cyan-400/20">
              <Mail size={20} />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50 block">Primary Email</span>
              <p className="text-base font-bold text-white break-all">harichandruiaf@gmail.com</p>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-white/80 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-300">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={14} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* GitHub Card */}
          <a
            href="https://github.com/harichandruiaf-ship-it"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 block space-y-2 group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-300 flex items-center justify-center border border-indigo-500/20">
              <Github size={20} />
            </div>
            <span className="text-xs uppercase tracking-wider text-white/50 block">GitHub Profile</span>
            <p className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
              @harichandruiaf-ship-it
            </p>
            <p className="text-xs text-white/50">12 public repositories and open source tools.</p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/harichandru-t-6a405a240/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 block space-y-2 group transition-all"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-300 flex items-center justify-center border border-blue-500/20">
              <Linkedin size={20} />
            </div>
            <span className="text-xs uppercase tracking-wider text-white/50 block">Professional Network</span>
            <p className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
              Harichandru Thirumurugan
            </p>
            <p className="text-xs text-white/50">Connect on LinkedIn for career discussions.</p>
          </a>
        </div>

        {/* Right: Interactive Message Form (3 cols) */}
        <div className="lg:col-span-3 p-8 rounded-2xl bg-white/[0.02] border border-white/10 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-semibold">
            <Terminal size={14} />
            <span>Interactive Transmission Console</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-medium">
                Your Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="e.g. sarah@company.com"
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-medium">
                Message / Project Details
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about the role, project, or architecture challenge..."
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 text-black font-bold text-sm hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <Send size={16} />
              <span>Send Message</span>
            </button>

            {sentStatus && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono text-center">
                {sentStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
