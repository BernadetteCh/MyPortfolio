import React from "react";
import "./Home.css";
import beliefStatement from "../../img/beliefStatement.png";
import solutionStruggle from "../../img/solutionStruggle.png";

function Header() {
  return (
    <div>
      <img
        src={beliefStatement}
        className="img-fluid"
        style={{ marginBottom: "80px", fontStyle: "lighter" }}
      ></img>
      <div className="header">
        <h4
          style={{
            fontSize: "30px",
            marginBottom: "40px",
          }}
        >
          HI I AM
        </h4>
        <h1
          style={{
            fontSize: "70px",
            marginBottom: "40px",
            fontFamily: "var(--mainheadline-font-family)!important",
          }}
        >
          {"<"}BERNADETTE CHRISTINER {">"}
        </h1>
        <h6
          style={{
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          FULL STACK SOFTWARE DEVELOPER
        </h6>
      </div>
      <img
        src={solutionStruggle}
        className="img-fluid"
        style={{ width: "250px", marginTop: "0px", marginBottom: "120px" }}
      ></img>
    </div>
  );
}

export default Header;
