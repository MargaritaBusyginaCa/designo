import React, {useState, useRef, useEffect} from "react"
import { Link } from "react-router-dom"
import "../../styles/heroes-styles/design.css"

function Design({title, projects, subtitle}){
  const [load, setLoad] = useState(false)
  const refWeb = useRef()
  const refApp = useRef()
  const refGraph = useRef()
  const imgBg = require('../../assets/web-design/desktop/bg-pattern-intro-web.svg').default
  const divStyle = {
    backgroundImage: `url(${imgBg})`,
    backgroundRepeat  : 'repeat',
    backgroundPosition: 'center',
  }
  useEffect(() =>{
    //design--title
   if(title === "Web Design"){
    refWeb.current.className="hide"
    refApp.current.className="design--title"
    refGraph.current.className="design--title"
   }else if(title === "App Design"){
    refWeb.current.className="design--title"
    refApp.current.className="hide"
    refGraph.current.className="design--title"
   }else{
    refWeb.current.className="design--title"
    refApp.current.className="design--title"
    refGraph.current.className="hide"
   }
  }, [load])
  const imgBgWeb = require('../../assets/home/desktop/image-web-design-large.jpg').default
  const imgBgApp = require('../../assets/home/desktop/image-app-design.jpg').default
  const imgBgGraph = require('../../assets/home/desktop/image-graphic-design.jpg').default
    
    const styleWeb ={
        backgroundImage: `url(${imgBgWeb})`,
        backgroundSize: 'cover'
    }
    const styleApp ={
        backgroundImage: `url(${imgBgApp})`,
        backgroundSize: 'cover'
    }
    const styleGraph ={
        backgroundImage: `url(${imgBgGraph})`,
        backgroundSize: 'cover'
    }
  
  const projectDisplay = projects.map(project =>{
    return(
        <div className="project-el" key={project.id}>
          <div className="project-img">
            <img src={require(`../../assets/${project.img}.jpg`).default}/>
          </div>
          <div className="project-info">
            <h3>{project.title}</h3>
            <h4>{project.definition}</h4>
          </div>
        </div>
    )
  })

  return(
    <div className="design--container parent">
      <div className="design-title-container" style={divStyle}> 
      <h2>{title}</h2>
      <p>{subtitle}</p>
      </div>
    <div className="projects">
     {projectDisplay}
    </div>

    <div className="other-projects">
      <Link to="/webdesign" className="project-link">
        <div style={styleWeb} className="hide" ref={refWeb}>
           <h2>Web Design</h2>
           <p>view projects</p>
         </div>
        </Link>
      <Link to="/appdesign" className="project-link" onClick={() => setLoad(!load)}>
        <div style={styleApp} className="design--title" ref={refApp}>
           <h2>App Projects</h2>
           <p>view projects</p>
        </div>
        </Link>
      <Link to="/graphdesign" className="project-link" onClick={() => setLoad(!load)}>
        <div style={styleGraph} className="design--title" ref={refGraph}>
           <h2>Graphic Design</h2> 
           <p>view projects</p>
          </div>
        </Link>
    </div>

    </div>
  )
}
export default Design