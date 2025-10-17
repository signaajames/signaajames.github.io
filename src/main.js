import './style.css'

//experience years
let experience = '1 year'

document.querySelector('#app').innerHTML = /*html*/`
  <div class='header'>
    <h2 class='name'>Signaa James</h1>
    <p class='bio'>Back-end engineer</p>
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
      <h1>I like cats & code</h1>
      <p>
        Hi, I'm Signaa James, a back-end developer with less than ${experience} of experience. I first started teaching myself how to code for a few weeks, and later moved on to Codedex to learn the basics of JavaScript, Python, HTML, CSS, and Java. I'm currently continuing on Codecademy on the back-end path. In the future, I hope to build a team and start my own company.
      </p>

    </section>
  </div>
`