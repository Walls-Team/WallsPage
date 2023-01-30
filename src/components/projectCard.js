import React, { useState } from "react"
import styled from "styled-components"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
const Article = styled.article`
  width: 325px !important;
  height: 300px;
  background-image: url(${props => props.img});
  background-size: auto;
  color: white;
  font-family: "Monserrat";
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  z-index: 10;
  opacity: 0.5;
`

const ProjectCard = ({ name, image }) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Popup
        modal
        trigger={
          <Article img={image} color={"blue"} onClick={() => setVisible(true)}>
            <h3>{name}</h3>
          </Article>
        }
        position="right center"
      >
        <div>{name}</div>
      </Popup>
    </>
  )
}

export default ProjectCard
