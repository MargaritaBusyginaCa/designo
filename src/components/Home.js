import React, {useState} from "react";
import Hero from "./heroes/Hero";
import { Link } from "react-router-dom"
import "../styles/home.css"
import Quality from "./heroes/Quality";
import ContactHero from "./heroes/ContactHero";
import Footer from "./heroes/Footer";
function Home(){
    const imgBgWeb = require('../assets/home/desktop/image-web-design-large.jpg').default
    const imgBgApp = require('../assets/home/desktop/image-app-design.jpg').default
    const imgBgGraph = require('../assets/home/desktop/image-graphic-design.jpg').default
    const imgBgSection = require('../assets/shared/desktop/bg-pattern-leaf.svg').default
    
    const styleWeb ={
        backgroundSize: 'cover',
        background: `linear-gradient(rgba(0, 0, 0, 0.569), rgba(0, 0, 0, 0.339)), url(${imgBgWeb})`
    }
    const styleApp ={
        background: `linear-gradient(rgba(0, 0, 0, 0.569), rgba(0, 0, 0, 0.339)), url(${imgBgApp})`,
        backgroundSize: 'cover'
    }
    const styleGraph ={
        background: `linear-gradient(rgba(0, 0, 0, 0.569), rgba(0, 0, 0, 0.339)), url(${imgBgGraph})`,
        backgroundSize: 'cover'
    }
    const styleSection ={
        backgroundSize: 'cover',
        background: `url(${imgBgSection})`
    }


    return(
      <div className="home-parent">
       <div className="narrow-parent-container">
          <Hero/>
         <div style={styleSection} className="leaf" id="leaf-1"></div>
         <div className="projects--grid" > 
           <Link to = "/webdesign" className="project-link" id="web-el" >
            <div style={styleWeb} className="design--title web-el">
                <h2>Web Design</h2>
                <p>view projects</p>
             </div>
            </Link>
            <Link to = "/appdesign" className="project-link" id="app-el">
              <div style={styleApp} className="design--title">
              <h2>App Projects</h2>
             <p>view projects</p>
            </div>
            </Link>  
            <Link to = "/graphdesign" className="project-link" id="graph-el">
              <div style={styleGraph} className="design--title">
              <h2>Graphic Design</h2> 
              <p>view projects</p>
            </div>
            </Link>  
         </div>
         <div style={styleSection} className="leaf" id="leaf-2"></div>
         <Quality />
         <ContactHero/>
       </div>
         
        <Footer/>
      </div>
       
    )
}
export default Home