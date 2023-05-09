import { Navbar, Nav } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";

function NavigationBar() {
  return (
    <Navbar expand="lg" style={{ marginTop: "20px" }}>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0 fixed-top justify-content-end"
          style={{ maxHeight: "100px", marginLeft: "auto" }}
          navbarScroll
        >
          <AnchorLink
            href="#home"
            style={{
              fontFamily: "var(--navcursiv-family)",
              padding: "0px 10px",
              fontStyle: "italic",
              fontSize: "25px",
              color: "grey",
              textDecoration: "none",
            }}
          >
            Home
          </AnchorLink>

          <AnchorLink
            href="#aboutme"
            style={{
              fontFamily: "var(--navcursiv-family)",
              padding: "0px 10px",
              fontStyle: "italic",
              fontSize: "25px",
              color: "grey",
              textDecoration: "none",
            }}
          >
            About me
          </AnchorLink>

          <AnchorLink
            href="#projects"
            style={{
              fontFamily: "var(--nav-font)",
              padding: "0px 10px",
              fontSize: "25px",
              color: "grey",
              textDecoration: "none",
            }}
          >
            Projects
          </AnchorLink>

          <AnchorLink
            href="#skills"
            style={{
              fontFamily: "var(--nav-font)",
              padding: "0px 10px",
              fontSize: "25px",
              color: "grey",
              textDecoration: "none",
            }}
          >
            Skills
          </AnchorLink>

          <AnchorLink
            href="#contact"
            style={{
              fontFamily: "var(--nav-font)",
              padding: "0px 10px",
              fontSize: "25px",
              color: "grey",
              textDecoration: "none",
            }}
          >
            Contact
          </AnchorLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
