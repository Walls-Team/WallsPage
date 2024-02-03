import { navigate } from "gatsby"
import React from "react"
import { IconWall, Logo, Stripes, StripesTwo } from "../assets/iconsSvg"
import BackButton from "../components/backButton"
import Card from "../components/cardTeam"
import Title from "../components/title"
import { team_members } from "../data/usersData"
import TextSection from "./TextSection"
import Ubication from "./Ubication"

const AllTeam = () => {
  return (
    <div className="content-allteam">
      <BackButton/>
      <div className="wrap__title">
        <div className="wrap__title_logo" onClick={()=>navigate('/')}>
          <Logo/>
        </div>
        <Title titleA={"Conoce al"} titleB={" equipo"} />
      </div>
      <div className="gradient"></div>
      <Stripes />
      <div className="team__cardSection">
        {team_members.map((team,i )=> {
          return <Card img={team.img} id={team.id} role={team.role} name={team.name} skills={team.skills} key={i}/>
        })}
      </div>
      <StripesTwo />

      <TextSection />
      <Ubication />
    </div>
  )
}

export default AllTeam
