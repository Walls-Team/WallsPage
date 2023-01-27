import React from "react"
import styled from "styled-components"

const Article = styled.article`
  width: 325px !important;
  height: 329px;
  background-image: url(${props => props.img});
  background-size: auto;
  color: white;
  font-family: "Monserrat";
  display: flex;
  justify-content: center;
  align-items: center;
 
`

const ProjectCard = ({ name, image }) => {
  return (
    <Article img={image} color={"blue"}>
      <h3>{name}</h3>
    </Article>
  )
}

export default ProjectCard
