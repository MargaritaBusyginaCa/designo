import React from "react"
import { Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import CompanyPage from "./components/CompanyPage"
import './styles/index.css'
import webData from "./data/webDesignProjects.json"
import appData from "./data/appDesignProjects.json"
import graphData from "./data/grapDesignProjects.json"
import Design from "./components/heroes/Design"
import Locations from "./components/Locations"
import Contact from "./components/Contact"
function App(){
   
    return(
       <div className="parent-container">
         <Header icon={"dark"}/>
         <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/about" element={<CompanyPage />}/>
            <Route path="/locations" element={<Locations />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/webdesign" element={<Design title={"Web Design"} projects={webData} subtitle={"We build websites that serve as powerful marketing tools and bring memorable brand experiences"}/>}/>
            <Route path="/appdesign" element={<Design  title={"App Design"} projects={appData} subtitle={"Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."}/>}/>
            <Route path="/graphdesign" element={<Design title={"Graphic Design"} projects={graphData} subtitle={"We deliver eye-catching branding materials that are tailored to meet your business objectives."}/>}/>
         </Routes>
       </div>
    )
}
export default App