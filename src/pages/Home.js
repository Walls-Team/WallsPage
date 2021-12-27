import React from "react"
import Lottie from "react-lottie"
import Dev from "../images/dev.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Dev,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

export default function Home() {
  return (
    <div className="content-home" id="home-setcion">
      <div>
        <div className="containerTitle">
          {/* <h1 className="title">Welcome</h1>
          <div className="Iam">
            <p>We are</p>
            <b>
              <div className="innerIam">
                Developers
                <br />
                Walls Team
                <br />
                Your best option
                <br />
                Quick, efficient and effective.
                <br />
                Top Rate Upwork
                <br />
                your best choice
              </div>
            </b>
          </div> */}
        </div>
      </div>
    </div>
  )
}
