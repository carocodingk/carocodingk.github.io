import style from "../styles/components.module.css"
import {special_elite} from "../styles/fonts"
import { SiCplusplus, SiMysql, SiMultisim, SiLabview, SiJupyter, SiTableau } from "react-icons/si";
import { FaReact, FaPython } from "react-icons/fa"
import { RiNextjsLine} from "react-icons/ri";
import { TbBrandJavascript, TbFileTypeCss, TbFileTypeHtml } from "react-icons/tb";

function Skills(){
  return(
    <div id='Skills' className={style.section}>
      <h3 id={style.skills_title} className={special_elite.className}>SKILLS</h3>
      <div id={style.skills}>
        <div id={style.skills_container}>
          <TbBrandJavascript className={style.skills_icons}/>
          <FaReact className={style.skills_icons} />
          <RiNextjsLine className={style.skills_icons} /> 
          <SiCplusplus className={style.skills_icons} />
          <FaPython className={style.skills_icons} />
          <TbFileTypeHtml  className={style.skills_icons}/>
          <TbFileTypeCss className={style.skills_icons}/>
          <SiMysql className={style.skills_icons}/>
          <SiJupyter className={style.skills_icons}/>
          <SiTableau className={style.skills_icons}/>
          <SiMultisim className={style.skills_icons}/>
          <SiLabview className={style.skills_icons}/>
        </div>
      </div>
    </div>
    );
}

export default Skills;