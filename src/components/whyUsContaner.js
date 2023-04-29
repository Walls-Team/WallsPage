import React, { useEffect, useState, useRef } from "react"
import {
  Multidisciplinaria,
  Software,
  Decisiones,
  Profesional,
  Comprometida,
  Creativo,
  TimeLine,
} from "../assets/iconsSvg"
import rocket from "../assets/rocket.png"
import thinking from "../assets/thinking.png"
import worktogether from "../assets/worktogether.png"

import { InView } from "react-intersection-observer"
import { useTransition, animated } from "react-spring"

let arr = []

const IMAGE = ({ setCount, setDirection, direction }) => {
  let images = [rocket, worktogether, thinking]
  const mounted = useRef(false)

  useEffect(() => {
    arr.push(1)
    mounted.current = true
    if (arr.length === 4) {
      arr = []
      if (direction === "up") {
        setDirection("down")
      } else {
        setDirection("up")
      }
    }
    setCount(arr.length)

    return function cleanup() {
      setCount(0)
    }
  }, [])

  return (
    <>
      <img src={images[arr.length - 1]} className="img" />
    </>
  )
}

const WhyUsContainer = () => {
  const [date, setDate] = useState(false)
  const [count, setCount] = useState(0)
  const [direction, setDirection] = useState("up")
  const transitionUp = useTransition(date, {
    from: { x: 0, y: 800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: () => {
      return { x: 0, y: -800, opacity: 0 }
    },
  })

  const transitionDown = useTransition(date, {
    from: { x: 0, y: -800, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: () => {
      return { x: 0, y: 800, opacity: 0 }
    },
  })

  useEffect(() => {
    const t = setInterval(() => setDate(prev => (prev = !prev)), 1000)

    if (count > 8) {
      setDirection(prev => (prev === "up" ? "down" : "up"))
    }
    return () => clearInterval(t)
  }, [date])

  return (
    <article className="whyUs_container">
      <div className="container__section_one">
        <div>
          <p className="container__description">
            Somos una agencia multidisciplinaria conformada por los mejores
            profesionales de Venezuela, creamos software de clase mundial,
            trabajamos con diversas tecnologías.
          </p>
        </div>
        <div className="container__list">
          <ul>
            <li>
              <Multidisciplinaria /> <span>Multidisciplinario</span>
            </li>
            <li>
              <Software />
              <span> Software</span>
            </li>
            <li>
              <Decisiones />
              <span> Decisiones</span>
            </li>
          </ul>
          <ul>
            <li>
              <Comprometida />
              <span> Comprometida</span>
            </li>
            <li>
              <Profesional />
              <span> Profesionales</span>
            </li>
            <li>
              <Creativo />
              <span> Creativos</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container__section_two">
        <div className="carousel">
          {direction === "up" && (
            <>
              {transitionUp((style, item) =>
                item ? (
                  <animated.div style={style} className="item">
                    <InView>
                      {({ inView, ref, entry, leave }) => (
                        <div ref={ref}>
                          <IMAGE
                            view={leave}
                            setCount={setCount}
                            setDirection={setDirection}
                            direction={direction}
                          />
                        </div>
                      )}
                    </InView>
                  </animated.div>
                ) : (
                  ""
                )
              )}
            </>
          )}
          {direction === "down" && (
            <>
              {transitionDown((style, item) =>
                item ? (
                  <animated.div style={style} className="item">
                    <InView>
                      {({ inView, ref, entry, leave }) => (
                        <div ref={ref}>
                          <IMAGE
                            view={inView}
                            setCount={setCount}
                            setDirection={setDirection}
                            direction={direction}
                          />
                        </div>
                      )}
                    </InView>
                  </animated.div>
                ) : (
                  ""
                )
              )}
            </>
          )}
        </div>

        <div>
          <TimeLine
            one={count === 1 ? true : false}
            two={count === 2 ? true : false}
            three={count === 3 ? true : false}
            className="timeline"
          />
        </div>
      </div>
    </article>
  )
}

export default WhyUsContainer
