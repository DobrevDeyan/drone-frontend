import { gsap } from "gsap"
import React, { useEffect, useRef } from "react"
import SplitType from "split-type"

export const Logo: React.FC = () => {
  const siteLogoRef = useRef(null)

  useEffect(() => {
    const siteLogo = siteLogoRef.current
    if (siteLogo) {
      const logo = new SplitType(siteLogo, {
        types: "chars",
      })

      gsap.to(logo.chars, {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      })
    }
  }, [])

  return (
    <>
      <a href="">
        <h1 className="company_title select-none" ref={siteLogoRef}>
          MEGA.DRONES
        </h1>
      </a>
    </>
  )
}
