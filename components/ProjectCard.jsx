import Image from "next/image";
import ProjectButtons from "./ProjectButtons";
import { abril_fatface } from "../styles/fonts.jsx"
import style from "../styles/components.module.css"

function ProjectCard({project}){
  return(
    <div className={style.projectcard}>
      <Image src= {project.image} 
        width={200}
        height={200} />
      <div>
        <div id={style.projectcard_title}>
          <h3 className={abril_fatface.className}>{project.title}</h3>
          <ProjectButtons url1={project.url1} url2={project.url2} />
        </div>
        <div>
          {project.description}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard