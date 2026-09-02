import { motion } from 'framer-motion'
import { useRef, useState, ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    const distanceToCenter = Math.sqrt(distanceX ** 2 + distanceY ** 2)

    if (distanceToCenter < padding) {
      setX(distanceX / strength)
      setY(distanceY / strength)
    } else {
      setX(0)
      setY(0)
    }
  }

  const handleMouseLeave = () => {
    setX(0)
    setY(0)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full"
    >
      <motion.div
        animate={{ x, y }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </div>
  )
}
