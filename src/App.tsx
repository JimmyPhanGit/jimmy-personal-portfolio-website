import './App.css'
import Header from './components/sections/Header'

function App() {
  return (
    <>
      <Header />
      <section id="about" className="full-section">
        <h1>About Me</h1>
      </section>
      <section id="work" className="full-section">
        <h1>Work Experience</h1>
      </section>
      <section id="projects" className="full-section">
        <h1>Projects</h1>
      </section>
      <section id="contact" className="full-section">
        <h1>Contact</h1>
      </section>
    </>
  )
}


export default App