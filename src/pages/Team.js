import React from "react"
import { CircleGreen } from "../assets/iconsSvg"
import Button from "../components/button"
import Card from "../components/cardTeam"
import Title from "../components/title"
import { team_members } from "../mockData"
import { Link } from "gatsby"

const Team = () => {
  return (
    <section className="content-team" id="team-section">
      <Title titleA={"Conece al"} titleB={" equipo"} />
      <CircleGreen />
      <div className="team__cardSection">
        {team_members.slice(0, 3).map(member => {
          return (
            <div className="scene">
              <Card
                key={member.id}
                id={member.id}
                name={member.name}
                img={member.img}
                role={member.role}
              />
            </div>
          )
        })}
      </div>
      <Link to="/AllTeam">
        <Button text="Conocenos" logo={true} />
      </Link>
    </section>
  )
}

export default Team
