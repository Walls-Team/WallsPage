import React from "react"
import { Link } from "gatsby"
import { Angular, Css3, GitHub, Nodes, Web, Wordpress } from "../assets/iconsSvg"
import { Python, ReactLogo } from "../assets/logosTec"

const Card = ({ img, name, role, id }) => {
  return (
    <Link to={`/TeamMember/${id}`}>
    <div className="card Link" >
      <div className="card__face card__face--front">
        <img src={img} />

        <div className="team__card_text">
          <p className="role">{role}</p>
          <p className="name">{name}</p>
        </div>
      </div>

      <div className="card__face card__face--back">
        <p className="title__card">Skills</p>
        <div className="card__logos">
          <Angular/>
          <Css3/>
          <Nodes/>
          <GitHub/>
          <Web/>
          <Css3/>
          <Nodes/>
          <GitHub/>
        </div>
        <div className="team__card__text_back">
          <p className="role">{role}</p>
          <p className="name">{name}</p>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Card
