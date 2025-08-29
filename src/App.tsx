import { useState, useEffect } from "react"
import Header from './layout/Header'
import { About, Work, Projects, Contact } from './components/sections'
import SplashScreen from './components/splash-screen/SplashScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <SplashScreen />}
      {!loading && (
        <div className="bg-[#18181b] text-white transition-opacity duration-500 opacity-100">
          <Header />
          <About />
          <Work />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  )
}

export default App
