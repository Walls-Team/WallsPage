import React from "react"
import {
  Multidisciplinaria,
  Software,
  Decisiones,
  Profesional,
  Comprometida,
  Creativo,
  TimeLine,
} from "../assets/iconsSvg"
import rocket from "../assets/rocket.png"
import thinking from "../assets/thinking.png"
import worktogether from "../assets/worktogether.png"
const WhyUsContainer = () => {
  return (
    <article className="whyUs_container">
      <div className="container__section_one">
        <div>
          <p className="">
            Somos una agencia multidisciplinaria conformada por los mejores
            profesionales de Venezuela, creamos software de clase mundial,
            trabajamos con diversas tecnologías.
          </p>
        </div>
        <div className="container__list">
          <ul>
            <li>
              <Multidisciplinaria />
              Multidisciplinario
            </li>
            <li>
              <Software />
              Software
            </li>
            <li>
              <Decisiones />
              Decisiones
            </li>
          </ul>
          <ul>
            <li>
              <Comprometida />
              Comprometida
            </li>
            <li>
              <Profesional />
              Profesionales
            </li>
            <li>
              <Creativo />
              Creativos
            </li>
          </ul>
        </div>
      </div>
      <div className="container__section_two">
        <div className="carousel">
          <div className="element">
            <img src={rocket} />
          </div>
          <div className="element">
            <img src={worktogether} />
          </div>
          <div className="element">
            <img src={thinking} />
          </div>
          {/* <div className="change_outer">
            <div className="change_inner">
              <div className="element">
                <img src={rocket} />
              </div>
              <div className="element">
                <img src={worktogether} />
              </div>
              <div className="element">
                <img src={thinking} />
              </div>
            </div>
          </div> */}
        </div>
        <TimeLine />
      </div>
    </article>
  )
}

export default WhyUsContainer
