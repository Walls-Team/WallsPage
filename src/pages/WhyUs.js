import React from "react"
import { Stripes } from "../assets/iconsSvg"
import Title from "../components/title"
import WhyUsContainer from "../components/whyUsContaner"

export default function Work() {
  return (
    <div className="content-work" id="work-section">
      
        <div className="title__wrapper">
        <Title titleA={'¿Por qué'} titleB={' nosotros?'}/>
        </div>
        <Stripes/>
        <WhyUsContainer/>
     
    </div>
  )
}
