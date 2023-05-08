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

function Projects() {
  return (
    <div>
      <Headline header={"Projects"} />
      <div className="container">
        <div className="row">
          <ProjectView
            image={robocat}
            projecttitle={"RoboCats"}
            technologies={"Springboot, Java"}
            link={"https://github.com/BernadetteCh/RoboCats"}
          />
          <ProjectView
            image={tictactoe}
            projecttitle={"TicTacToe"}
            technologies={"html, css and javascript, bootstrap"}
            link={"https://ubiquitous-chebakia-24042d.netlify.app/"}
          />

          <ProjectView
            image={reactweatherapp}
            projecttitle={"React-Weatherapp"}
            technologies={" React, Axios, Bootstrap, Restful API"}
            link={"https://optimistic-curran-8bd91f.netlify.app/"}
          />

          <ProjectView
            image={dictionaryapp}
            projecttitle={"Dictionary-Weatherapp"}
            technologies={" React, Axios, Bootstrap, Restful API"}
            link={"https://frosty-lumiere-3bb161.netlify.app/"}
          />
          <ProjectView
            image={mars}
            projecttitle={"MarsRover"}
            technologies={"Java"}
            link={"#"}
          />
          <ProjectView
            image={myemployeesdata}
            projecttitle={"My_EmployeeMadness"}
            technologies={"MongoDB, ExpressJS, React"}
            link={"https://github.com/BernadetteCh/my-employees-data/"}
          />
          <ProjectView
            image={weatherapp}
            projecttitle={"Weatherapp"}
            technologies={"HTML, CSS and JavaScript, Bootstrap"}
            link={"https://xenodochial-noether-025d51.netlify.app/"}
          />
          <ProjectView
            image={calculatorapp}
            projecttitle={"CalculatorApp"}
            technologies={"HTML, CSS and JavaScript, Bootstrap"}
            link={"https://goofy-goldstine-6e0330.netlify.app/"}
          />
          <ProjectView
            image={italyapp}
            projecttitle={"Learn_ItalianApp"}
            technologies={"HTML, CSS and JavaScript, Bootstrap (first project)"}
            link={"https://confident-thompson-888a16.netlify.app/"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
