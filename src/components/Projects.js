import {React,} from "react";
import { motion } from "framer-motion";
import { SqwigglyLine } from "./Hero";
import { Line } from "./Contact";

import DOMPurify from "dompurify";

import "../scss/projects.scss";

import projs from "../data/projects";


function Projects() {

  return (
    <article className="projects">
        <motion.h1
          initial={{opacity: 0, y:20}}
          transition={{duration: 2, delay: 0}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true}}
        >
          Projects
        </motion.h1>
        
        <SqwigglyLine/>
        
        {/* <motion.h5 className="fadeh5"
          initial={{opacity: 0, y:20}}
          transition={{duration: 2, delay: 0.3}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: false}}
        >
          Click on the cards to know more
        </motion.h5> */}

        <section className="projectcontent">
          {projs.map((proj)=>{
              return <ProjectDesc key={proj.id} data={proj} />
          })}
        </section>
    </article>
  )
}


function ProjectDesc(props){
  const {id, title, tools, description, demo, github, imgsrc, secondaryimg} = props.data;
  
  return(
  <article className="projdesc"
    style={{
      backgroundColor: (id % 2) ? "#1A494F" : "rgba(100, 100, 100, 0.12)",
    }}
  >

    <motion.div
      className="image1"
      style={{
        backgroundImage: `url("${require(`../assets/images/${imgsrc}`)}")`,
      }}
      initial={{opacity: 0}}
      transition={{duration: 1, delay: 1}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
    />

    <div className="projtext">
      <motion.div className="head"
        initial={{opacity: 0, y:20}}
        transition={{duration: 2, delay: 0}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
      >
        <h2 >{title}</h2>
        <h5>| {tools}</h5>
      </motion.div>

      <Line w="25vw" h="3px" />

      <motion.h6 
          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}}
          initial={{opacity: 0, y:20}}
          transition={{duration: 2, delay: 0.7}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true}}
      />

      <div className="links" >
        {
          github ? <motion.a 
          initial={{opacity: 0, y:20}}
          transition={{duration: 2, delay: 0.7}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true}}
          href={github} className="hover-underline-animation" target="_blank" rel="noreferrer">Repository</motion.a> : ""
        }
        
        {
          demo ? <><p className="separator">|</p><motion.a 
          initial={{opacity: 0, y:20}}
          transition={{duration: 2, delay: 1}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: true}}
          href={demo} className="hover-underline-animation" target="_blank" rel="noreferrer">Check it out</motion.a> </>: ""
        }
        
      </div>
    </div>
    
    <motion.div
      className="image2"
      style={{
        backgroundImage: `url("${require(`../assets/images/${secondaryimg}`)}")`,
      }}
      initial={{opacity: 0}}
      transition={{duration: 1, delay: 1}}
      whileInView={{opacity: 1}}
      viewport={{once: false}}
    />



  </article>
  );
}

export default Projects;