import React from "react"
import { FaBars } from "react-icons/fa"
import { Link } from "react-scroll"
import { Logo } from "../assets/iconsSvg"

const Navbar = ({ setShow }) => {
  return (
    <nav className="navBar">
      <div className="logoNav">
        <Logo />
      </div>

      <ul className="navBar_links">
        <li>Home</li>
        <li>
          <Link
            activeClass="active"
            to="skills-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active-line"
          >
            Work
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link
            activeClass="active"
            to="team-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active-line"
          >
            Team
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="location-section"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            activeClass="active-line"
          >
            Contact
          </Link>
        </li>
      </ul>
      <FaBars
        className="navbar"
        onClick={() => setShow(prev => (prev = !prev))}
      />
    </nav>
  )
}

export default Navbar
