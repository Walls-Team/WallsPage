import React from "react"
import PropTypes from "prop-types"

const Header = () => (
  <>
    <header className="header">
      <div className="content-line"></div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
