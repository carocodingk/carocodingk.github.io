import info from "../content/info.json";
import ProjectCard from "./ProjectCard";
import { special_elite } from "@/styles/fonts";
import style from "../styles/components.module.css"

function Projects(){
  return(
    <div id='Projects'>
      <h3 id={style.projects_title} className={special_elite.className}>PROJECTS</h3>
      <div>
        {info.Projects.map((project) => 
          <ProjectCard project={project} />
        )}
      </div>
    </div>

  );
}

export default Projects;