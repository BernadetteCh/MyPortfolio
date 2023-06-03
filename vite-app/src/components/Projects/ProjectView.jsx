import "./Projects.css";

function ProjectView({ link, title, image, projecttitle, technologies }) {
  return (
    <div className="col-4">
      <a href={link} target="_blank" alt={projecttitle} title={title}>
        <img
          src={image}
          className="project-image"
          style={{
            boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
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
