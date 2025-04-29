import Image from "next/image";
import LinksBar from "./LinksBar";
import info from "../content/info.json";
import style from "../styles/components.module.css"
import {abril_fatface, lato, special_elite} from "../styles/fonts"


function AboutMe(){
  return(
    <div id={style.aboutme}>
      <div>
        <Image id={style.aboutme_img} src={info.AboutMe['image']} 
          width={300}
          height={300}/>
        <LinksBar />
      </div>
      <div>
        <h1  className={abril_fatface.className}>{info.AboutMe['name']}</h1>        
        <h3 className={special_elite.className}>{info.AboutMe['occupation'].toUpperCase()}</h3>
        <p className={lato.className}>{info.AboutMe['description']}</p>
        <div>
          <h5>SKILLS</h5>
          <ul>{info.AboutMe['skills'].map((skill) => 
            <li>{skill}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe