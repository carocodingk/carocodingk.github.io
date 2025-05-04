import Link from "next/link";
import { FaGithubAlt, FaRegEye } from "react-icons/fa";
import style from "../styles/components.module.css";
// import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectButtons({url1, url2}){
  return(
    <div>
      <Link href={url1}>
        <FaGithubAlt className={style.projectbutton_icon} />
      </Link>
      {url2.length > 0?
        <Link href={url2}>
          <FaRegEye className={style.projectbutton_icon} />
        </Link>
        :
        null      
      }

    </div>
  );
}

export default ProjectButtons;