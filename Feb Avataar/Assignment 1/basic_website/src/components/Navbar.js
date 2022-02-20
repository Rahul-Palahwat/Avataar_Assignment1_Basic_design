import React from 'react'
import Image from "../imageAssets/Avtaarlogo.png"
// import Image from "https://uploads-ssl.webflow.com/607885eca472d65596435fe1/60957d412369ea016bff7a69_Asset%203%404x-p-500.png"

export default function Navbar() {
  return (
    <>
    <nav>
        <div className="logo"><img src={Image} alt="Not available" /></div>
        <div className="froute">ASSIGNMENTS</div>
        <div className="sroute">INTERSNHIP</div>
        <div className="troute">ABOUT US</div>
        <div className="fourthroute">CONTACT US</div>
    </nav>
    </>
  )
}
