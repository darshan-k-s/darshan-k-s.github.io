import React from "react";
import {Svg} from "../pages/preloader.jsx";
import Resume from "../assets/Resume.pdf";

import "../scss/hero.scss";

import { MdArrowBackIosNew } from "react-icons/md";

const typeWords = [
  "Front end developer ",
  " ",
  "Robotics enthusiast ",
  " ",
  "UX designer ",
  " ",
];

function Hero() {

  const [word, setWord] = React.useState(0);
  const [currWord, setCurrWord] = React.useState(" ");
  const [direction, setDirection] = React.useState(1);


  function wordChanger(){
    const letterWriter = setTimeout(() => {      
      if(currWord.length === typeWords[word].length ){
        setDirection(-1);
      }
      else if(currWord.length === 0 ){
        setDirection(1);
        setWord((word + 1) % typeWords.length);
        setCurrWord(" ");
      }
      setCurrWord(typeWords[word].substring(0, currWord.length + direction));

    }, 120);
    return () => clearTimeout(letterWriter);
  }
  
  React.useEffect(() => {
    wordChanger();
  });

  return (
      <article className="hero">
          <nav className="navbar">
            <Svg w="52px" h="52px" />
            <div className="navLinks">
                <a className="hover-underline-animation" href={Resume} target="_blank" rel="noreferrer">Resume</a>
                <div className="verticalLine"></div>
                <a className="hover-underline-animation" href="#contact">Contact</a>
            </div>
          </nav>
          <div className="content">
              <h2>Hey there, I&rsquo;m</h2>
              <h1>Darshan K S</h1>
              <SqwigglyLine />
              <h5>{currWord}<span>|</span></h5>
          </div>
        <p>Look around to know me better</p>
        <span className="downArrow">
              <MdArrowBackIosNew />
            </span>
      </article>
  );
}


function SqwigglyLine(){

    return (
      <span className="sqwigglyLine">
        <svg width="121" height="17" viewBox="0 0 121 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="27.1161" y1="15.2599" x2="41.2583" y2="1.11778" stroke="#CADEFC" strokeWidth="2.5"/>
        <line x1="1.11612" y1="15.2599" x2="15.2583" y2="1.11778" stroke="#CADEFC" strokeWidth="2.5"/>
        <line x1="28.2583" y1="16.026" x2="14.1161" y2="1.88384" stroke="#CADEFC" strokeWidth="2.5"/>
        <line x1="39.8839" y1="1.11783" x2="54.026" y2="15.26" stroke="#CADEFC" strokeWidth="2.5"/>
        <line x1="64.8839" y1="1.11783" x2="79.026" y2="15.26" stroke="#CADEFC" strokeWidth="2.5"/>
        <line x1="91.8839" y1="1.11783" x2="106.733" y2="15.9671" stroke="#CADEFC" strokeWidth="2.5"/>
        <line x1="78.1161" y1="15.9672" x2="92.9654" y2="1.11795" stroke="#CADEFC" strokeWidth="2.5"/>
        <line x1="105.116" y1="15.9672" x2="119.965" y2="1.11795" stroke="#CADEFC" strokeWidth="2.5"/>
        <line x1="52.1161" y1="15.2599" x2="66.2583" y2="1.11778" stroke="#CADEFC" strokeWidth="2.5"/>
        </svg>
        </span>
    );
}


export default Hero;
export {SqwigglyLine};