import Header from './layout/Header'
import { About, Work, Projects, Contact } from './components/sections'
import SplashScreen from './components/splash-screen/SplashScreen'

function App() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white relative">
      {/* Splash screen overlays everything initially */}
      <SplashScreen />

      <Header />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
