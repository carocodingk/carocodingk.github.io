// import info from "@/pages/info.json";
import info from "../info.json";

function AboutMe(){
    return(
        <div>
            <div>
                <h3>{info.AboutMe['name']}</h3>
                <h5>{info.AboutMe['occupation']}</h5>
                <p>{info.AboutMe['description']}</p>
            </div>
        </div>
    );
}

export default AboutMe