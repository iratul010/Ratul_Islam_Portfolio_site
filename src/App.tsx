 
 
import Home from "./Components/Home/Home";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import "./Styles/main.scss";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <div className="app">
        <Home />
        <AboutMe />
        <Skills/>
        <Projects/>
    </div>
  );
};

export default App;
