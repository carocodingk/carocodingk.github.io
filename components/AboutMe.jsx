import Image from "next/image";
import LinksBar from "./LinksBar";
import info from "../content/info.json";
import style from "../styles/components.module.css"
import {abril_fatface, lato, special_elite} from "../styles/fonts";

function AboutMe(){
  return(
    <div id={style.aboutme} className={style.section}>
      <div>
        <div id={style.aboutme_container}>
          <Image id={style.aboutme_img} src={info.AboutMe['image']} 
            width={300}
            height={300}
            alt={info.AboutMe['alt']} />
        </div>
        <LinksBar />
      </div>
      <div id={style.aboutme_rightpannel}>
        <h1 id={style.aboutme_name} className={abril_fatface.className}>{info.AboutMe['name']}</h1>        
        <h2 id={style.aboutme_occupation } className={special_elite.className}>{info.AboutMe['occupation'].toUpperCase()}</h2>
        <div id={style.aboutme_text} className={lato.className}>
          {info.AboutMe['description'].map((line, key) => 
            <p className={style.paragraph} key={key}>{line}</p>
          )}</div>
      </div>
    </div>
  );
}

export default AboutMe