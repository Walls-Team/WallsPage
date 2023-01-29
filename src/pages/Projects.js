import React from "react"
import { ArrowLeft } from "../assets/iconsSvg"
import {
  Django,
  Python,
  Java,
  ReactLogo,
  Vuejs,
  Angular,
  Photoshop,
  Wordpress,
} from "../assets/logosTec"
import ProjectCard from "../components/projectCard"
import { ProjectsData } from "../mockData"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const handleDragStart = e => e.preventDefault()

const TecnologiesWrapper = () => {
  return (
    <div className="tec_wrapper">
      <h1>20+</h1>
      <p>Tecnologías usadas</p>
    </div>
  )
}

export default function Projects() {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 4 },
};
  return (
    <div className="content-projects" id="skills-section">
      <section className="projects__section-one">
        <TecnologiesWrapper />
        <ArrowLeft />
        <article className="projects__section_logos">
          <Python />
          <Django />
          <ReactLogo />
          <Vuejs />
          <Angular />
          <Photoshop />
          <Wordpress />
          <Java />
        </article>
      </section>
      <section className="projects__section-two">
        <AliceCarousel
          autoPlay
          autoPlayInterval={1000}
          infinite
          responsive={responsive}
          mouseTracking
          disableDotsControls
          disableButtonsControls
          items={ProjectsData.map(item => {
            return <ProjectCard name={item.title} image={item.url} />
          })}
        />
      </section>
      <section className="projects__section-two">
        <AliceCarousel
          autoPlay
          autoPlayInterval={1000}
          infinite
          responsive={responsive}
          mouseTracking
          disableDotsControls
          autoPlayDirection='rtl'
          disableButtonsControls
          items={ProjectsData.map(item => {
            return <ProjectCard name={item.title} image={item.url} />
          })}
        />
      </section>
    </div>
  )
}
