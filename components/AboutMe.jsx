import Image from "next/image";
import LinksBar from "./LinksBar";
import info from "../content/info.json";
import style from "../styles/components.module.css"
import {abril_fatface, lato, special_elite} from "../styles/fonts"
// import { SiCplusplus, SiMysql, SiMultisim, SiLabview, SiJupyter, SiTableau } from "react-icons/si";
// import { FaReact, FaPython } from "react-icons/fa"
// import { RiNextjsLine} from "react-icons/ri";
// import { TbBrandJavascript, TbFileTypeCss, TbFileTypeHtml } from "react-icons/tb";
import Skills from "./Skills.jsx";

function AboutMe(){
  return(
    <div>
      <div>
        <div id={style.aboutme_container}>
          <Image id={style.aboutme_img} src={info.AboutMe['image']} 
            width={300}
            height={300}/>
        </div>
        <LinksBar />
      </div>
      <div>
        <h1 id={style.aboutme_name} className={abril_fatface.className}>{info.AboutMe['name']}</h1>        
        <h2 id={style.aboutme_occupation } className={special_elite.className}>{info.AboutMe['occupation'].toUpperCase()}</h2>
        <div id={style.aboutme_text} className={lato.className}>{info.AboutMe['description']}</div>
        {/* <div id={style.skills}>
          <h3 id={style.aboutme_skills_title} className={special_elite.className}>SKILLS</h3>
          <div id={style.aboutme_skills_container}>
            <TbBrandJavascript className={style.aboutme_skills_icons}/>
            <FaReact className={style.aboutme_skills_icons} />
            <RiNextjsLine className={style.aboutme_skills_icons} /> 
            <SiCplusplus className={style.aboutme_skills_icons} />
            <FaPython className={style.aboutme_skills_icons} />
            <TbFileTypeHtml  className={style.aboutme_skills_icons}/>
            <TbFileTypeCss className={style.aboutme_skills_icons}/>
            <SiMysql className={style.aboutme_skills_icons}/>
            <SiJupyter className={style.aboutme_skills_icons}/>
            <SiTableau className={style.aboutme_skills_icons}/>
            <SiMultisim className={style.aboutme_skills_icons}/>
            <SiLabview className={style.aboutme_skills_icons}/>
          </div>
        </div> */}
        <Skills />
      </div>
    </div>
  );
}

export default AboutMe