import React, { useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import {
  Angular,
  Css3,
  GitHub,
  IconWall,
  Instagram,
  Linkedin,
  Logo,
  Nodes,
  TikTok,
  Twitter,
  Web,
  Wordpress,
} from "../../assets/iconsSvg"
import ProjectCard from "../../components/projectCard"
import { ProjectsData, team_members } from "../../mockData"
import Ubication from "../Ubication"

const TeamMember = props => {
 
  const [member, setMember] = useState({})
  const [projects, setProjects] = useState([])

  const responsive = {
    0: { items: 1 },
    1234: { items: 2 },
    1024: { items: 3 }}

  useEffect(() => {
    let data = team_members.filter(item => item.id === parseInt(props.id))
    setMember(data[0])
  }, [])

  useEffect(() => {
    let projectAux = []
    if (member.id !== undefined) {
      member.projects.map(item => {
        let aux = projects.filter(project => item === project.id)
        console.log(aux, item)
        if (aux.length > 0) {
          projectAux.push(aux[0])
        }
      })
    }
    setProjects(projectAux)
  }, [member])

  return (
    <section className="content-member">
      <header className="member__header">
        <Logo />

        <div className="member__section">
          <div className="member__text">
            <div className="stripe"></div>
            <div>
              <h1>{member.name}</h1>
              <p>{member.role}</p>
            </div>
          </div>
          <div className="member__img">
            <img src={member.img} />
          </div>
        </div>
      </header>

      <section className="about__member">
        <div className="member__bio">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel fringilla est ullamcorper eget nulla facilisi etiam
            dignissim diam quis Lorem ipsum dolor sit amet, consectetur
            adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus
            magna fringilla urna, porttitor rhoncus dolor purus non enim
            praesent elementum facilisis leo, vel fringilla est. Llamcorper eget
            nulla facilisi etiam dignissim diam quis Lorem ipsum dolor sit amet,
            consectetur adipiscing elit ut aliquam, purus sit amet luctus
            venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
            purus non enim praesent elementum facilisis leo, vel fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam quis Lorem
            ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus
            sit amet luctus venenatis, lectus magna fringilla urna, porttitor
            rhoncus dolor purus non enim praesent elementum facilisis leo, vel
            fringilla est ullamcorper eget nulla facilisi etiam dignissim diam
            quis
          </p>
        </div>
        <div className="skills__wrapper">
          <h3>Skills</h3>
          <ul className="skills">
            <li>
              <Angular />
            </li>

            <li>
              <Css3 />
            </li>
            <li>
              <Nodes />
            </li>
          </ul>
          <h3>Softskills</h3>
          <ul className="softskills">
            <li>Trabajo en equipo</li>
            <li>Liderazgo</li>
            <li>Comunicaciòn asertiva</li>
            <li>Servicio al cliente</li>
            <li>Capacidad analitica y de resoluciòn de problemas</li>
            <li>Atenciòn al detalle</li>
          </ul>
          <h3>Idiomas</h3>
          <ul>
            <li>Español</li>
            <li>Ingles</li>
          </ul>
        </div>
      </section>
      <section className="projects__section">
        <h3>Trabajos</h3>
       
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
      <section className="social__media">
        <h3>Social Media</h3>
        <div>
        <ul>
          <li><Instagram/> <span>@devmorat</span></li>
          <li><Linkedin/> <span>http://www.devmorat.com</span></li>
          <li><Twitter/> <span>@dev.jmo</span></li>
        </ul>
        <ul>
          <li><TikTok/> <span>@tikmor</span></li>
          <li><GitHub/> <span>@devdevmorat.dev</span></li>
          <li><Web/> <span>www.devmoratdev.com</span></li>
        </ul>
        </div>
      </section>
      <Ubication />
    </section>
  )
}

export default TeamMember
