import React from "react"
import { Stripes } from "../assets/iconsSvg"
import Title from "../components/title"
import WhyUsContainer from "../components/whyUsContaner"

export default function Work() {
  return (
    <div className="content-work" id="work-section">
      
        <Title titleA={'¿Por qué'} titleB={' nosotros?'}/>
        {/* <Stripes/> */}

        <WhyUsContainer/>
     
    </div>
  )
}
