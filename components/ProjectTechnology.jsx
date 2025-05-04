import style from "../styles/components.module.css";

function ProjectTechnology({technology}){
  return(
    <div id={style.projecttechnology}>
      {technology.map((tech) => 
        <div className={style.projecttech_item}>{tech}</div>
      )}
    </div>
  );
}

export default ProjectTechnology;