import React from "react";
import Header from "../Header"
import "../../styles/heroes-styles/footer.css"
function Footer(){
  return(
    <div className="footer-parent">
      <Header icon={"light"}/>
      <div className="bottom-infobox">
        <div className="contact-info">
          <p>Designo Central Office</p>
          <p>3886 Wellington Street</p>
          <p>Toronto, Ontario M9C 3J5</p>
        </div>
        <div className="contact-info">
          <p>Contact Us (Central Office)</p>
          <p>P : +1 253-863-8967</p>
          <p>M : contact@designo.co</p>
        </div>
        <div className="social-media">
          <img src={require("../../assets/shared/desktop/icon-facebook.svg").default}/>
          <img src={require("../../assets/shared/desktop/icon-youtube.svg").default}/>
          <img src={require("../../assets/shared/desktop/icon-twitter.svg").default}/>
          <img src={require("../../assets/shared/desktop/icon-pinterest.svg").default}/>
          <img src={require("../../assets/shared/desktop/icon-instagram.svg").default}/>
        </div>
      </div>
    </div>
  )
}
export default Footer