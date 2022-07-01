import React, {useLayoutEffect, useState, useEffect} from "react";
import "../styles/locations.css"
import Footer from "./heroes/Footer";
import ContactHero from "./heroes/ContactHero";
function Locations(){
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
})
const [matches, setMatches] = useState(
  window.matchMedia("(min-width: 1050px)").matches
)
useEffect(() => {
  window
  .matchMedia("(min-width: 1050px)")
  .addEventListener('change', e => setMatches( e.matches ));
}, []);

 const imgBg = require("../assets/shared/desktop/bg-pattern-two-circles.svg").default
 const divStyle = {
    backgroundImage: `url(${imgBg})`,
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'bottom left',
    backgroundSize: '450px'
   }
 return(
    <div className="locations-parent">
    <div className="narrow-container">
     <div className="locations-grid">
        <div id="canada" className="location-el" style={divStyle}>
         <h1>Canada</h1>
        <div className="location-infobox">
         <div className="location-address">
           <p><strong>Designo Central Office</strong></p>
           <p>3886 Wellington Street</p>
           <p>Toronto, Ontario M9C 3J5</p>
         </div>
         <div className="location-contact">
           <p><strong>Contact</strong></p>
           <p>P : +1 253-863-8967</p>
           <p>M : contact@designo.co</p>
         </div>
        </div>
       </div>
       <div className="location-map" id="canada-map">
        {matches ? <img src={require("../assets/locations/desktop/image-map-canada.png").default}/>
                  : <img src={require("../assets/locations/tablet/image-map-canada.png").default}/>}
       </div>

       <div className="location-map" id="australia-map">
       {matches ? <img src={require("../assets/locations/desktop/image-map-australia.png").default}/>
                  : <img src={require("../assets/locations/tablet/image-map-australia.png").default}/>}
       </div>
       <div id="australia" className="location-el" style={divStyle}>
         <h1>Australia</h1>
         <div className="location-infobox">
          <div className="location-address">
           <p><strong>Designo AU Office</strong></p>
           <p>19 Balonne Street</p>
           <p>New South Wales 2443</p>
          </div>
          <div className="location-contact">
           <p><strong>Contact</strong></p>
           <p>P : (02) 6720 9092</p>
           <p>M : contact@designo.au</p>
          </div>
         </div>
       </div>
       

       <div id="uk" className="location-el" style={divStyle}>
         <h1>United Kingdom</h1>
         <div className="location-infobox">
          <div className="location-address">
           <p><strong>Designo UK Office</strong></p>
           <p>13  Colorado Way</p>
           <p>Rhyd-y-fro SA8 9GA</p>
          </div>
          <div className="location-contact">
           <p><strong>Contact</strong></p>
           <p>P : 078 3115 1400</p>
           <p>M : contact@designo.uk</p>
          </div>
         </div>
       </div>
       <div className="location-map" id="uk-map">
       {matches ? <img src={require("../assets/locations/desktop/image-map-united-kingdom.png").default}/>
                  : <img src={require("../assets/locations/tablet/image-map-uk.png").default}/>}
       </div>

     </div> {/**end of grid container */}
     <ContactHero/>
     </div>
     <Footer/>
    </div>
 )
}

export default Locations