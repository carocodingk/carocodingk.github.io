// import LinksBar from "./LinksBar";
import AboutMe from "./AboutMe";
import Skills from "./Skills.jsx";
import Projects from "./Projects";
import styles from "../styles/components.module.css"
import { lato } from "@/styles/fonts";

function Homepage(){
  return (
    <div id={styles.homepage} className={lato.className} >
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default Homepage