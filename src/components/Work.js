import React from "react";
import { motion } from "framer-motion";

import "../scss/work.scss";

import { SqwigglyLine } from "./Hero";
import { Line } from "./Contact";

import DOMPurify from "dompurify";

import work from "../data/work";


function Work() {
  return (
    <article className="work">
        <h1>Work Experience</h1>
        <Line w="25vw" h="3px" />

        <section className="works">
            {work.map((works)=>{
                return <WorkSection key={works.id} work={works} />
            })}
        </section>
    </article>
  )
}

function WorkSection(props){
    const {id, company, title, duration, description, imgsrc, site} = props.work;
    return(
    <section className="workblock">
        <section className="worksection"
            style={{
                flexDirection: (id % 2) ? "row" : "row-reverse",
            }}
        >
            <a href={site} target="_blank" rel="noreferrer">
                <motion.img src={require(`../assets/images/${imgsrc}`)} alt={company} 
                    initial={{opacity: 0, y:20}}
                    transition={{duration: 2, delay: 0}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{once: false}}
                    whileHover={{scale: 0.8}}
                />
            </a>
            <section className="workdetails"
                style={{
                    marginLeft: (id % 2) ? "8vw" : "0",
                    marginRight: (id % 2) ? "0" : "8vw",
                    textAlign: (id % 2) ? "left" : "right"
                }}
            >
                <motion.h2
                    initial={{opacity: 0, y:20}}
                    transition={{duration: 2, delay: 0.2}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{once: true}}
                >
                    {company}
                </motion.h2>
                
                <motion.h4
                    initial={{opacity: 0, y:20}}
                    transition={{duration: 2, delay: 0.4}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{once: true}}
                >
                    {title}
                </motion.h4>
                
                <motion.h5
                    initial={{opacity: 0, y:20}}
                    transition={{duration: 2, delay: 0.5}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{once: true}}
                >
                    {duration}
                </motion.h5>
                
                <motion.h6 
                    dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(description)}}
                    initial={{opacity: 0, y:20}}
                    transition={{duration: 2, delay: 0.7}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{once: true}}
                />
            </section>

        </section>  
        {(id != work.length) ? <SqwigglyLine/> : null}

    </section>
    );
}


export default Work;