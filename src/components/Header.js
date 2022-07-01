import React, {useLayoutEffect, useState, useEffect} from "react";
import { Link } from "react-router-dom"
import '../styles/header.css'
import '../styles/index.css'
function Header({icon}){
    const [showMenu, setShowMenu] = useState(false)
    let styleName = showMenu ? "nav-elements" : "hide"
    const linkStyle ={
     color: icon ===  "dark" ? "black" : "white",
     color: showMenu ? "white" : "grey"
    }
    const divStyle={
      borderBottom: icon === "dark" ? "" : "1px solid rgb(60, 60, 60)"
    }
    const [matches, setMatches] = useState(
      window.matchMedia("(min-width: 714px)").matches
    )
    useEffect(() => {
      window
      .matchMedia("(min-width: 714px)")
      .addEventListener('change', e => setMatches( e.matches ));
    }, []);

    return(
        <nav className="narrow-parent-container" style={divStyle}>
          <div className="logo">
            <Link to="/"><img src={require(`../assets/shared/desktop/logo-${icon}.png`).default}/></Link>
          </div>
         { !matches ? 
          <div className="hamburger-menu">
            <div className="hamburger" onClick={()=>setShowMenu(!showMenu)}>
              <img src={require("../assets/shared/mobile/icon-hamburger.svg").default}/>
            </div>
            <div className={styleName}>
            <Link to="/about" className="link-el" style={linkStyle}>our company</Link>
            <Link to="/locations" className="link-el" style={linkStyle}>locations</Link>
            <Link to="/contact" className="link-el" style={linkStyle}>contact</Link>
            </div>
          </div>
          :
          <div>
            <Link to="/about" className="link-el" style={linkStyle}>our company</Link>
            <Link to="/locations" className="link-el" style={linkStyle}>locations</Link>
            <Link to="/contact" className="link-el" style={linkStyle}>contact</Link>
          </div>  
         }
        </nav>
    )
}
export default Header