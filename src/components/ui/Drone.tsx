import gsap from "gsap"
import { useEffect, useRef } from "react"
import AnimatedSVG from "../../assets/123.png"

const AnimatedSVGComponent = () => {
  const svgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const svgElement = svgRef.current

    if (!svgElement) {
      return
    }

    const timeline = gsap.timeline()

    gsap.set(svgElement, { opacity: 0, x: -500, y: 300 }) // Starting position off-screen

    timeline.to(svgElement, { opacity: 1, x: 0, y: 300, duration: 2, ease: "power2.inOut" })
    timeline.to(svgElement, { y: 0, duration: 2, ease: "power2.inOut" })
    timeline.to(svgElement, { x: 300, duration: 2, ease: "power2.inOut" })
    timeline.to(svgElement, { x: 550, duration: 2, ease: "power2.inOut" })
    timeline.to(svgElement, { x: 1500, duration: 2, ease: "power2.inOut" })
    timeline.to(svgElement, { x: 1500, duration: 2, ease: "power2.inOut" })
    timeline.to(svgElement, { x: 1500, duration: 2, ease: "power2.inOut" })
    timeline.to(svgElement, { x: 1500, duration: 2, ease: "power2.inOut" })
    timeline.to(svgElement, { x: 1500, duration: 2, ease: "power2.inOut" })
    timeline.to(svgElement, { x: 1500, duration: 2, ease: "power2.inOut" })

    // Remove element from DOM after animation finishes
    timeline.to(svgElement, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        svgElement.remove()
        svgElement.style.display = "none"
      },
    })

    // Stop the animation after 10 seconds
    setTimeout(() => {
      timeline.pause()
    }, 10000)
  }, [])

  return <img ref={svgRef} src={AnimatedSVG} alt="Animated SVG" className="svg-icon" />
}

export default AnimatedSVGComponent
