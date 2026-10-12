import './Portfolio.css'

const projects = [
  { number: '01', title: 'CatinderV2', type: 'WEB EXPERIMENT', image: '/catinderv2.png', alt: 'CatinderV2 cat profile and swipe controls', description: 'A swipe-based cat discovery experiment. Built with React and Vite.', github: 'https://github.com/signaajames/catinderv2', live: 'https://signaajames.github.io/catinderv2/' },
  { number: '02', title: 'LÖVE2D editor', type: 'LUA / TOOL', image: '/love2deditor.png', alt: 'LÖVE2D text editor showing cursor and line diagnostics', description: 'A small text editor built in LÖVE2D to learn how editors work.', github: 'https://github.com/signaajames/love2d-text-editor', live: undefined },
]

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="screen-bar">
        <span className="ui-label">DEVELOPMENT LOG</span>
        <div><a href="mailto:SignaaJames@proton.me">EMAIL ↗</a><a href="https://github.com/signaajames" target="_blank" rel="noreferrer">GITHUB ↗</a></div>
      </div>

      <section className="alpha-banner" aria-label="Alternate, currently in alpha">
        <img src="/alt.webp" alt="Alternate" fetchPriority="high" />
        <div className="alpha-banner__status"><span className="ui-label">CURRENT PROJECT</span><span className="status-badge"><i aria-hidden="true" />IN ALPHA</span></div>
      </section>

      <section className="about-panel" aria-labelledby="about-title">
        <span className="ui-label about-panel__label">ABOUT</span>
        <div><h1 id="about-title">Web &amp; game dev.</h1><p>I started programming in 2025. I make things for myself, for friends, and just for fun.</p></div>
        <span className="ui-label about-panel__timezone">UTC+8</span>
      </section>

      <section className="project-library" aria-labelledby="projects-title">
        <div className="library-heading"><h2 className="ui-label" id="projects-title">PROJECT LIBRARY</h2><span className="ui-label">02 ENTRIES</span></div>
        <div className="project-grid">
          {projects.map(project => (
            <article className="project-card" key={project.number}>
              <div className="project-card__top"><span className="ui-label">{project.type}</span><span className="ui-label">/{project.number}</span></div>
              <a className="project-card__preview" href={project.live ?? project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-card__preview-label ui-label">PREVIEW</span>
                <span className="project-card__preview-arrow" aria-hidden="true">↗</span>
              </a>
              <div className="project-card__info"><h3>{project.title}</h3><p>{project.description}</p></div>
              <div className="project-card__actions">
                {project.live && <a href={project.live} target="_blank" rel="noreferrer">LAUNCH <span aria-hidden="true">↗</span></a>}
                <a href={project.github} target="_blank" rel="noreferrer">SOURCE CODE <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
