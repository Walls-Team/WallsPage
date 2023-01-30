import React from "react"
import { IconWall, Logo, Stripes, StripesTwo } from "../assets/iconsSvg"
import BackButton from "../components/backButton"
import Card from "../components/cardTeam"
import Title from "../components/title"
import { team_members } from "../mockData"
import TextSection from "./TextSection"
import Ubication from "./Ubication"

const AllTeam = () => {
  return (
    <div className="content-allteam">
      <BackButton/>
      <div className="wrap__title">
        <div className="wrap__title_logo">
          <Logo/>
        </div>
        <Title titleA={"Conoce al"} titleB={" equipo"} />
      </div>
      <div className="gradient"></div>
      <Stripes />
      <div className="team__cardSection">
        {team_members.map(team => {
          return <Card img={team.img} role={team.role} name={team.name} />
        })}
      </div>
      <StripesTwo />

      <TextSection />
      <Ubication />
    </div>
  )
}

export default AllTeam
