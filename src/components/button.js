import React from "react"
import { ArrowLeft2 } from "../assets/iconsSvg"

const Button = ({ text, onPress, logo }) => {
  return (
    <button className="button" type="button">
      {text}
      {logo ? <ArrowLeft2 /> : ""}
    </button>
  )
}

export default Button
