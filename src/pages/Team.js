import React from "react"
import { CircleGreen } from "../assets/iconsSvg"
import Card from "../components/cardTeam"
import Title from "../components/title"
import { team_members } from "../mockData"

const Team = () => {
  return (
    <section className="content-team">
      <Title titleA={"Conece al"} titleB={" equipo"} />
      <CircleGreen />
      <div className="team__cardSection">
        {team_members.map(member => {
          return <Card key={member.id} name={member.name} img={member.img} role={member.role}/>
        })}
      </div>
    </section>
  )
}

export default Team
