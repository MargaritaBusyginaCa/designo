import React, {useRef} from "react";
import { Link } from "react-router-dom"
import "../../styles/heroes-styles/hero.css"
import '../../styles/index.css'
function Hero(){
  const imgBg = require('../../assets/home/desktop/bg-pattern-hero-home.svg').default
  const divStyle = {
    backgroundImage: `url(${imgBg})`,
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'right',
  }
    return(
        <div>
         <section className="hero-container" style={divStyle}>
          <div className="hero-text">
            <h1>Award-winning custom designs and 
                digital branding solutions</h1>
            <p>With over 10 years in the industry, we are experienced in 
                creating fully responsive websites, app design, and engaging 
                brand experiences. Find out more about our services.</p>
            <button className="general-btn">
                <Link to="/about" className="btn-link">learn more</Link>
            </button>
          </div>
          <div className="hero-phone-img">
            <img src={require("../../assets/home/desktop/image-hero-phone.png").default}/>
          </div>
        </section>
          
        </div>
       
    )
}
export default Hero