import Image from "next/image";
import ProjectButtons from "./ProjectButtons";

function ProjectCard({project}){
return(
  <div>
    <Image src= {project.image} 
      width={300}
      height={300} />
    <div>
      <div>
        <h5>{project.title}</h5>
        <ProjectButtons url1={project.url1} url2={project.url2} />
      </div>
    </div>

    <p>{project.description}</p>
  </div>
);
}

export default ProjectCard