import Image from "next/image";
import ProjectButtons from "./ProjectButtons";
import style from "../styles/components.module.css"

function ProjectCard({project}){
return(
  <div className={style.project}>
    <Image src= {project.image} 
      width={200}
      height={200} />
    <div className={style.project_data}>
      <div className={style.project_title} >
        <h5>{project.title}</h5>
        <ProjectButtons url1={project.url1} url2={project.url2} />
      </div>
      <p>{project.description}</p>
    </div>
  </div>
);
}

export default ProjectCard