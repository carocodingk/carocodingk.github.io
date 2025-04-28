import Image from "next/image";
import Link from "next/link";

function ProjectCard({project}){
return(
  <div>
    <Image src= {project.image} 
      width={300}
      height={300} />
    <h5>{project.title}</h5>
    <p>{project.description}</p>
    <div>
      <Link href={project.link1}>
        <input type="button"
          value={'Github'}
        />
      </Link>
      <Link href={project.link2}>
        <input type="button"
          value={'site'}
        />
      </Link>
    </div>
  </div>
);
}

export default ProjectCard