import './style.css'

//experience years
let experience = '1 year'

document.querySelector('#app').innerHTML = /*html*/`
  <div class='header'>
    <h2 class='name'>Signaa James</h1>
    <p class='bio'>Back-end Engineer</p>
  </div>

  <div class='navigation'>
    <a href="">Home</a>
    <a href="">Blog</a>
    <a href="">About</a>
    <a href="">Experience</a>
    <a href="">Projects</a>
    <a href="">Contact</a>
  </div>

  <div class='content'>
    <section id='hero'>
      <h1>I like cats & code.</h1>
      <h3>GMT+8</h3>
      <p>
        Hi, I'm Signaa James, a back-end developer with less than ${experience} of experience. Focused on learning & creating minimalist, clean, performant products.
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
    </section><!-- end of about section -->
    <!-- -->
    
    <div class='seperator'></div> <!-- seperator -->
    
    <!-- -->
    <section id='experience'>

    </section> <!-- end of experience section -->
    <!-- -->
    
    <div class='seperator'></div> <!-- seperator -->
    
    <!-- -->
    <section id='projects'>

    </section> <!-- end of projects section -->
    <!-- -->
    
    <div class='seperator'></div> <!-- seperator -->

    <!-- -->
    <section id='contact'>

    </section> <!-- end of contact section -->
    <!-- -->
  </div>
`