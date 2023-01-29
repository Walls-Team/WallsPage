import React from "react"
import { Link } from "gatsby"

const Card = ({ img, name, role, id }) => {
  return (
    <Link className="team__card Link" to={`/TeamMember/${id}`}>
      <img src={img} />

      <div className="team__card_text">
        <p className="role">{role}</p>
        <p className="name">{name}</p>
      </div>
    </Link>
  )
}

export default Card
