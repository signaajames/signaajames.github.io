import './style.css'

document.querySelector('#app').innerHTML = /*html*/`
  <div class='header'>
    <h2 class='name'>SignaaJames</h2>
    <p class='bio'>Back-end Engineer & Front-end Engineer</p>
  </div>

  <div class='navigation'>
    <a href="">Home</a>
    <a href="">Blog</a>
    <a href="">About</a>
    <a href="">Skills</a>
    <a href="">Projects</a>
    <a href="">Contact</a>
  </div>

  <div class='content'>
    <section id='hero'>
      <h1>I like cats & code.</h1>
      <h3>GMT+8</h3>
      <p>
        Hi, I'm Signaa James, mainly a back-end developer focused on learning & creating minimalist, clean, performant products, code, and visuals.
      </p>
      <section class='buttons'>
        <button>View Projects</button>
        <button>Contact Me</button>
      </section>
    </section> <!-- end of Hero section -->

    <div class='seperator'></div> <!-- seperator -->
    
    <!-- -->
    <section id='about'>
      <h1>About</h1>
      <section class='content-section'>
        <h3>Past</h3>
        <p>I started coding since I was 12, I wanted to make games and web apps, but I didn't have the skill back then, nor the patience. Evnentually, I actually started to learn JavaScript, which I found fun. I took some courses online, paid and free, to learn the basics of Java, JavaScript, Python, HTML, and CSS.</p>
        <h3>Present</h3>
        <p>Currently I'm a back-end and front-end engineer with less than 1 year of experience. I belive in minimal abstractions and clean interfaces between humans and machines.</p>
        <h3>Future</h3>
        <p>In the future, I'm excited to see how the industry evolves. I also want to find a team, and start a company.</p>
      </section>
    </section><!-- end of about section -->
    <!-- -->
    
    <div class='seperator'></div> <!-- seperator -->
    
    <!-- -->
    <section id='skills'>
      <h1>Skills</h1>
      <section class='content-section'>
        <h3>Frontend</h3>
        <section class='skill-list'>
          <div class='skillCard'>HTML</div>
          <div class='skillCard'>JavaScript</div>
          <div class='skillCard'>React</div>
        </section>
        <h3>Styling</h3>
        <section class='skill-list'>
          <div class='skillCard'>CSS</div>
        </section>
        <h3>Other</h3>
        <section class='skill-list'>
          <div class='skillCard'>Git</div>
        </section>
      </section>
    </section> <!-- end of experience section -->
    <!-- -->
    
    <div class='seperator'></div> <!-- seperator -->
    
    <!-- -->
    <section id='projects'>
      <h1>Projects</h1>
      <section class='content-section'>

      </section>
    </section> <!-- end of projects section -->
    <!-- -->
    
    <div class='seperator'></div> <!-- seperator -->

    <!-- -->
    <section id='contact'>
      <h1>Contact</h1>
      <section class='content-section'>

      </section>
    </section> <!-- end of contact section -->
    <!-- -->
  </div>
`