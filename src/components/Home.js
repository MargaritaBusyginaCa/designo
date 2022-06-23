import React, {useState, useEffect} from "react";
import Hero from "./heroes/Hero";
import webData from "../data/webDesignProjects.json"
import appData from "../data/appDesignProjects.json"
import graphDesign from "../data/grapDesignProjects.json"
import "../styles/home.css"
import Design from "./heroes/Design"

function Home(){
    const [showWeb, setShowWeb] = useState(false)
    const [showApp, setShowApp] = useState(false)
    const [showGraph, setShowGraph] = useState(false)
    const [reload, setReload] = useState(false)
    const imgBgWeb = require('../assets/home/desktop/image-web-design-large.jpg').default
    const imgBgApp = require('../assets/home/desktop/image-app-design.jpg').default
    const imgBgGraph = require('../assets/home/desktop/image-graphic-design.jpg').default
    const styleWeb ={
        backgroundImage: `url(${imgBgWeb})`,
        backgroundSize: 'cover'
    }
    const styleApp ={
        backgroundImage: `url(${imgBgApp})`,
        backgroundSize: 'cover'
    }
    const styleGraph ={
        backgroundImage: `url(${imgBgGraph})`,
        backgroundSize: 'cover'
    }
    useEffect(() =>{
        if(showWeb){
            setShowGraph(false)
            setShowApp(false)
        }
        if(showApp){
            setShowWeb(false)
            setShowGraph(false)
        }
        if(showGraph){
            setShowWeb(false)
            setShowApp(false) 
        }
    }, [reload])
    return(
        <div>
         <Hero/>
         <div className="projects--grid-hide">
            <div style={styleWeb} className="web-el design">
             <Design title={"Web Design"} projects={webData} showProjects={showWeb} setShowProjects={setShowWeb} setReload={setReload} reload={reload}/>
            </div>
            <div style={styleApp} className="app-el design">
            <Design  title={"App Design"} projects={appData} showProjects={showApp} setShowProjects={setShowApp} setReload={setReload} reload={reload}/>
            </div>
            <div style={styleGraph} className="graph-el design">
            <Design title={"Graphic Design"} projects={graphDesign} showProjects={showGraph} setShowProjects={setShowGraph} setReload={setReload} reload={reload}/>
            </div>
           
           
         </div>
        </div>
       
    )
}
export default Home