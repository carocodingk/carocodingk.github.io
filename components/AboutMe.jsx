import Image from "next/image";
import LinksBar from "./LinksBar";
import info from "../content/info.json";
import style from "../styles/components.module.css"
import {abril_fatface, lato, special_elite} from "../styles/fonts"


function AboutMe(){
  return(
    <div id={style.aboutme}>
      <Image id={style.aboutme_img} src={info.AboutMe['image']} 
        width={300}
        height={300}/>
      <div>
        {/* <h1  className={libre_caslon_text.className}>{info.AboutMe['name']}</h1> */}
        <h1  className={abril_fatface.className}>{info.AboutMe['name']}</h1>        <h5 className={special_elite.className}>{info.AboutMe['occupation'].toUpperCase()}</h5>
        <p className={lato.className}>{info.AboutMe['description']}</p>
        <ul>Skills{info.AboutMe['skills'].map((skill) => 
          <li>{skill}</li>)}
        </ul>
        <LinksBar />
      </div>
    </div>
  );
}

export default AboutMe