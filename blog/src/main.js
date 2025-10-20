import '../style.css'

let charHomeTextArray = []

const initBlog = () => {
  const blog = document.querySelector('#blog')
  if (!blog) return

  blog.innerHTML = /*html*/`
    <div class='header'>
      <h2 class='name'>SignaaJames</h2>
      <p class='bio'>Back-end Engineer & Front-end Engineer</p>
    </div>

    <div class='navigation'>
      <section class='navigations'>
        <a class='hrefs' href="/" id='home'>Blog</a>
        <a class='hrefs' href="#about">About</a>
        <a class='hrefs' href="#skills">Skills</a>
        <a class='hrefs' href="#projects">Projects</a>
        <a class='hrefs' href="#contact">Contact</a>
      </section>
    </div>

    <div class='content'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officiis, debitis eius ut ea sequi quidem hic fugiat, delectus nisi ex iure reprehenderit velit rem ad et molestiae unde inventore!</p>
    </div>
  `

  const homeLink = document.getElementById('home')
  if (!homeLink) return

  const homeText = homeLink.innerHTML
  charHomeTextArray = homeText.split('')

  changeText()
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBlog)
} else {
  initBlog()
}

async function changeText() {
  console.log(charHomeTextArray)
}
