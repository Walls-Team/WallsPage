import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Wlogo from "../images/wlogo.svg"

const Header = () => (
  <header className="header">
    <div className="content-line">
      <div className="line"></div>
      <div className="line"></div>
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
