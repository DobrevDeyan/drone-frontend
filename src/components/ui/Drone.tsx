import gsap from "gsap"
import { useEffect, useRef } from "react"
import AnimatedSVG from "../../assets/drone.svg"

const AnimatedSVGComponent = () => {
  const svgRef = useRef(null)

  useEffect(() => {
    const svgElement = svgRef.current

    const timeline = gsap.timeline()

    gsap.set(svgElement, { opacity: 0, x: -100, y: 100 })

    timeline.to(svgElement, { opacity: 1, x: 0, y: 0, duration: 1, ease: "power2.inOut" })
    timeline.to(svgElement, { y: 50, duration: 0.5, yoyo: true, repeat: -1, ease: "power2.inOut" })
    timeline.to(svgElement, { x: 50, duration: 0.5, yoyo: true, repeat: -1, ease: "power2.inOut" })

    // Stop the animation after 10 seconds
    setTimeout(() => {
      timeline.pause()
    }, 10000)
  }, [])

  return <img ref={svgRef} src={AnimatedSVG} alt="Animated SVG" className="svg-icon" />
}

export default AnimatedSVGComponent
