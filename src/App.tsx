import { useState } from 'react'
import './App.css'

const App = () => {
  const [showStack, setShowStack] = useState(false);

  const projects = [
    {
      title: "CatinderV2",
      desc: "The second version of the minimalist cat experiment in swipe-based discovery. Built with Vite and React",
      image: "/catinderv2.png",
      alt: "Catinder Screenshot",
      links: [
        { 
          type: "github",
          url: "https://github.com/signaajames/catinderv2",
        },
        { 
          type: "live",
          url: "https://signaajames.github.io/catinderv2/" ,
        }
      ],
    },
    {
      title: "Brent-2",
      desc: "The second generation other purpose Brent(ley) bot, meant to verify users like double counter, specifically for Brentley's disocrd server.",
      image: "/B2.png",
      alt: "Brent-2 Screenshot",
      links: [
        {
          type: "github",
          url: "https://github.com/signaajames/brent-2",
          label: "Bot"
        },
        {
          type: "github",
          url: "https://github.com/brenttwo/brenttwo.github.io",
          label: "Website"
        }
      ]
    }

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
                      {project.links.map((link, i) => (
                        <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        {link.type === "github"
                          ? `GitHub${link.label ? ` (${link.label})` : ""}`
                          : link.type === "live"
                          ? "Live Demo"
                          : link.label}
                      </a>
                    ))}
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
              <div className="section-label" style={{ marginTop: '80px', marginBottom: '40px' }}>Stack & About</div>
              <div className="about-grid">
                <div className="about-content abc">
                  I started programming in 2025 and mostly build things are useful to me, for friends, or just fun things like catinder. I enjoy making small games and designing bold/minimal interfaces..
                </div>
                <div className="stack-group">
                  <span className="stack-item">React</span>
                  <span className="stack-item">JS/TS</span>
                  <span className="stack-item">Lua</span>
                  <span className="stack-item">Tailwind</span>
                  <span className="stack-item">HTML/CSS</span>
                  <span className="stack-item">Node.js</span>
                  <span className="stack-item">Vite</span>
                  <span className="stack-item">Git</span>
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
