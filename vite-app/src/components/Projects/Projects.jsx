import "./Projects.css";
import Headline from "../../components/Headline.jsx";
import ProjectView from "../Projects/ProjectView.jsx";
import robocat from "../../img/projects/robocat.png";
import tictactoe from "../../img/projects/TicTacToeGame.png";
import reactweatherapp from "../../img/weatherapp.png";
import weatherapp from "../../img/projects/weatherapp2.png";
import dictionaryapp from "../../img/dictionaryapp.png";
import myemployeesdata from "../../img/employeemadness.png";
import italyapp from "../../img/projects/learnItalianApp.png";
import calculatorapp from "../../img/projects/calculator.png";
import mars from "../../img/projects/mars.png";
import { projectsData } from "./Projectsdata";

function Projects() {
  return (
    <div>
      <Headline header={"Projects"} />
      <div className="container">
        <div className="row ">
          {projectsData.map((project, index) => {
            return (
              <ProjectView
                key={index}
                image={project.name}
                title={project.title}
                projecttitle={project.projecttitle}
                technologies={project.technologies}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
