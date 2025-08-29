import Header from './layout/Header'
import { About, Work, Projects, Contact } from './components/sections'


function App() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <Header />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App