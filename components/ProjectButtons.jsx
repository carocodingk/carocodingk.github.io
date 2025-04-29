import Link from "next/link";
import { FaGithub, FaExternalLinkAlt  } from "react-icons/fa";
import style from "../styles/components.module.css";
// import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectButtons({url1, url2}){
  return(
    <div className={style.project_buttons}  >
      <Link href={url1}>
        <FaGithub className={style.project_icons} />
      </Link>
      <Link href={url2}>
        <FaExternalLinkAlt className={style.project_icons} />
      </Link>
    </div>
  );
}

export default ProjectButtons;