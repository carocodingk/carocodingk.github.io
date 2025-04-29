import info from "../content/info.json";
import ProjectCard from "./ProjectCard";
import style from "../styles/components.module.css"

function Projects(){
  return(
    <div id='Projects' className={style.project} >
      {info.Projects.map((project) => 
        <ProjectCard project={project} />
      )}
    </div>
  );
}

export default Projects;