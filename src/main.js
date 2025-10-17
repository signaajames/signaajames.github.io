import './style.css'
import cat from './Gemini_Generated_Image_ee6xbree6xbree6x-removebg-preview.png'

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

    <img id='cat' src="">

  <div class='content'>
    <p id='sub'>Chrome/firefox based browsers recommended & default zoom (100%), anything more might cause issues or block text & computer recommended instead of phone</p>
    <section id='hero'>
      <h1>I like cats & code.</h1>
      <h3>GMT+8</h3>
      <p>
        Hi, I'm Signaa James, mainly a back-end developer focused on learning & creating minimalist, clean, performant products, code, and visuals.
      </p>
      <section class='buttons'>
        <button id='projectBtn'>View Projects</button>
        <button id='contactBtn'>Contact Me</button>
      </section>
    </section> <!-- end of Hero section -->

    <div class='seperator'></div> <!-- seperator -->
    
    <!-- -->
    <section id='about'>
      <h1>About</h1>
      <section class='content-section'>
        <p>
          I’m Signaa James (or Pgnop), a back-end and front-end developer who started out self-taught before learning through Codedex and Codecademy. I mainly work on web projects.

          I currently use Windows 10 since my computer doesn’t support Windows 11, but I’ve also started dual booting into Linux to learn about it a little bit.

          I eventually want to find a team, start a company, and keep building cool things.
        </p>

      </section>
    </section><!-- end of about section -->
    <!-- -->
    
    <div class='seperator' style='height: 2px;'></div> <!-- seperator -->
    
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
    
    <div class='seperator' style='height: 2px;'></div> <!-- seperator -->
    
    <!-- -->
    <section id='projects'>
      <h1>Projects</h1>
      <section class='content-section'>

      </section>
    </section> <!-- end of projects section -->
    <!-- -->
    
    <div class='seperator' style='height: 2px;'></div> <!-- seperator -->

    <!-- -->
    <section id='contact'>
      <h1>Contact</h1>
      <section class='content-section'>

      </section>
    </section> <!-- end of contact section -->
    <!-- -->
  </div>
`

document.getElementById('cat').src = cat