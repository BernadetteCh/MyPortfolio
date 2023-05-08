import "../../components/Home/Home.css";
import header from "../../img/header.png";
import weatherapp from "../../img/weatherapp.png";
import dictionaryapp from "../../img/dictionaryapp.png";
import employeemadness from "../../img/employeemadness.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src={header}></img>
      <div style={{ textAlign: "center" }}>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            display: "block",
            margin: "0px auto",
            fontSize: "20px",
          }}
        >
          <button>Contact me</button>
        </Link>
      </div>
      <h2 style={{ fontWeight: "lighter", marginTop: "50px" }}>
        LATEST PROJECTS ...
      </h2>
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
      <Link
        to="/projects"
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "18px",
        }}
      >
        {" "}
        <p>Click here for more ...</p>
      </Link>
    </div>
  );
}

export default Home;
