import React from "react";
import "../../styles/heroes-styles/quality.css"
function Quality(){
  const imgBg = require('../../assets/shared/desktop/bg-pattern-small-circle.svg').default
  const divStyle = {
    backgroundImage: `url(${imgBg})`,
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
  }   
 return(
    <div className="quality-container">
      <div className="quality-el" >
       <div style={divStyle}>
       <img src={require("../../assets/home/desktop/illustration-passionate.svg").default}/>
       </div>
       <h2>PASSIONATE</h2>
       <p>Each project starts with an in-depth brand research to 
        ensure we only create products that serve a purpose. 
        We merge art, design, and technology into exciting new solutions.</p>
      </div>

      <div className="quality-el">
       <div style={divStyle}>
        <img src={require("../../assets/home/desktop/illustration-resourceful.svg").default}/>
       </div>
       <h2>RESOURCEFUL</h2>
       <p>Everything that we do has a strategic purpose. 
        We use an agile approach in all of our projects and value customer
         collaboration. It guarantees superior results that fulfill our 
         clients' needs.</p>
      </div>

      <div className="quality-el">
       <div style={divStyle}>
        <img src={require("../../assets/home/desktop/illustration-friendly.svg").default}/>
       </div>
       <h2>FRIENDLY</h2>
       <p> We are a group of enthusiastic folks who know how to put people 
        first. Our success depends on our customers, and we strive to give 
        them the best experience a company can provide.</p>
      </div>
    </div>
 )
}
export default Quality