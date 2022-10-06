import {React, useRef} from "react";
import { motion, } from "framer-motion";
import { useInView } from "framer-motion";

import dp from "../assets/images/dp.webp"

import "../scss/about.scss";

import { MdArrowBackIosNew } from "react-icons/md";


function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const isInViewDivider = useInView(ref, {once: false});

  return (
    <article className="about">
      <section className="aboutdeets" ref={ref}>
        {/* Heading */}
        <motion.h1
          initial={{opacity: 0, y: 20}}
          transition={{duration: 2, delay: 0}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
        >
          About Me
        </motion.h1>

        <svg className="squiggle" width="121" height="17" viewBox="0 0 121 17" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="27.1161" y1="15.2599" x2="41.2583" y2="1.11778" stroke="#CADEFC" strokeWidth="2.5"></line><line x1="1.11612" y1="15.2599" x2="15.2583" y2="1.11778" stroke="#CADEFC" strokeWidth="2.5"></line><line x1="28.2583" y1="16.026" x2="14.1161" y2="1.88384" stroke="#CADEFC" strokeWidth="2.5"></line><line x1="39.8839" y1="1.11783" x2="54.026" y2="15.26" stroke="#CADEFC" strokeWidth="2.5"></line><line x1="64.8839" y1="1.11783" x2="79.026" y2="15.26" stroke="#CADEFC" strokeWidth="2.5"></line><line x1="91.8839" y1="1.11783" x2="106.733" y2="15.9671" stroke="#CADEFC" strokeWidth="2.5"></line><line x1="78.1161" y1="15.9672" x2="92.9654" y2="1.11795" stroke="#CADEFC" strokeWidth="2.5"></line><line x1="105.116" y1="15.9672" x2="119.965" y2="1.11795" stroke="#CADEFC" strokeWidth="2.5"></line><line x1="52.1161" y1="15.2599" x2="66.2583" y2="1.11778" stroke="#CADEFC" strokeWidth="2.5"></line></svg>
        
        <Desc/>

        {/* Get in touch */}
        <motion.h5
          initial={{opacity: 0, y:20}}
          transition={{duration: 2, delay: 0}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: false}}
        >
          <a href="#contact" className="hover-underline-animation" ><span className="txt">Get in touch</span> </a>
          <span className="getdownArrow"><MdArrowBackIosNew /></span>
        </motion.h5>
      </section>

      {/* DP */}
      <img src={dp} alt="Me in the pic" 
        style={{
          transform: isInView ? "none" : "translateX(50vw) rotateZ(-45deg)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
        }}
      />

      <span className="divider" 
        style={{
          transform: isInViewDivider ? "none" : "translateX(30vw)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0s",
        }}
      />

    </article>
  )
}


function Desc(){
  return(<>
      <motion.h6
        initial={{opacity: 0, x: -500}}
        transition={{duration: 2, delay: 0}}
        whileInView={{opacity: 1, x:0}}
        viewport={{once: true}}
      >
        <h4 style={{fontSize: "1.34em", fontWeight: "300"}}>
          I’m a Robotics enthusiast and a front-end web developer, passionate to develop human centric products. 
        </h4>
      <br/>
      I’m currently a 3rd year student at the <a className="hover-underline-animation mit" href="https://manipal.edu/mit.html" target="_blank" rel="noreferrer">Manipal Institute of Technology</a> majoring in Computer Science and Engineering.
      
      <br/>
      I get psyched about robotic motion planning and control and am really into incorporation automation into daily life.
      <br/><br/>
      A bowl of ice cream is the best way to talk to me <a className="buyicecream" target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/darshanks">:&#41;</a><br/>
      </motion.h6>
    </>
  );
}

export default About;