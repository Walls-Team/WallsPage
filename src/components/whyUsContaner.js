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
import { motion,useMotionValue, useScroll,useMotionValueEvent} from "framer-motion"
import { useInView } from 'react-intersection-observer';
const WhyUsContainer = () => {
  ///const [y,setY]=useState(0)
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  

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
              <Multidisciplinaria />
              Multidisciplinario
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
          <motion.div ref={ref} animate={{y:[0,-600,-1000],repeatCount:10}} transition={{ delay:1,repeatDelay: 2 ,repeat: Infinity,repeatType: "reverse" }}>
          <img src={rocket} inView={()=>console.log('rr')}/>
          <img src={worktogether} />
          <img src={thinking} />

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
        <TimeLine blue={'red'}/>
      </div>
    </article>
  )
}

export default WhyUsContainer
