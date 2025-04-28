import Image from "next/image";
import info from "../content/info.json";
// import profilePic from "../content/profilePic.jpg";

function AboutMe(){
  return(
    <div>
      <Image src={info.AboutMe['image']} 
        width={300}
        height={300}/>
      <div>
        <h3>{info.AboutMe['name']}</h3>
        <h5>{info.AboutMe['occupation']}</h5>
        <p>{info.AboutMe['description']}</p>
        <ul>{info.AboutMe['skills'].map((skill) => 
          <li>{skill}</li>
        )}</ul>
      </div>
    </div>
  );
}

export default AboutMe