import React from "react"
import { CircleGreen } from "../assets/iconsSvg"
import Button from "../components/button"
import Card from "../components/cardTeam"
import Title from "../components/title"
import { Link } from "gatsby"
import { team_members } from "../data/usersData"

const Team = () => {
  return (
    <section className="content-team" id="team-section">
      <Title titleA={"Conoce al"} titleB={" equipo"} />
      <CircleGreen />
      <div className="team__cardSection">
        {team_members.slice(0, 3).map((member, i) => {
          return (
            <div className="scene" key={i}>
              <Card
                id={member.id}
                name={member.name}
                img={member.img}
                role={member.role}
                skills={member.skills}
              />
            </div>
          )
        })}
      </div>
      <Link to="/AllTeam">
        <Button text="Conócenos" logo={true} />
      </Link>
    </section>
  )
}

export default Team
