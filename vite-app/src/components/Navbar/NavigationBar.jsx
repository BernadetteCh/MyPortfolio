import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar expand="lg" style={{ marginTop: "20px" }}>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px", marginLeft: "auto" }}
          navbarScroll
        >
          <Nav.Link
            as={Link}
            to="/"
            style={{
              fontFamily: "var(--navcursiv-family)",
              fontStyle: "italic",
              fontSize: "30px",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/aboutme"
            style={{
              fontFamily: "var(--navcursiv-family)",
              fontStyle: "italic",
              fontSize: "30px",
            }}
          >
            About me
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/projects"
            style={{ fontFamily: "var(--nav-font)", fontSize: "30px" }}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/skills"
            style={{ fontFamily: "var(--nav-font)", fontSize: "30px" }}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            style={{ fontFamily: "var(--nav-font)", fontSize: "30px" }}
            className="berni"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
