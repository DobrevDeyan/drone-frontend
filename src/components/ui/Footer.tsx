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
        <div id="footer">
          <div className="footer-logo">
            <h1>MEGA.DRONES</h1>
          </div>
          <div className="grid grid-cols-11 grid-rows-3 w-full">
            <div className="col-span-3 bg-slate-700 row-span-1">
              <p>website</p>
            </div>
            <div className="col-span-4 bg-slate-700 row-span-1 social-hook">
              <a href="#">deyandobrev.com</a>
            </div>
            <div className="col-span-1 bg-slate-700 row-span-1 social-hook">
              <a href="#">
                <IconInstagram></IconInstagram>
              </a>
            </div>
            <div className="col-span-1 bg-slate-700 row-span-1 social-hook">
              <a href="#">
                <img src={TwitterXIcon} alt="x-twitter-logo" className="x-logo" />
              </a>
            </div>
            <div className="col-span-2 bg-slate-700 row-span-1">
              <p>@deyandobrev</p>
            </div>

            <div className="col-span-2 bg-slate-700 row-span-1">
              <p>email</p>
            </div>
            <div className="col-span-9 bg-slate-700 row-span-1 social-hook">
              <a href="#">dobrev.de@gmail.com</a>
            </div>

            <div className="col-span-4 bg-slate-700 row-span-1">
              <p>facebook</p>
            </div>
            <div className="col-span-6 bg-slate-700 row-span-1 social-hook">
              <a href="#">facebook.com/deyan</a>
            </div>
            <div className="col-span-1 bg-slate-700 row-span-1 social-hook">
              <a href="#">
                <IconFacebook></IconFacebook>
              </a>
            </div>
          </div>
        </div>
        <p className="designed">Designed & Built by Deyan Dobrev</p>
      </Container>
    </ContainerFullScreen>
  )
}
