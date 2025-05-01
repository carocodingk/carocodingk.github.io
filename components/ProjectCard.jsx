import Image from "next/image";
import ProjectButtons from "./ProjectButtons";
import { abril_fatface } from "../styles/fonts.jsx"
import style from "../styles/components.module.css"

function ProjectCard({project}){
  return(
    <div className={style.project_card}>
      <Image src= {project.image} 
        width={200}
        height={200} />
      <div className={style.project_card_data}>
        <div id={style.project_card_title} className={abril_fatface.className} >
          <h4>{project.title}</h4>
          <ProjectButtons url1={project.url1} url2={project.url2} />
        </div>
        <div className={style.project_description}>
          {project.description}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard