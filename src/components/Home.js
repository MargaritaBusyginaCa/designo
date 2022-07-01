import React, {useState} from "react";
import Hero from "./heroes/Hero";
import { Link } from "react-router-dom"
import "../styles/home.css"
import Quality from "./heroes/Quality";
import ContactHero from "./heroes/ContactHero";
import Footer from "./heroes/Footer";
function Home(){
    const [hoverWeb, setHoverWeb] = useState(false)
    const [hoverApp, setHoverApp] = useState(false)
    const [hoverGraph, setHoverGraph] = useState(false)
    const imgBgWeb = require('../assets/home/desktop/image-web-design-large.jpg').default
    const imgBgApp = require('../assets/home/desktop/image-app-design.jpg').default
    const imgBgGraph = require('../assets/home/desktop/image-graphic-design.jpg').default
    const imgBgSection = require('../assets/shared/desktop/bg-pattern-leaf.svg').default
    
    const styleWeb ={
        backgroundSize: 'cover',
        background: !hoverWeb ? `linear-gradient(rgba(0, 0, 0, 0.569), rgba(0, 0, 0, 0.339)), url(${imgBgWeb})`
                          : `linear-gradient(90deg, rgba(231,129,107,0.78) 0%, rgba(231,129,107,0.78) 37%, rgba(231,129,107,0.78) 100%), url(${imgBgWeb})`
    }
    const styleApp ={
        backgroundSize: 'cover',
        background: !hoverApp ? `linear-gradient(rgba(0, 0, 0, 0.569), rgba(0, 0, 0, 0.339)), url(${imgBgApp})`
                          : `linear-gradient(90deg, rgba(231,129,107,0.78) 0%, rgba(231,129,107,0.78) 37%, rgba(231,129,107,0.78) 100%), url(${imgBgApp})`
    }
    const styleGraph ={
        backgroundSize: 'cover',
        background: !hoverGraph ? `linear-gradient(rgba(0, 0, 0, 0.569), rgba(0, 0, 0, 0.339)), url(${imgBgGraph})`
                          : `linear-gradient(90deg, rgba(231,129,107,0.78) 0%, rgba(231,129,107,0.78) 37%, rgba(231,129,107,0.78) 100%), url(${imgBgGraph})`
    }
    const styleSection ={
        backgroundSize: 'cover',
        background: `url(${imgBgSection})`,
        backgroundSize: "100px 100px",
        overflow:"clip"
    }


    return(
      <div className="home-parent">
       <div className="narrow-parent-container">
          <Hero/>
         <div className="projects--grid" > 
           <Link to = "/webdesign" className="project-link" id="web-el" >
            <div style={styleWeb} className="design--title web-el" onMouseEnter={() => setHoverWeb(true)} onMouseLeave={() => setHoverWeb(false)}>
                <h2>Web Design</h2>
                <p>view projects</p>
             </div>
            </Link>
            <Link to = "/appdesign" className="project-link" id="app-el">
              <div style={styleApp} className="design--title" onMouseEnter={() => setHoverApp(true)} onMouseLeave={() => setHoverApp(false)}>
              <h2>App Projects</h2>
             <p>view projects</p>
            </div>
            </Link>  
            <Link to = "/graphdesign" className="project-link" id="graph-el">
              <div style={styleGraph} className="design--title" onMouseEnter={() => setHoverGraph(true)} onMouseLeave={() => setHoverGraph(false)}>
              <h2>Graphic Design</h2> 
              <p>view projects</p>
            </div>
            </Link>  
         </div>
         <Quality />
         <ContactHero/>
       </div>
    
        <Footer/>
      </div>
       
    )
}
export default Home