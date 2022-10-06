import React from "react";
import {message}  from "antd";
import {AiFillLinkedin, AiOutlineGithub, AiOutlineFileText} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import Resume from "../assets/Resume.pdf";

import { motion } from "framer-motion";

import "../scss/contact.scss";


function Contact() {
  const Success = () => {
      message.success({
        content: "Email copied to clipboard!", 
        duration: 2,
      });
    };
  return (
    <footer>
    <article id="contact">
        {/* Get in touch */}
        <motion.h1
          initial={{opacity: 0, y:20, scale: 0.96}}
          animate={{}}
          transition={{duration: 2, delay: 0}}
          whileInView={{opacity: 1, y:0, scale: 1}}
          viewport={{once: true}}
        >
          Get in touch
        </motion.h1>
        
        <Line w="34vw" h="3px" />

        <section className="contactsection">
          {/* Info */}
            <motion.h6
              initial={{opacity: 0, y:20}}
              animate={{}}
              transition={{duration: 2, delay: 0.4}}
              whileInView={{opacity: 1, y:0}}
              viewport={{once: true}}
            >
                You can email me at <button id="mail" onClick={Success}>darshanks.work@gmail.com</button>
                <br/>Also hit me up on any of my socials.
            </motion.h6>

            <div className="social">
              {/* gmail */}
              <motion.a 
              initial={{opacity: 0, y:20}}
              transition={{duration: 2, delay: 0.4}}
              whileInView={{opacity: 1, y:0}}
              viewport={{once: true}}

              className="gmail" href="https://mail.google.com/mail/?view=cm&fs=1&to=darshanks.work@gmail.com&su=SUBJECT&body=BODY" target="_blank" rel="noreferrer">
                <SiGmail />
              </motion.a>

              {/* linkedin */}
              <motion.a 
                initial={{opacity: 0, y:20}}
                transition={{duration: 2, delay: 0.6}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true}}

              className="lin" href="https://www.linkedin.com/in/darshan-k-s/" target="_blank" rel="noreferrer">
                <AiFillLinkedin  />
              </motion.a>

              {/* Github */}
              <motion.a 
                initial={{opacity: 0, y:20}}
                transition={{duration: 2, delay: 0.8}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true}}

              className="ghub" href="https://github.com/darshan-k-s" target="_blank" rel="noreferrer">
                <AiOutlineGithub />
              </motion.a>

              {/* Resume */}
              <motion.a 
                initial={{opacity: 0, y:20}}
                transition={{duration: 2, delay: 1}}
                whileInView={{opacity: 1, y:0}}
                viewport={{once: true}}

              className="resume" href={Resume} target="_blank" rel="noreferrer">
                <AiOutlineFileText />
              </motion.a>

            </div>
        </section>
    </article>
    <p className="trademark">&copy; Darshan K S | {new Date().getFullYear() }</p>
    </footer>
  )
}

function Line(props){
  const{w, h} = props;
  const myStyle = {
    width: w,
    height: h,
    backgroundColor: "#cadefc",
    borderRadius: "4px",

  };

  return(
    <motion.div
    className="line" style={myStyle}
          initial={{scaleX: 0, opacity: 0.5}}
          animate={{}}
          transition={{duration: 2, delay: 0}}
          whileInView={{scaleX: 1, opacity: 1}}
          viewport={{once: false}}
        >
        </motion.div>
  );
}

export {Line};
export default Contact;