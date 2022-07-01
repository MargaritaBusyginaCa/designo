import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom"
import "../../styles/heroes-styles/countries.css"
function Countries(){
 const [matches, setMatches] = useState(
   window.matchMedia("(max-width: 1109px)").matches
 ) 
 const divImg = require("../../assets/shared/desktop/bg-pattern-small-circle.svg").default
 const divMobile = require("../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg").default
 const divStyle = {
  backgroundImage:`url(${divImg})`,
  backgroundSize: 'cover',
  backgroundSize: '200px',
  backgroundPosition: 'center',
  backgroundRepeat  : 'no-repeat'
 }
 useEffect(() => {
  window
  .matchMedia("(max-width: 1109px)")
  .addEventListener('change', e => setMatches( e.matches ));
}, []);

 return(
    <div className="countries-parent">
     <div className="country-el">
       <div className="country-img" style={divStyle}>
        <img src={require("../../assets/shared/desktop/illustration-canada.svg").default}/>
       </div>
       <div className="county-info">
        <h1>Canada</h1>
        <Link to="/locations" className="location-link">
            <button>See Location</button>
        </Link>
       </div>
     </div>

     <div className="country-el">
       <div className="country-img" style={divStyle}> 
        <img src={require("../../assets/shared/desktop/illustration-australia.svg").default}/>
       </div>
       <div className="county-info">
        <h1>Australia</h1>
        <Link to="/locations" className="location-link">
            <button>See Location</button>
        </Link>
       </div>
     </div>

     <div className="country-el">
       <div className="country-img" style={divStyle}>
        <img src={require("../../assets/shared/desktop/illustration-united-kingdom.svg").default}/>
       </div>
       <div className="county-info">
        <h1>United Kingdom</h1>
        <Link to="/locations" className="location-link">
            <button>See Location</button>
        </Link>
       </div>
     </div>
    </div>
 )
}
export default Countries