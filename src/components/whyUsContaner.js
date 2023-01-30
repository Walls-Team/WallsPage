import React, { useEffect, useState } from "react"
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
import {
  motion,
  useMotionValue,
  useScroll,
  useMotionValueEvent,
} from "framer-motion"
import { InView } from "react-intersection-observer"
const WhyUsContainer = () => {
  ///const [y,setY]=useState(0)
  const [one, setOne] = useState(false)
  const [three, setThree] = useState(false)
  const [two, setTwo] = useState(false)

  return (
    <article className="whyUs_container">
      <div className="container__section_one">
        <div>
          <p className="">
            Somos una agencia multidisciplinaria conformada por los mejores
            profesionales de Venezuela, creamos software de clase mundial,
            trabajamos con diversas tecnologías.
          </p>
        </div>
        <div className="container__list">
          <ul>
            <li>
              <Multidisciplinaria /> Multidisciplinario
            </li>
            <li>
              <Software />
              Software
            </li>
            <li>
              <Decisiones />
              Decisiones
            </li>
          </ul>
          <ul>
            <li>
              <Comprometida />
              Comprometida
            </li>
            <li>
              <Profesional />
              Profesionales
            </li>
            <li>
              <Creativo />
              Creativos
            </li>
          </ul>
        </div>
      </div>
      <div className="container__section_two">
        <div className="carousel">
          <motion.div
            animate={{ y: [0, -600, -1000], repeatCount: 10 }}
            transition={{
              delay: 1,
              repeatDelay: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref}>
                  {setOne(inView)}
                  <img src={rocket}className='img'/>
                </div>
              )}
            </InView>
            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref} >
                  {setTwo(inView)}
                  <img src={worktogether} className='img'/>
                </div>
              )}
            </InView>

            <InView>
              {({ inView, ref, entry }) => (
                <div ref={ref}>
                  {setThree(inView)}

                  <img src={thinking}  className='img'/>
                </div>
              )}
            </InView>
          </motion.div>
          {/* <motion.div className="element"  animate={{y:-600,repeatCount:10}} transition={{ delay: 1,repeat: Infinity,repeatType: "reverse" }}>
            <img src={rocket} />
          </motion.div>
          
          <motion.div className="element" animate={{y:[0,-550,-1000,0],repeatCount:10}} transition={{delay:2,repeat: Infinity,repeatType: "reverse"}}>
          <img src={worktogether} />
          </motion.div>
         
          <motion.div className="element" animate={{y:[0,-550,-1000,0]}} transition={{ delay: 3,repeat: Infinity ,repeatType: "reverse"}}>
          <img src={thinking} />
          </motion.div> */}
          {/* <div className="change_outer">
            <div className="change_inner">
              <div className="element">
                <img src={rocket} />
              </div>
              <div className="element">
                <img src={worktogether} />
              </div>
              <div className="element">
                <img src={thinking} />
              </div>
            </div>
          </div> */}
        </div>
        <TimeLine one={one} two={two} three={three} className="timeline" />
      </div>
    </article>
  )
}

export default WhyUsContainer
