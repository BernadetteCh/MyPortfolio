import "./Projects.css";
import Headline from "../../components/Headline.jsx";
import ProjectView from "../Projects/ProjectView.jsx";
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
