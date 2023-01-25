import React from "react"
import { ArrowLeft } from "../assets/iconsSvg"
import { Django, Python,Java,ReactLogo,Vuejs,Angular,Photoshop,Wordpress } from "../assets/logosTec"
import ProjectCard from "../components/projectCard"
import { ProjectsData } from "../mockData"


const TecnologiesWrapper=()=>{
  return(
    <div className="tec_wrapper">
     <h1>20+</h1>
     <p>Tecnologías usadas</p>
    </div>
  )
}

export default function Projects() {

  

  return (
    <div className="content-projects" id="skills-section">
      <section className="projects__section-one">
        <TecnologiesWrapper/>
        <ArrowLeft/>
        <article className="projects__section_logos">
        <Python/>
        <Django/>
        <ReactLogo/>
        <Vuejs/>
        <Angular/>
        <Photoshop/>
        <Wordpress/>
        <Java/>
        </article>
      </section>
      <section>
          {ProjectsData.map(item=>{
            return(
              <ProjectCard name={item.title}/>
            )
          })

          }
      </section>
    </div>
  )
}






