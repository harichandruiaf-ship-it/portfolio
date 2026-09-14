import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUpRight, Terminal, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-[#07070a] border-t border-white/10 pt-16 pb-12 overflow-hidden text-white/70">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 text-white font-bold text-2xl tracking-tight">
              <span>Harichandru</span>
              <span className="text-cyan-400 font-serif">✳︎</span>
            </Link>
            <p className="text-sm sm:text-base text-white/60 max-w-md leading-relaxed">
              Full Stack Engineer & AI Architect specializing in high-throughput enterprise systems (.NET, React, Microservices) and creative autonomous interfaces.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for high-impact roles & collaborations
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-semibold text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/projects" className="hover:text-white hover:underline transition-colors">
                  All Projects (12 Repos)
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:text-white hover:underline transition-colors">
                  Career & Enterprise
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-white hover:underline transition-colors">
                  Technical Matrix
                </Link>
              </li>
              <li>
                <Link to="/lab" className="hover:text-cyan-400 hover:underline transition-colors flex items-center gap-1.5 text-cyan-300">
                  <Terminal size={14} />
                  <span>Creative Lab ✳︎</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Socials & Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-wider font-semibold text-white mb-4">
              Connect
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:harichandruiaf@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Mail size={16} className="text-white/40 group-hover:text-cyan-400 transition-colors" />
                  <span>harichandruiaf@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/harichandruiaf-ship-it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Github size={16} className="text-white/40 group-hover:text-cyan-400 transition-colors" />
                  <span>GitHub @harichandruiaf-ship-it</span>
                  <ArrowUpRight size={14} className="opacity-50" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/harichandru-t-6a405a240/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <Linkedin size={16} className="text-white/40 group-hover:text-cyan-400 transition-colors" />
                  <span>LinkedIn @harichandru-t</span>
                  <ArrowUpRight size={14} className="opacity-50" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Harichandru. Engineered with precision & creativity.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> & TypeScript
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
