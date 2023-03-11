import React from "react"
import Lottie from "react-lottie"
import Navbar from "../components/navbar"
import Dev from "../images/dev.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Dev,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
}

const Logo = () => {
  return (
    <svg
      width="534"
      height="432"
      viewBox="0 0 534 432"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M350.373 218.066C350.007 219.487 349.814 220.977 349.814 222.508C349.814 232.414 357.843 240.443 367.749 240.443C373.268 240.443 378.207 237.946 381.497 234.021L350.373 218.066Z"
        fill="#E9F7FD"
      />
      <path
        d="M604.569 0.215469L469.855 431.032H447.761C410.338 421.506 384.332 391.334 376.068 365.472C362.851 324.125 377.538 292.29 401.067 279.453C435.841 260.49 456.425 277.004 462.35 284.336L464.758 287.392C464.758 287.392 464.785 287.441 464.792 287.461C464.792 287.461 464.792 287.461 464.806 287.454V287.468C464.847 287.406 464.882 287.337 464.916 287.268C465.02 287.096 465.185 286.806 465.372 286.406C468.138 280.97 469.697 274.817 469.697 268.305C469.697 246.245 451.81 228.358 429.75 228.358C428.625 228.358 427.508 228.406 426.404 228.496L413.07 216.528C409.931 213.699 406.33 211.506 402.454 210.023L344.668 185.155L305.438 96.4722C304.369 94.0648 301.265 93.3819 299.299 95.1409C288.634 104.695 262.221 133.005 286.779 161.225L296.919 172.283L244.969 144.787C242.561 143.511 239.602 144.939 239.133 147.629C236.726 161.384 233.635 197.661 265.208 207.767H220.832C218.342 207.767 216.576 210.174 217.349 212.547C221.508 225.378 235.829 258.924 269.506 248.528C231.469 300.175 207.484 362.83 204.028 431.032H135.516L0.201904 0.215469H100.929L179.209 193.177L264.767 0.215469H340.612L425.562 193.177L503.843 0.215469H604.569Z"
        fill="#E9F7FD"
      />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <div className="content-home" id="home-section">
        <Navbar setShow={false} />

        <div className="home__section_one">
          <h1 className="h1">WWWWWWWWWWWWWWWWWWWWW</h1>
          <Logo />
        </div>

        {/* <div className="containerTitle">
        <h1 className="title">Welcome</h1>
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
              <br />
              Leonel the bear
              <br />
              your best choice
            </div>
          </b>
        </div>
      </div> */}
      </div>
    </>
  )
}
