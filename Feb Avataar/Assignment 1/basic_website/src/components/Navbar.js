import React from 'react'
import Image from "../imageAssets/Rectangle.png"

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
