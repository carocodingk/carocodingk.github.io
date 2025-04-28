// import LinksBar from "./LinksBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import styles from "../styles/components.module.css"

function Homepage(){
  return (
    <div id={styles.homepage}>
      {/* <LinksBar /> */}
      <AboutMe />
      <Projects />
    </div>
  );
}

export default Homepage