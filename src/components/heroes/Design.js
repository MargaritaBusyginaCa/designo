import React, {useState} from "react"

function Design({title, projects, showProjects, setShowProjects, setReload, reload}){

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
    <div className="design--container" onClick={() => {
        setShowProjects(!showProjects)
        setReload(!reload)
    } }>
    <div className="design--title">
      <h2>{title}</h2>
      <p>view projects</p>
    </div>
    <div className="projects">
      {showProjects ? projectDisplay : null}
    </div>
    </div>
  )
}
export default Design