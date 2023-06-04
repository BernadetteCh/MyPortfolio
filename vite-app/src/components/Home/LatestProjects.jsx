import React from "react";

function LatestProjects({ project }) {
  return (
    <div className="col">
      <a href={project.link} target="_blank">
        {" "}
        <img
          src={project.imgSrc}
          style={{
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
          alt={project.name}
        ></img>
      </a>
    </div>
  );
}

export default LatestProjects;
