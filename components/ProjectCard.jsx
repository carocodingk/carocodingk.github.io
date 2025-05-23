import Image from "next/image";
import ProjectButtons from "./ProjectButtons";
import { abril_fatface } from "../styles/fonts.jsx"
import style from "../styles/components.module.css"
import ProjectTechnology from "./ProjectTechnology";

function ProjectCard({project}){
  return(
    <div className={style.projectcard}>
      <div className={style.projectcard_text}>
        <div id={style.projectcard_title}>
          <h3 className={abril_fatface.className}>{project.title}</h3>
          <ProjectButtons url1={project.url1} url2={project.url2} />
        </div>
        <div>
          {project.description.map((line, key) => 
            <p key={key} className={style.paragraph}>{line}</p>
          )}
          {project.description_list.length > 0?
            <ul className={style.projectcard_description_list}>
              {project.description_list.map((item, key) =>
                <li key={key} className={style.projectcard_description_item}>{item}</li>
              )}
            </ul>
            :
            null}
        </div>
        <ProjectTechnology technology={project.technology}/>
      </div>
      <Image src= {project.image} id={style.projectcard_image}
        alt={project.alt}
        width={300}
        height={167} />
    </div>
  );
}

export default ProjectCard