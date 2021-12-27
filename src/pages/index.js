import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Lottie from "react-lottie"
import Scrolldown from "../images/scroll-down.json"

import "../styles/index.css"
import Home from "./Home"
import Skills from "./Skills"
import Work from "./Work"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Scrolldown,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
    <Skills />
    <Work />
  </Layout>
)

export default IndexPage
