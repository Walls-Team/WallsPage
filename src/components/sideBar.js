import React, { useContext, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { GrClose } from "react-icons/gr";
//import Button from "../button";

const SideBar = ({ show, setShow }) => {
 
  const springWidth = useSpring({
    from: { left: "-100%" },
    left: show ? "0" : "-100%",
    // config: config.molasses,
    // delay: 200,
  });
 

  return (
    <animated.div className="sidebar" style={springWidth}>
      <h1 onClick={() => setShow((prev) => !prev)}>
        <GrClose style={{fontSize:'25px',marginRight:'10px'}} />
      </h1>
      
        <h2 className="sidebar__icon">
          <a className="sidebar__link" to={"/add-course"}>
            Home
          </a>
        </h2>
    
        <h2 className="sidebar__icon">
          <a className="sidebar__link" to={"/dashboard"}>
            Work
          </a>
        </h2>
        <h2 className="sidebar__icon">
          <a className="sidebar__link" to={"/dashboard"}>
            Team
          </a>
        </h2>
        <h2 className="sidebar__icon">
          <a className="sidebar__link" to={"/dashboard"}>
            Contact
          </a>
        </h2>
      
      <h2 className="sidebar__icon">
        {/* <Button text='Contact'/> */}
      </h2>

      
    </animated.div>
  );
};

export default SideBar;