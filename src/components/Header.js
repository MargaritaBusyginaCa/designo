import React from "react";
import { Link } from "react-router-dom"
import '../styles/header.css'
function Header(){
    return(
        <nav>
          <div className="logo"><img src={require('../assets/shared/desktop/logo-dark.png').default}/></div>
          <div className="links">
            <Link to="/about" className="link-el">our company</Link>
            <Link to="#" className="link-el">locations</Link>
            <Link to="#" className="link-el">contact</Link>
          </div>  
        </nav>
    )
}
export default Header