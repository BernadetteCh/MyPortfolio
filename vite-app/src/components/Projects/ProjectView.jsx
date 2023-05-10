import "./Projects.css";

function ProjectView({ link, title, image, projecttitle, technologies }) {
  return (
    <div className="col-4">
      <a href={link} target="_blank" alt={projecttitle} title={title}>
        <img src={image} className="project-image "></img>
      </a>
      <div className="project-title">
        <h3>{projecttitle}</h3>
        <p>{technologies}</p>
      </div>
    </div>
  );
}

export default ProjectView;
