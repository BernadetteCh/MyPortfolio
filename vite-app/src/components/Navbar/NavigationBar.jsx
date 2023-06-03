import { Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavigationBar() {
  return (
    <Navbar expand="lg" style={{ marginTop: "20px" }} className="fixed-top">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <ul
          className=" mr-auto my-2 my-lg-0 justify-content-end "
          style={{ maxHeight: "100px", marginLeft: "auto" }}
          navbarscroll="true"
        >
          <li>
            <AnchorLink
              href="#home"
              className="d-block d-lg-inline fs-4"
              style={{
                fontFamily: "var(--navcursiv-family)",
                padding: "0px 10px",
                fontStyle: "italic",
                color: "grey",
                textDecoration: "none",
              }}
            >
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#aboutme"
              className="d-block d-lg-inline fs-4"
              style={{
                fontFamily: "var(--navcursiv-family)",
                padding: "0px 10px",
                fontStyle: "italic",
                color: "grey",
                textDecoration: "none",
              }}
            >
              About me
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#projects"
              className="d-block d-lg-inline fs-4"
              style={{
                fontFamily: "var(--nav-font)",
                padding: "0px 10px",
                color: "grey",
                textDecoration: "none",
              }}
            >
              Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#skills"
              className="d-block d-lg-inline fs-4"
              style={{
                fontFamily: "var(--nav-font)",
                padding: "0px 10px",
                color: "grey",
                textDecoration: "none",
              }}
            >
              Skills
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#contact"
              className="d-block d-lg-inline fs-4"
              style={{
                fontFamily: "var(--nav-font)",
                padding: "0px 10px",
                color: "grey",
                textDecoration: "none",
              }}
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
