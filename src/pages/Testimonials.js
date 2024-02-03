import React from "react"
import { StripesTwo } from "../assets/iconsSvg"
import CardTestimonial from "../components/cardTestimonial"
import Title from "../components/title"
import { testimonial } from "../mockData"

const Testimonials = () => {
  return (
    <div className="content-testimonial">
      <Title titleA={"Que dicen"} titleB=" nuestros clientes" />
      <StripesTwo/>
      <div className="card__grid">
        {testimonial.map((item,i) => {
          return (
            <CardTestimonial
              img={item.img}
              description={item.comment}
              client={item.client}
              key={i}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
