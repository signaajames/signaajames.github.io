import { useEffect, useRef, useState } from 'react'
import Portfolio from './Portfolio'
import wordmark from './signaa-wordmark.svg'
import './App.css'

const vertexSource = `
attribute vec2 position;
varying vec2 uv;
void main() {
  uv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`

const fragmentSource = `
precision highp float;
varying vec2 uv;
uniform sampler2D lettering;
uniform vec2 resolution;
uniform float time;
uniform float motion;
float noise(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}
float ink(vec2 p) {
  if (p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0) return 0.0;
  return texture2D(lettering, p).r;
}
void main() {
  vec2 p = uv;
  vec2 pixel = 1.0 / resolution;
  // Every row keeps changing with subtle, random tape jitter.
  float tapeFrame = floor(time * 9.0);
  float row = floor(uv.y * resolution.y / 4.0);
  float rowJitter = noise(vec2(row, tapeFrame)) - 0.5;
  p.x += rowJitter * pixel.x * 0.9 * motion;
  float trackingCenter = noise(vec2(floor(time * 2.0), 71.0));
  float tracking = 1.0 - smoothstep(0.001, 0.003, abs(uv.y - trackingCenter));
  float trackingActive = step(0.94, noise(vec2(tapeFrame, 19.0)));
  p.x += tracking * trackingActive * pixel.x * 2.0 * motion;
  vec3 color = vec3(ink(p));
  // The source texture already contains a smoothly blurred phosphor halo.
  color *= 0.98;
  color *= 0.98 + 0.02 * sin(time * 8.0) * motion;
  gl_FragColor = vec4(color, 1.0);
}`

function SignalScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)
  const [fallback, setFallback] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    let disposed = false
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false })
    if (!gl) {
      return
    }
    let frame = 0
    const shaders: WebGLShader[] = []
    const program = gl.createProgram()
    const buffer = gl.createBuffer()
    const texture = gl.createTexture()
    if (!program || !buffer || !texture) {
      setFallback(true)
      return
    }
    const compile = (type: number, code: string) => {
      const shader = gl.createShader(type)
      if (!shader) throw new Error('Unable to create CRT shader')
      shaders.push(shader)
      gl.shaderSource(shader, code)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) ?? 'CRT shader compilation failed')
      }
      gl.attachShader(program, shader)
    }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const source = document.createElement('canvas')
    const ctx = source.getContext('2d')
    let resize = () => {}
    let draw = () => {}
    const onVisibility = () => {
      cancelAnimationFrame(frame)
      if (!document.hidden) draw()
    }
    const onMotion = () => {
      cancelAnimationFrame(frame)
      draw()
    }
    const onContextLost = (event: Event) => {
      event.preventDefault()
      cancelAnimationFrame(frame)
      setReady(false)
      setFallback(true)
    }
    const start = async () => {
      try {
        const logo = new Image()
        logo.src = wordmark
        await logo.decode()
        if (disposed) return
        if (!ctx) throw new Error('Unable to create lettering texture')
        compile(gl.VERTEX_SHADER, vertexSource)
        compile(gl.FRAGMENT_SHADER, fragmentSource)
        gl.linkProgram(program)
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error('CRT shader linking failed')
        gl.useProgram(program)
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW)
        const position = gl.getAttribLocation(program, 'position')
        gl.enableVertexAttribArray(position)
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)
        gl.activeTexture(gl.TEXTURE0)
        gl.bindTexture(gl.TEXTURE_2D, texture)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true)
        gl.uniform1i(gl.getUniformLocation(program, 'lettering'), 0)
        const resolution = gl.getUniformLocation(program, 'resolution')
        const time = gl.getUniformLocation(program, 'time')
        const motion = gl.getUniformLocation(program, 'motion')
        draw = () => {
          if (disposed || gl.isContextLost()) return
          gl.uniform1f(time, reducedMotion.matches ? 0 : performance.now() / 1000)
          gl.uniform1f(motion, reducedMotion.matches ? 0 : 1)
          gl.drawArrays(gl.TRIANGLES, 0, 6)
          if (!reducedMotion.matches && !document.hidden) frame = requestAnimationFrame(draw)
        }
        resize = () => {
          const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
          const width = Math.round(canvas.clientWidth * ratio)
          const height = Math.round(canvas.clientHeight * ratio)
          if (!width || !height) return
          canvas.width = source.width = width
          canvas.height = source.height = height
          ctx.fillStyle = '#000'
          ctx.fillRect(0, 0, width, height)
          const aspect = logo.naturalWidth / logo.naturalHeight
          const logoWidth = Math.min(width * 0.76, height * 0.38 * aspect, 1300 * ratio)
          const logoHeight = logoWidth / aspect
          ctx.shadowColor = 'rgba(255, 255, 255, 0.18)'
          ctx.shadowBlur = 22 * ratio
          ctx.drawImage(logo, (width - logoWidth) / 2, (height - logoHeight) / 2, logoWidth, logoHeight)
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source)
          gl.viewport(0, 0, width, height)
          gl.uniform2f(resolution, width, height)
          cancelAnimationFrame(frame)
          draw()
        }
        window.addEventListener('resize', resize)
        document.addEventListener('visibilitychange', onVisibility)
        reducedMotion.addEventListener('change', onMotion)
        canvas.addEventListener('webglcontextlost', onContextLost)
        resize()
        setReady(true)
      } catch (error) {
        console.warn('Using static SIGNAA lettering:', error)
        if (!disposed) setFallback(true)
      }
    }
    void start()
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      reducedMotion.removeEventListener('change', onMotion)
      canvas.removeEventListener('webglcontextlost', onContextLost)
      gl.deleteTexture(texture)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
      shaders.forEach(shader => gl.deleteShader(shader))
    }
  }, [])
  return (
    <div className={`signal${ready ? ' signal--ready' : ''}${fallback ? ' signal--fallback' : ''}`} aria-hidden="true">
      <img className="signal__title" src={wordmark} alt="" />
      <canvas className="signal__screen" ref={canvasRef} aria-hidden="true" />
    </div>
  )
}

function App() {
  const [opening, setOpening] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const revealRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const alignScanlines = () => {
      document.documentElement.style.setProperty('--crt-pixel', `${1 / (window.devicePixelRatio || 1)}px`)
    }
    alignScanlines()
    window.addEventListener('resize', alignScanlines)
    return () => window.removeEventListener('resize', alignScanlines)
  }, [])

  const finishOpening = () => {
    setRevealed(true)
  }

  useEffect(() => {
    if (revealed) revealRef.current?.focus({ preventScroll: true })
  }, [revealed])

  return (
    <div className={`gate${opening ? ' gate--open' : ''}`}>
      <main className="gate__reveal" ref={revealRef} tabIndex={-1} aria-label="Portfolio" inert={!revealed}>
        <Portfolio scrollContainerRef={revealRef} />
      </main>
      {!revealed && (
        <>
          <div className="gate__panel gate__panel--left" onTransitionEnd={event => {
            if (event.target === event.currentTarget && event.propertyName === 'transform') finishOpening()
          }}><div className="gate__panel-screen"><SignalScreen /></div></div>
          <div className="gate__panel gate__panel--right"><div className="gate__panel-screen"><SignalScreen /></div></div>
        </>
      )}
      {!opening && (
        <h1 className="gate__heading">
          <button className="gate__trigger" onClick={() => setOpening(true)} aria-label="SIGNAA — open portfolio">
            <span className="sr-only">SIGNAA</span>
          </button>
        </h1>
      )}
      <div className="crt-overlay" aria-hidden="true" />
    </div>
  )
}
export default App
