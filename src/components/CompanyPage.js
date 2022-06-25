import React from "react";
import Footer from "./heroes/Footer";
import "../styles/home.css"
import "../styles/company.css"
import ContactHero from "./heroes/ContactHero";
import Countries from "./heroes/Countries";
function CompanyPage(){
  const divImgDark = require("../assets/about/desktop/bg-pattern-hero-about-desktop.svg").default
  const divImgLight = require("../assets/shared/desktop/bg-pattern-two-circles.svg").default
  const divStyleDark ={
    backgroundImage: `url(${divImgDark})`,
    backgroundSize: 'cover'
    
  }
  const divStylLight ={
    backgroundImage: `url(${divImgLight})`,
    backgroundSize: 'cover',
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: '400px'
  }
  return(
      <div className="about-us--parent">
        <div className="narrow-parent-container">

         <div className="about-us--container">
          <div className="about-us-text" style={divStyleDark}>
            <h1>About Us</h1>
            <p>Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                We've partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. 
                We're always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences.</p>
          </div>
          <img className="about-us-img" src={require("../assets/about/desktop/image-about-hero.jpg").default}/>
         </div>


        <div className="talent-container company-container" style={divStylLight}>
          <img className="talent-img company-img" src={require("../assets/about/desktop/image-world-class-talent.jpg").default}/>
          <div className="company-text about-us-text">
            <h1>World-class talent</h1>
            <p>We are a crew of strategists, problem-solvers, and technologists. 
                Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. 
                We are constantly updating our skills in a myriad of platforms.</p>
            <p>Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. 
                We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our 
                high-quality outcomes that encapsulates their brand's story and mission.</p>
          </div>
        </div>

       <Countries/>
       <div className="real-deal company-container">
         <div className="company-text about-us-text" style={divStylLight}> 
            <h1>The real deal</h1>
            <p>As strategic partners in our clients' businesses, we are ready to take on any challenge as our own. 
                Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. 
                We make design and technology more accessible and give you tools to measure success</p>
            <p>We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
                we inspire audiences to take action and drive real results.</p>
         </div>
          <img className="real-deal-img company-img" src={require("../assets/about/desktop/image-real-deal.jpg").default}/>
       </div>
       <ContactHero/>
      </div> {/* end of narrow container */}

      <Footer />   
     </div>
       
    )
}
export default CompanyPage