import style from "../styles/components.module.css";

function ProjectTechnology({technology}){
  return(
    <div id={style.projecttechnology}>
      {technology.map((tech, key) => 
        <div key={key} className={style.projecttech_item}>{tech}</div>
      )}
    </div>
  );
}

export default ProjectTechnology;