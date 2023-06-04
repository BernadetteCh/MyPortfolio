import React from "react";

function LatestProjects({ project }) {
  return (
    <div className="col">
      <a href={project.link} target="_blank">
        {" "}
        <img
          src={project.imgSrc}
          // style={{
          //   boxShadow:
          //     "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
          // }}
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
