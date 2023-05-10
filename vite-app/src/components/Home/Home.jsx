import "../../components/Home/Home.css";
import weatherapp from "../../img/weatherapp.png";
import dictionaryapp from "../../img/dictionaryapp.png";
import employeemadness from "../../img/employeemadness.png";
import statement from "../../img/statement.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  return (
    <div>
      <img src={statement} className="img-fluid"></img>
      <div style={{ textAlign: "center" }}>
        <AnchorLink href="#contact" className="contact-link">
          <button>Contact me</button>
        </AnchorLink>
      </div>
      <h2 className="latest-projects">LATEST PROJECTS ...</h2>
      <div className="container text-center">
        <div className="row justify-content-center projectimages">
          <div className="col">
            <a
              href="https://optimistic-curran-8bd91f.netlify.app/"
              target="_blank"
            >
              {" "}
              <img src={weatherapp}></img>
            </a>
          </div>
          <div className="col">
            <a
              href="https://frosty-lumiere-3bb161.netlify.app/"
              target="_blank"
            >
              <img src={dictionaryapp}></img>
            </a>
          </div>
          <div className="col">
            <a
              href="https://github.com/BernadetteCh/my-employees-data"
              target="_blank"
            >
              <img src={employeemadness}></img>
            </a>
          </div>
        </div>
      </div>
      <AnchorLink href="#projects" className="projects-link">
        <p>Click here for more ...</p>
      </AnchorLink>
    </div>
  );
}

export default Home;
