import "./Projects.css";

function ProjectView({ link, title, image, projecttitle, technologies }) {
  return (
    <div className="col-4">
      <a href={link} target="_blank" alt={projecttitle} title={title}>
        <img
          src={image}
          className="project-image"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        ></img>
      </a>
      <div className="project-title">
        <h3>{projecttitle}</h3>
        <p>{technologies}</p>
      </div>
    </div>
  );
}

export default ProjectView;
