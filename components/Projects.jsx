import info from "../content/info.json";
import ProjectCard from "./ProjectCard";

function Projects(){
  return(
    <div id='Projects'>
      {info.Projects.map((project) => 
        <ProjectCard project={project} />
      )}
    </div>
  );
}

export default Projects;