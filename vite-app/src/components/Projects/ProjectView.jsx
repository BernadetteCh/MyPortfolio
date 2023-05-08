import "./Projects.css";

function ProjectView({ link, image, projecttitle, technologies }) {
  return (
    <div className="col-lg-4">
      <a href={link} target="_blank" alt={projecttitle}>
        <img src={image} className="project-image"></img>
      </a>
      <div className="project-title">
        <h3>{projecttitle}</h3>
        <p>{technologies}</p>
      </div>
    </div>
  );
}

export default ProjectView;
