// import React from "react"

import IconFacebook from "@/assets/logos/Facebook"
import IconInstagram from "@/assets/logos/Instagram"
import TwitterXIcon from "../../assets/logos/Twitter X Icon.svg"
import Container from "./Container"
import ContainerFullScreen from "./ContainerFullScreen"

export const Footer = () => {
  return (
    <ContainerFullScreen>
      <Container>
        
      </Container>
      <Container>
        <div id="footer">
          <div className="footer-logo">
            <h1>MEGA.DRONES</h1>
          </div>
          <div className="grid grid-cols-11 grid-rows-3 w-full">
            <div className="col-span-3 bg-slate-700 row-span-1">website</div>
            <div className="col-span-4 bg-slate-700 row-span-1">deyandobrev.com</div>
            <div className="col-span-1 bg-slate-700 row-span-1">
              <IconInstagram></IconInstagram>
            </div>
            <div className="col-span-1 bg-slate-700 row-span-1">
              <img src={TwitterXIcon} alt="x-twitter-logo" className="x-logo" />
            </div>
            <div className="col-span-2 bg-slate-700 row-span-1">@deyandobrev</div>

            <div className="col-span-2 bg-slate-700 row-span-1">email</div>
            <div className="col-span-9 bg-slate-700 row-span-1">dobrev.de@gmail.com</div>

            <div className="col-span-4 bg-slate-700 row-span-1">facebook</div>
            <div className="col-span-6 bg-slate-700 row-span-1">facebook.com/deyan</div>
            <div className="col-span-1 bg-slate-700 row-span-1">
              <IconFacebook></IconFacebook>
            </div>
          </div>
        </div>
      </Container>
    </ContainerFullScreen>
  )
}
