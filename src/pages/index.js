import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Scrolldown from "../images/scroll-down.json"
import Header from "../components/header"
import "../styles/index.css"
import Home from "./Home"
import Projects from "./Projects"
import Work from "./WhyUs"
import Team from "./Team"
import { animateScroll as scroll, Events } from "react-scroll"
import Testimonials from "./Testimonials"
import TextSection from "./TextSection"
import Ubication from "./Ubication"
import SideBar from "../components/sideBar"

let moving = false
let isDown = 0
let timerScroll = null

const IndexPage = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {
      moving = true
    })
    Events.scrollEvent.register("end", function (to, element) {
      setTimeout(() => (moving = false), 60)
    })
    const scrollTo = () => {
      if (timerScroll) clearTimeout(timerScroll)
      timerScroll = setTimeout(() => {
        const nowIsDown = isDown < window.scrollY
        isDown = window.scrollY
        if (!moving) {
          const direction = nowIsDown ? 1 : -1
          const scrolll = nowIsDown
            ? window.innerHeight - (isDown % window.innerHeight)
            : window.innerHeight -
              (window.innerHeight - (isDown % window.innerHeight))
          scroll.scrollMore(scrolll * direction)
        }
      }, 50)
    }
    window.addEventListener("scroll", scrollTo)
    return () => {
      window.removeEventListener("scroll", scrollTo)
      Events.scrollEvent.remove("begin")
      Events.scrollEvent.remove("end")
    }
  }, [])
  return (
    <Layout>
      
      <SideBar show={show} setShow={setShow} />
      <Header />
      <Home show={show} setShow={setShow}/>
      <Projects />
      <Work />
      <Team />
      <Testimonials />
      <TextSection />
      <Ubication />
    </Layout>
  )
}
export default IndexPage
