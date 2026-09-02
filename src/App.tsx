import { useEffect, useState } from 'react'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="bg-dark overflow-x-hidden">
      <Hero scrollY={scrollY} />
      <About />
      <Services />
      <Projects scrollY={scrollY} />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
