import React from "react"
import { Link } from "gatsby"

const Card = ({ img, name, role, id }) => {
  return (
    <div className="card Link" to={`/TeamMember/${id}`}>
      <div className="card__face card__face--front">
        <img src={img} />

        <div className="team__card_text">
          <p className="role">{role}</p>
          <p className="name">{name}</p>
        </div>
      </div>

      <div className="card__face card__face--back">

      </div>
    </div>
  )
}

export default Card
