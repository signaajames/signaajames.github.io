import { useState } from 'react'
import './App.css'

const App = () => {
  const [showStack, setShowStack] = useState(false);
  // Replace these with your actual image paths or imports
  const catinerSS = "/assets/catinderv2.png";

  const projects = [
    {
      title: "CatinderV2",
      desc: "The second version of the minimalist cat experiment in swipe-based discovery. Built with Vite and React",
      image: catinerSS,
      alt: "Catinder Screenshot",
      links: [
        { github: "https://github.com/signaajames/catinderv2" },
        { live: "https://signaajames.github.io/catinderv2/" }
      ],
    },
    
  ]

  return (
    <div className="container">
      <header className="hero">
        <h1>Signaa James</h1>
        <div className="bio-line">
          <p>Web (full stack) and game dev</p>
          <div className="timezone">UTC+8</div>
        </div>
      </header>

      <main>
        <section id="work">
          <div className="section-label">Projects i think are cool</div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <article key={index} className="project-entry">
                <div className="project-img-wrapper vignette">
                  <img src={project.image} alt={project.alt} className="project-img" />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="project-actions">
                    <a href={project.links[1].live} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Live Demo</a>
                    <a href={project.links[0].github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
                  </div>
                </div>
                </article>
            ))}
          </div>

          <div className="show-more-container">
            <button 
              className="btn-show-more" 
              onClick={() => setShowStack(!showStack)}
            >
              {showStack ? "Show less" : "Show more"}
            </button>
          </div>

          {showStack && (
            <div className="stack-reveal">
              <div className="section-label" style={{ marginTop: '80px', marginBottom: '40px' }}>Stack</div>
              <div className="about-grid">
                <div className="about-content">
                  I try to build software with robust backend logic and elegant/minimal UI's. and heres like everything i know:
                </div>
                <div className="stack-group">
                  <span className="stack-item">React</span>
                  <span className="stack-item">React Native</span>
                  <span className="stack-item">JavaScript</span>
                  <span className="stack-item">Java</span>
                  <span className="stack-item">Lua</span>
                  <span className="stack-item">Tailwind</span>
                  <span className="stack-item">CSS</span>
                  <span className="stack-item">Node.js</span>
                  <span className="stack-item">Vite</span>
                  <span className="stack-item">Git</span>
                  <span className="stack-item">Fabric Api</span>
                </div>
              </div>
            </div>
          )}
        </section>

        <footer>
          <a href="mailto:SignaaJames@proton.me" className="contact-link">SignaaJames@proton.me</a>
          <div className="social-links">
            <a href="https://github.com/signaajames" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com/SignaaJame" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App
