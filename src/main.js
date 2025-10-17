import './style.css'

async function getExperienceYears(params) {
  
}
const response = await fetch('./data.json');
const data = await response.json();

console.log(data);


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
      <p>I'm Signaa James, a back-end engineer with </p>
    </section>
  </div>
`