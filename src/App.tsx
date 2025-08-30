import { useState, useEffect } from "react"
import Header from './layout/Header'
import { Hero, About, Work, Projects, Contact } from './components/sections'
import SplashScreen from './components/splash-screen/SplashScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#18181b] text-white relative">
      {/* Splash screen always visible while loading */}
      {loading && <SplashScreen />}

      {/* Entire site hidden until loading is done */}
      {!loading && (
        <div className="transition-opacity duration-500 opacity-100">
          <Header />
          <Hero />
          <About />
          <Work />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  )
}

export default App