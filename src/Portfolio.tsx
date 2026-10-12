import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, KeyboardEvent, ReactNode, RefObject } from 'react'
import aboutDrawing from './assets/select-screen/about.webp'
import alternateWordmark from './assets/select-screen/alternate.webp'
import calculatorImage from './assets/projects/4bit-calculator.png'
import cattinderImage from './assets/projects/cattinder.png'
import editorImage from './assets/projects/love2d-editor.png'
import './Portfolio.css'

type ProjectGroup = 'apps' | 'designs'

type Project = {
  id: string
  group: ProjectGroup
  label: string
  title: string
  ratio: number
  art: ReactNode
  text: string
}

const projects: Project[] = [
  {
    id: 'calculator',
    group: 'apps',
    label: 'Updated 2 months ago',
    title: '4bit Calculator',
    ratio: 960 / 360,
    art: <img className="project-image" src={calculatorImage} width="960" height="360" alt="4bit Calculator with a binary hand and the calculation 2 + 3 × 4 = 14" />,
    text: 'A LÖVE calculator controlled by four binary fingers',
  },
  {
    id: 'cattinder',
    group: 'apps',
    label: 'Updated 5 months ago',
    title: 'Cattinder',
    ratio: 960 / 360,
    art: <img className="project-image" src={cattinderImage} width="960" height="360" alt="Cattinder with a cat profile card and swipe controls" />,
    text: 'Tinder style app where you swipe through random cats with generated names, bios, and locations',
  },
  {
    id: 'editor',
    group: 'apps',
    label: 'Updated 3 months ago',
    title: 'Love2d Editor',
    ratio: 960 / 360,
    art: <img className="project-image" src={editorImage} width="960" height="360" alt="Love2d Text Editor displaying hello, world with a text cursor" />,
    text: 'A text editor made in a game engine',
  },
]

type PortfolioProps = {
  scrollContainerRef: RefObject<HTMLElement | null>
}

