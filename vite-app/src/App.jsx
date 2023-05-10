import "./App.css";
import "./components/Navbar/NavigationBar.jsx";
import NavigationBar from "./components/Navbar/NavigationBar.jsx";
import AboutMe from "./components/About/AboutMe.jsx";
import Home from "./components/Home/Home.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <NavigationBar />
      <section id="home">
        <Home />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
