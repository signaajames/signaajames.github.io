import './style.css'
import cat from './Gemini_Generated_Image_ee6xbree6xbree6x-removebg-preview.png'
import catinerSS from './catinerSS.png'

document.querySelector('#app').innerHTML = /*html*/`
  <div class='header'>
    <h2 class='name'>SignaaJames</h2>
    <p class='bio'>Back-end Engineer & Front-end Engineer</p>
  </div>

  <div class='navigation'>
    <section class='navigations'>
      <a class='hrefs' href="#about">About</a>
      <a class='hrefs' href="#skills">Skills</a>
      <a class='hrefs' href="#projects">Projects</a>
      <a class='hrefs' href="#contact">Contact</a>
    </section>
  </div>

  <div class='content'>
    <section id='hero'>
      <h1>I like cats & code.</h1>
      <h3>UTC+8</h3>
      <p>
        Back-end and front-end engineer building simple, well organized code and interfaces.
      </p>
      <section class='buttons'>
        <a href="#projects">
          <button id='projectBtn'>View Projects</button>
        </a>
        <a href="#contact">
          <button id='contactBtn'>Contact Me</button>
        </a>
      </section>
    </section> <!-- end of Hero section -->

    <div class='seperator'></div> <!-- seperator -->
    
    <!-- -->
    <!-- <section id='about'>
      <h1>About</h1>
      <section class='content-section'>
        <p>
          Hi, I’m Signaa James. I'm a back-end and front-end engineer, though I focus more on back-end. I have under one year of experience and I try to focus on performance, simplicity, and clean code.
        </p>

      </section>
    </section> -->
    <!-- -->
    
    <!-- <div class='seperator' style='height: 2px;'></div> seperator -->
    
    <!-- -->
    <section id='skills'>
      <h1>Skills</h1>
      <section class='content-section'>
        <h3>Frontend</h3>
        <section class='skill-list'>
          <div class='skillCard'>HTML</div>
          <div class='skillCard'>JavaScript</div>
          <div class='skillCard'>CSS</div>
        </section>
        <h3>Tools</h3>
        <section class='skill-list'>
          <div class='skillCard'>Git</div>
          <div class='skillCard'>Vite</div>
        </section>
      </section>
    </section> <!-- end of experience section -->
    <!-- -->
    
    <div class='seperator' style='height: 2px;'></div> <!-- seperator -->
    
    <!-- -->
    <section id='projects'>
      <h1>Projects</h1>
      <section class='content-section projects-grid'>
        <article class='projectCard'>
          <img src="" alt="Screenshot of the Catinder project" class='projectImg' loading='lazy'>
          <div class='projectDetails'>
            <p class='projectName'>Catinder</p>
            <p class='projectDesc'>Catinder is a small single-page web app I started as a project after watching the first few seconds of that one project video from "The Coding Sloth" on Youtube. It’s a Vite-based prototype inspired by the idea of swiping through cat profiles.</p>
            <section id='aButtons'>
              <a href="https://github.com/signaajames/Catinder" class='projectUrl' target='_blank' rel='noopener noreferrer'>View on GitHub</a>
              <a href="https://signaajames.github.io/catinder/" class='projectUrl' target='_blank' rel='noopener noreferrer'>View now</a>
            </section>
          </div>
        </article>
      </section>
    </section> <!-- end of projects section -->
    <!-- -->
    
    <div class='seperator' style='height: 2px;'></div> <!-- seperator -->

    <!-- -->
    <section id='contact'>
      <h1>Contact</h1>
      <section class='content-section'>
        <p>Contact at <a class='mail' href="mailto:SignaaJames@proton.me">SignaaJames@proton.me</a> or <a class='mail' href="mailto:penguingnop@gmail.com">penguingnop@gmail.com</a></p>
        <!-- <form class='contact-form'>
          <label class='contact-label' for='contactName'>Name</label>
          <input class='contact-input' type='text' name='name' id='contactName' placeholder='Your name' required>

          <label class='contact-label' for='contactEmail'>Email</label>
          <input class='contact-input' type='email' name='email' id='contactEmail' placeholder='you@example.com' required>

          <label class='contact-label' for='contactMessage'>Message</label>
          <textarea class='contact-textarea' name='message' id='contactMessage' rows='5' placeholder='Say hello...'></textarea>

          <button type='submit' class='contact-submit'>Send Message</button>
        </form> -->
      </section>
    </section> <!-- end of contact section -->
    <!-- -->
  </div>

  <footer class='footer'>
    <section class='footer-top'>
      <div class='footer-brand'>
        <h2>SignaaJames</h2>
      </div>
      <nav class='footer-nav'>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>
      <div class='footer-social'>
        <a href='mailto:SignaaJames@proton.me' class='footer-link' aria-label='Email Signaa James'>
          Email
        </a>
        <a href='https://github.com/signaajames' class='footer-link' target='_blank' rel='noreferrer' aria-label='GitHub profile'>
          <svg id='github' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-github'>
            <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
          </svg>
        </a>
      </div>
    </section>
    <div class='footer-meta'>
      <span>&copy; ${new Date().getFullYear()} Signaa James. All rights reserved.</span>
    </div>
  </footer>
`

const app = document.getElementById('app')


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let projectImg = document.getElementsByClassName('projectImg')[0]

projectImg.src = catinerSS

