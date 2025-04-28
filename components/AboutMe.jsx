import Image from "next/image";
import LinksBar from "./LinksBar";
import info from "../content/info.json";
import style from "../styles/components.module.css"
// import profilePic from "../content/profilePic.jpg";

function AboutMe(){
  return(
    <div id={style.aboutme}>
      <Image id={style.aboutme_img} src={info.AboutMe['image']} 
        width={300}
        height={300}/>
      <div>
        <h1>{info.AboutMe['name']}</h1>
        <h5>{info.AboutMe['occupation'].toUpperCase()}</h5>
        <p>{info.AboutMe['description']}</p>
        <ul>SKILLS{info.AboutMe['skills'].map((skill) => 
          <li>{skill}</li>)}
        </ul>
        <LinksBar />
      </div>
    </div>
  );
}

export default AboutMe