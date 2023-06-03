import React from "react";
import "../../components/Home/Home.css";
import { latestProjects } from "./LatestProject";
import LatestProjects from "./LatestProjects";

function Footer() {
  return (
    <div>
      <h2 className="latest-projects">LATEST PROJECTS ...</h2>
      <div className="container text-center">
        <div className="row justify-content-center projectimages">
          <LatestProjects project={latestProjects[0]} />
          <LatestProjects project={latestProjects[1]} />
          <LatestProjects project={latestProjects[2]} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
