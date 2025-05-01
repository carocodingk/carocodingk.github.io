import Image from "next/image";
import LinksBar from "./LinksBar";
import info from "../content/info.json";
import style from "../styles/components.module.css"
import {abril_fatface, lato, special_elite} from "../styles/fonts"
import { SiCplusplus, SiCplusplusbuilder, SiJavascript, SiCsswizardry } from "react-icons/si";
// import { TbBrandJavascript } from "react-icons/tb";

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
        <div>
          <h3 id={style.aboutme_skills_title} className={special_elite.className}>SKILLS</h3>
          <div id={style.aboutme_skills_container}>
            <SiCplusplus className={style.aboutme_skills_icons} />
            <SiCplusplusbuilder className={style.aboutme_skills_icons} />
            <SiJavascript className={style.aboutme_skills_icons} />
            <SiCsswizardry className={style.aboutme_skills_icons} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe