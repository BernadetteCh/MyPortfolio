import React from "react";
import "../../components/Home/Home.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Body() {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AnchorLink
        href="#contact"
        className="contact-link"
        style={{ margin: "0px" }}
      >
        <button className="contact-button">Contact me</button>
      </AnchorLink>
      <AnchorLink
        href="#skills"
        className="contact-link"
        style={{ margin: "0px" }}
      >
        <button className="skill-button">Skills</button>
      </AnchorLink>
    </div>
  );
}

export default Body;
