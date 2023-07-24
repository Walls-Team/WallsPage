import React, { useEffect, useState } from "react"
import AliceCarousel from "react-alice-carousel"
import {
  GitHub,
  Instagram,
  Linkedin,
  Logo,
  Nodes,
  TikTok,
  Twitter,
  Web,
} from "../../assets/iconsSvg"
import BackButton from "../../components/backButton"
import ProjectCard from "../../components/projectCard"
import { ProjectsData } from "../../data/projectsData"
import { team_members } from "../../data/usersData"
import { getSkill } from "../../helpers"
//import { ProjectsData, team_members } from "../../mockData"
import Ubication from "../Ubication"

const TeamMember = props => {
  const [member, setMember] = useState({})
  const [projects, setProjects] = useState([])

  const responsive = {
    0: { items: 1 },
    1234: { items: 2 },
    1024: { items: 3 },
  }

  useEffect(() => {
    let data = team_members.filter(item => item.id === parseInt(props.id))
    setMember(data[0])
  }, [])

  useEffect(() => {
    let projectAux = []
    if (member.id !== undefined) {
      member.projects.map(item => {
        let aux = ProjectsData.filter(project => item === project.id)
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
        <BackButton />
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
          <p>{member.coverLetter}</p>
        </div>
        <div className="skills__wrapper">
          <h3>Skills</h3>
          <ul className="skills">
            {member.skills !== undefined &&
              member.skills.map((item,i) => {
                return <li key={i}>{getSkill(item)}</li>
              })}
          </ul>
          <h3>Softskills</h3>
          <ul className="softskills">
            {member.softSkills !== undefined &&
              member.softSkills.map((item,i) => {
                return <li key={i}>{item}</li>
              })}
          </ul>
          <h3>Idiomas</h3>
          <ul>
            {member.lenguages !== undefined &&
              member.lenguages.map((item,i) => {
                return <li key={i}>{item}</li>
              })}
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
          items={projects.map(item => {
            return <ProjectCard name={item.title} image={item.url} />
          })}
        />
      </section>
      <section className="social__media">
        <h3>Social Media</h3>
        <div>
          {member.social !== undefined && (
            <>
              <ul>
                <li>
                  {member.social[0].ig && (
                    <>
                      <Instagram /> <span>{member.social[0].username}</span>
                    </>
                  )}
                </li>
                <li>
                  {member.social[2].linkedin && (
                    <>
                      <Linkedin /> <span>{member.social[2].username}</span>
                    </>
                  )}
                </li>
                <li>
                  {member.social[3].twitter && (
                    <>
                      <Twitter /> <span>{member.social[3].username}</span>
                    </>
                  )}
                </li>
              </ul>
              <ul>
                <li>
                  {member.social[1].tiktok && (
                    <>
                      <TikTok /> <span>{member.social[1].username}</span>
                    </>
                  )}
                </li>
                <li>
                  {member.social[4].github && (
                    <>
                      <GitHub /> <span>{member.social[4].username}</span>
                    </>
                  )}
                </li>
                <li>
                  {member.social[5].web && (
                    <>
                      <Web /> <span>{member.social[5].username}</span>
                    </>
                  )}
                </li>
              </ul>
            </>
          )}
        </div>
      </section>
      <Ubication />
    </section>
  )
}

export default TeamMember
