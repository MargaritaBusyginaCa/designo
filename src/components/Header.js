import React from "react";
import { Link } from "react-router-dom"
import '../styles/header.css'
import '../styles/index.css'
function Header({icon}){
    const linkStyle ={
     color: icon === "dark" ? "black" : "white",
    }
    const divStyle={
      borderBottom: icon === "dark" ? "" : "1px solid rgb(60, 60, 60)"
    }
    return(
        <nav className="narrow-parent-container" style={divStyle}>
          <div className="logo">
            <Link to="/"><img src={require(`../assets/shared/desktop/logo-${icon}.png`).default}/></Link>
            </div>
          <div className="links">
            <Link to="/about" className="link-el" style={linkStyle}>our company</Link>
            <Link to="/locations" className="link-el" style={linkStyle}>locations</Link>
            <Link to="/contact" className="link-el" style={linkStyle}>contact</Link>
          </div>  
        </nav>
    )
}
export default Header