import React from "react"
import { SingnoDown, SingnoUp } from "../assets/iconsSvg"

const CardTestimonial = ({ img, description}) => {
  return (
    <article className="card__testimonial">
      <div className="card__testimonial-img">
        <img className="testimonial__avatar" src={img} />
      </div>
      <SingnoDown />
      <div className="comment__wrapper">
        <p className="comment">{description}</p>
      </div>
      <SingnoUp />
    </article>
  )
}

export default CardTestimonial
