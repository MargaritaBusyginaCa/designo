import React from "react";
import "../../styles/index.css"
import "../../styles/heroes-styles/contact-hero.css"
import { Link } from "react-router-dom"

function ContactHero(){
  const imgBg = require('../../assets/web-design/desktop/bg-pattern-intro-web.svg').default
  const divStyle = {
    backgroundImage: `url(${imgBg})`,
    backgroundRepeat  : 'repeat',
    backgroundPosition: 'center',
   }

   return(
    <div className="contact-hero-container" style={divStyle}>
      <div className="contact--info-box">
        <h1>Let's talk about your project</h1>
        <h2>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</h2>
      </div>
      <div className="btn-container">
        <Link to="/contact"><button className="general-btn" id="in-touch">get in touch</button></Link>
      </div>
    </div>
   )
}
export default ContactHero