import React from "react";
import { motion } from "framer-motion";

import { Line } from "./Contact";
import DOMPurify from "dompurify";

import "../scss/achievements.scss";

import achievements from "../data/achievements";


function Achievements() {
  return (
    <article className="achievements">
        <h1>Achievements</h1>
        <Line w="25vw" h="3px" />
        
        <section className="achcontent">
          {achievements.map((ach)=>{
              return <AchDesc key={ach.id} data={ach} />
          })}
        </section>
    </article>
  )
}



function AchDesc(props){
  const {id, title, description, imgsrc} = props.data;
  
  return(
  <motion.article className="achdesc"
    style={{
      backgroundColor: "rgba(0,0,0,0)",
      flexDirection: (id % 2) ? "row" : "row-reverse"
    }}

    initial={{opacity: 0, x: (id % 2) ? 200 : -200}}
    transition={{duration: 1, delay: 0.4}}
    whileInView={{opacity: 1, x: 0}}
    viewport={{once: true}}
  >

    <motion.div
      className="image1"
      style={{
        backgroundImage: `url("${require(`../assets/images/${imgsrc}`)}")`,
      }}
      initial={{opacity: 0}}
      transition={{duration: 1, delay: 1.4}}
      whileInView={{opacity: 1}}
      viewport={{once: true}}
    />

    <div className="achtext"
      style={{
        backgroundColor: (id % 2) ? "rgba(100, 100, 100, 0.12)" : "#1A494F" ,
      }}
    >
      <motion.div className="head"
        initial={{opacity: 0, y:20}}
        transition={{duration: 2, delay: 0.4}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
      >
        <h2 
          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(title)}}
        />
      </motion.div>

      <motion.h6 
          dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}}
          initial={{opacity: 0, y:20}}
          transition={{duration: 2, delay: 0.7}}
          whileInView={{opacity: 1, y:0}}
          viewport={{once: false}}
      />

    </div>

  </motion.article>
  );
}

export default Achievements;