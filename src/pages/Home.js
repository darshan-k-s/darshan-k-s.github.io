import {React,} from "react";

import Preloader from "./preloader.jsx";
import ScrollProgress from "../components/ScrollProgress.jsx";

import "../scss/home.scss";

import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects.js";
import Work from "../components/Work";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";

function Home() {

  return (
    <section className="rootBody">
        <Preloader />
        <ScrollProgress />

        <section className="mainBody" >
            <Hero />
            <About/>
            <Work/>
            <Projects/>
            <Achievements/>
            <Contact/>
        </section>
    </section>
  )
}

export default Home;