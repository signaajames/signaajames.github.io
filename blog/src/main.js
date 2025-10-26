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
        <a class='hrefs' href="/" id='home'>Home</a>
      </section>
    </div>

    <div class='content'>
        <div class='BlogCard'>
            <h2>Lorem ipsum (Test to see if blog is working, not actual blog.)</h2>
            <p class='date'>October 15, 2025</p>
            <p class='shortContent'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro rem eius esse repellat veniam excepturi vitae totam. Autem voluptatum earum debitis iure aperiam molestias, neque eveniet quam officia, quidem necessitatibus?</p>
            <a class='readMore' href='./Lorem-ipsum'>Read more...</a>
        </div>

        <div class='BlogCard'>
            <h2>Choosing Linux Distros by Category</h2>
            <p class='date'>October 26, 2025</p>
            <p class='shortContent'></p>
            <a class='readMore' href='./choosing-a-linux-distro'>Read more...</a>
        </div>
    </div>
  `

}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBlog)
} else {
  initBlog()
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

