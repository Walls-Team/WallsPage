import React from "react"
import PropTypes from "prop-types"
import Wlogo from "../images/wlogo.svg"
import { Link } from "react-scroll"

const Header = () => (
  <header className="header">
    <div className="content-line">
      <Link
        activeClass="active"
        to="home-setcion"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        activeClass="active-line"
      >
        <div className="line"></div>
      </Link>
      <Link
        activeClass="active"
        to="skills-section"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        activeClass="active-line"
      >
        <div className="line"></div>
      </Link>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
