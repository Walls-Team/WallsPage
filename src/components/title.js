import React from "react"

const Title = ({ titleA, titleB }) => {
  return (
    <h1 className="web_title">
      {titleA}
      <span>{titleB}</span>
    </h1>
  )
}

export default Title
