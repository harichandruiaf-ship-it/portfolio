import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'ghost' | 'accent'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
  onClick?: () => void
  href?: string
  disabled?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  onClick,
  href,
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'relative overflow-hidden font-medium tracking-wide transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer'

  const variants = {
    primary: 'bg-white text-black hover:shadow-lg hover:shadow-blue-500/30',
    ghost: 'border border-white/40 text-white hover:border-white/80 hover:bg-white/5',
    accent: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  }

  const finalClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  const element = href ? (
    <a href={href} className={finalClassName}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} disabled={disabled} className={finalClassName}>
      {children}
    </button>
  )

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className="w-full"
    >
      {element}
    </motion.div>
  )
}
