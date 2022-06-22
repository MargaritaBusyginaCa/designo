import React, {useState, useEffect} from "react";
import Hero from "./heroes/Hero";
import webData from "../data/webDesignProjects.json"
import appData from "../data/appDesignProjects.json"
import graphDesign from "../data/grapDesignProjects.json"
import Design from "./heroes/Design"

function Home(){
    const [showWeb, setShowWeb] = useState(false)
    const [showApp, setShowApp] = useState(false)
    const [showGraph, setShowGraph] = useState(false)
    const [reload, setReload] = useState(false)
    useEffect(() =>{
        if(showWeb){
            setShowWeb(true)
            setShowGraph(false)
            setShowApp(false)
        }
        if(showApp){
            setShowApp(true)
            setShowWeb(false)
            setShowGraph(false)
        }
        if(showGraph){
            setShowGraph(true)
            setShowWeb(false)
            setShowApp(false)
            
        }
    }, [reload])
    return(
        <div>
         <Hero/>
         <div className="projects--grid">
           <Design title={"Web Design"} projects={webData} showProjects={showWeb} setShowProjects={setShowWeb} setReload={setReload} reload={reload}/>
           <Design title={"App Design"} projects={appData} showProjects={showApp} setShowProjects={setShowApp} setReload={setReload} reload={reload}/>
           <Design title={"Graphic Design"} projects={graphDesign} showProjects={showGraph} setShowProjects={setShowGraph} setReload={setReload} reload={reload}/>
         </div>
        </div>
       
    )
}
export default Home