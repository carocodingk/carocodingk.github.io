import NavigationBar from "./NavigationBar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";

function Homepage(){
  return (
    <div>
      <NavigationBar />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default Homepage