export default function Portfolio({ scrollContainerRef }: PortfolioProps) {
  const [currentGroup, setCurrentGroup] = useState<ProjectGroup>('apps')
  const measuredGroupRef = useRef<ProjectGroup>(currentGroup)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const reelRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLElement>(null)
  const pairRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLSpanElement>(null)
  const drawingRef = useRef<HTMLImageElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)

  // The parent scroll-container ref is attached before passive effects run.
  useEffect(() => {
    const container = scrollContainerRef.current
    const portfolio = portfolioRef.current
    const reel = reelRef.current
    const track = trackRef.current
    const footer = footerRef.current
    const pair = pairRef.current
    const title = titleRef.current
    const drawing = drawingRef.current
    const description = descriptionRef.current
    const heading = title?.parentElement
    const slab = heading?.parentElement
    if (!container || !portfolio || !reel || !track || !footer || !pair || !title || !drawing || !description || !heading || !slab) return

    let distance = 0
    let frame = 0
    let disposed = false

    const update = () => {
      frame = 0
      const top = reel.getBoundingClientRect().top - container.getBoundingClientRect().top
      const progress = distance > 0 ? Math.min(1, Math.max(0, -top / distance)) : 0
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`
    }

    // Keep the original title/drawing fit at both breakpoints, using the gate's scroll viewport.
    const measure = () => {
      if (disposed) return
      heading.style.fontSize = ''
      drawing.style.height = ''
      slab.style.height = ''
      pair.style.removeProperty('--tw')
      pair.style.removeProperty('--sw')
      const horizontal = getComputedStyle(slab).display === 'contents'
      const naturalWidth = title.offsetWidth
      const rowWidth = pair.parentElement?.clientWidth ?? container.clientWidth

      if (horizontal) {
        const minimumImage = 160
        const imageWidth = drawing.offsetHeight * 1000 / 960
        const availableImage = rowWidth - naturalWidth
        if (availableImage < imageWidth) {
          drawing.style.height = `${Math.floor(Math.max(availableImage, minimumImage) * 960 / 1000)}px`
          const room = rowWidth - minimumImage
          if (availableImage < minimumImage && room > 120 && naturalWidth > 0) {
            heading.style.fontSize = `${parseFloat(getComputedStyle(heading).fontSize) * room / naturalWidth * 0.995}px`
          }
        }
        pair.style.setProperty('--tc', `${Math.floor(Math.min(title.offsetWidth, Math.max(rowWidth - minimumImage, 120)))}px`)
      } else {
        const styles = getComputedStyle(heading)
        const paddingLeft = parseFloat(styles.paddingLeft)
        const paddingRight = parseFloat(styles.paddingRight)
        pair.style.setProperty('--tw', `${naturalWidth}px`)
        pair.style.setProperty('--sw', `${Math.ceil(naturalWidth + paddingLeft + paddingRight + 1)}px`)
        slab.style.height = `${Math.min(slab.offsetHeight, Math.round((slab.offsetWidth / 1.04 + 44) / 0.88 + 8))}px`
        const available = slab.offsetWidth - paddingLeft
        if (available > 0 && naturalWidth > available) {
          heading.style.fontSize = `${parseFloat(styles.fontSize) * available / naturalWidth * 0.995}px`
          pair.style.setProperty('--tw', `${Math.floor(available)}px`)
        }
      }

      description.style.width = ''
      const range = document.createRange()
      range.selectNodeContents(description)
      const rects = Array.from(range.getClientRects())
      if (rects.length) {
        const textWidth = Math.max(...rects.map(rect => rect.right)) - Math.min(...rects.map(rect => rect.left))
        pair.style.setProperty('--pw', `${Math.ceil(textWidth)}px`)
        if (!horizontal) description.style.width = `${Math.ceil(textWidth + 2)}px`
      }

      distance = Math.max(0, track.offsetWidth - container.clientWidth)
      reel.style.height = `${container.clientHeight - footer.offsetHeight + distance}px`
      update()
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(container)
    container.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    document.fonts.addEventListener('loadingdone', measure)
    drawing.addEventListener('load', measure)
    footer.querySelector('img')?.addEventListener('load', measure)
    void document.fonts.ready.then(measure)
    measure()
    if (measuredGroupRef.current !== currentGroup) {
      // This page scrolls inside the gate, so reset that container to the new reel's start.
      measuredGroupRef.current = currentGroup
      container.scrollTo({
        top: container.scrollTop + reel.getBoundingClientRect().top - container.getBoundingClientRect().top,
        behavior: 'instant',
      })
      update()
    }

    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      document.fonts.removeEventListener('loadingdone', measure)
      drawing.removeEventListener('load', measure)
      footer.querySelector('img')?.removeEventListener('load', measure)
    }
  }, [scrollContainerRef, currentGroup])

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    let nextGroup: ProjectGroup
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      nextGroup = currentGroup === 'apps' ? 'designs' : 'apps'
    } else if (event.key === 'Home') {
      nextGroup = 'apps'
    } else if (event.key === 'End') {
      nextGroup = 'designs'
    } else {
      return
    }
    event.preventDefault()
    setCurrentGroup(nextGroup)
    event.currentTarget.parentElement?.querySelector<HTMLButtonElement>(`[data-group="${nextGroup}"]`)?.focus({ preventScroll: true })
  }

  return (
    <div className="portfolio" ref={portfolioRef}>
      <h1 className="sr">Work</h1>
      <section className="opening" aria-labelledby="about-title">
        <article className="row r-about">
          <div className="pair" ref={pairRef}>
            <div className="slab">
              <img className="drawing" ref={drawingRef} src={aboutDrawing} width="1000" height="960" alt="A hand-drawn sketch of a character sitting down, in white line art on black" />
              <h2 id="about-title"><span ref={titleRef} style={{ whiteSpace: 'nowrap' }}>Me Signaa</span></h2>
            </div>
            <p ref={descriptionRef}>I love making 2D games/visuals in Lua and LÖVE2D, with a soft spot for analog visuals. For the web, I design minimal, clean interfaces to my eyes and explore styles I don’t see often. I started programming in early 2025 with Python trying to make cool vfx. Now I mostly build solo, for myself and friends, making things that I want in a way I like.</p>
          </div>
        </article>
      </section>

      <section className="reel" ref={reelRef} aria-label="Selected work">
        <div className="frame">
          <div className="tabs" role="tablist" aria-label="Kind of work">
            <button type="button" role="tab" id="apps-tab" data-group="apps" aria-selected={currentGroup === 'apps'} aria-controls="work-track" tabIndex={currentGroup === 'apps' ? 0 : -1} onClick={() => setCurrentGroup('apps')} onKeyDown={onTabKeyDown}>Apps</button>
            <span className="sep" aria-hidden="true">/</span>
            <button type="button" role="tab" id="designs-tab" data-group="designs" aria-selected={currentGroup === 'designs'} aria-controls="work-track" tabIndex={currentGroup === 'designs' ? 0 : -1} onClick={() => setCurrentGroup('designs')} onKeyDown={onTabKeyDown}>Designs</button>
          </div>
          <div className="track" id="work-track" role="tabpanel" aria-labelledby={`${currentGroup}-tab`} tabIndex={0} ref={trackRef}>
            {projects.filter(project => project.group === currentGroup).map(project => (
              <article className={`row r-${project.id}`} key={project.id} style={{ '--arn': project.ratio } as CSSProperties}>
                <div className="slab">
                  {project.art}
                  <span className="tab">{project.label}</span>
                  <h2>{project.title}</h2>
                </div>
                <p>{project.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="next" ref={footerRef}>
        <img src={alternateWordmark} width="1200" height="218" alt="ALTERNATE, the title of the upcoming project" />
        <span className="soon">In alpha</span>
      </footer>
    </div>
  )
}
