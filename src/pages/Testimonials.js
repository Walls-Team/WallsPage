import React from "react"
import CardTestimonial from "../components/cardTestimonial"
import Title from "../components/title"
import { testimonial } from "../mockData"

const Testimonials = () => {
  return (
    <div className="content-testimonial">
      <Title titleA={"Que dicen"} titleB=" nuestros clientes" />
      <div className="card__grid">
        {testimonial.map(item => {
          return (
            <CardTestimonial
              img={item.img}
              description={item.comment}
              client={item.client}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Testimonials
