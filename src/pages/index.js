import React, { useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Lottie from "react-lottie"
import Scrolldown from "../images/scroll-down.json"
import Header from "../components/header"
import "../styles/index.css"
import Home from "./Home"
import Projects from "./Projects"
import Work from "./WhyUs"
import Team from './Team'
import { animateScroll as scroll, Events } from "react-scroll"
import Navbar from "../components/navbar"
import Testimonials from "./Testimonials"
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Scrolldown,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

let moving = false
let isDown = 0
let timerScroll = null
const IndexPage = () => {
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
          console.log(isDown, isDown % window.innerHeight, window.innerHeight)
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
      <Navbar/>
      <Header />
      <Home />
      <Projects />
      <Work />
      <Team/>
      <Testimonials/>
    </Layout>
  )
}
export default IndexPage
