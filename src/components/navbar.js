import React from "react"
import { FaBars } from "react-icons/fa"
import { Logo } from "../assets/iconsSvg"



const Navbar = ({ setShow }) => {
  return (
    <nav className="navBar">
      <Logo />

      <ul className="navBar_links">
        <li>Home</li>
        <li>Work</li>

        <li>Team</li>
        <li>Contact</li>
      </ul>
      <FaBars
        className="navbar"
        onClick={() => setShow(prev => (prev = !prev))}
      />
    </nav>
  )
}

export default Navbar
