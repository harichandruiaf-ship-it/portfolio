import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, Sparkles, Menu, X, Code2 } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Lab ✳︎', path: '/lab', badge: 'Interactive' },
    { name: 'Contact', path: '/contact' }
  ]

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 text-white font-bold tracking-tight text-xl sm:text-2xl transition-transform active:scale-95"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Code2 size={18} className="text-white" />
            </div>
            <span className="font-heading">
              Harichandru<span className="text-cyan-400 font-serif ml-0.5">✳︎</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    active
                      ? 'text-white bg-white/15 shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 text-[10px] uppercase font-semibold bg-cyan-400/20 text-cyan-300 rounded border border-cyan-400/30">
                      {link.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-gradient-to-r from-white via-slate-100 to-white rounded-full hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              <span>Get In Touch</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white bg-white/5 border border-white/10 focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/95 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-2">
              Navigation
            </p>
            {navLinks.map((link) => {
              const active = isActive(link.path)
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between p-3.5 rounded-xl text-lg font-medium transition-all ${
                    active
                      ? 'bg-indigo-600/20 text-cyan-400 border border-indigo-500/30 font-semibold'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-2 py-0.5 text-[10px] bg-cyan-400/20 text-cyan-300 rounded border border-cyan-400/30">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <ArrowRight size={16} className="text-white/40" />
                </Link>
              )
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
            <Link
              to="/contact"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30"
            >
              <Sparkles size={18} />
              <span>Let's Build Something</span>
            </Link>
            <p className="text-xs text-center text-white/50">
              harichandruiaf@gmail.com
            </p>
          </div>
        </div>
      )}
    </>
  )
}
