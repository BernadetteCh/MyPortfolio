import React from "react";
import shecodesreact from "../../img/shecodesreact.png";
import shecodesfrontend from "../../img/shecodesfrontend.png";
import codecoolcertificate from "../../img/codecoolcertificate.png";

function Certificates() {
  return (
    <div>
      <img
        src={shecodesfrontend}
        className="img-fluid shecodescertificate"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      ></img>
      <img
        src={shecodesreact}
        className="img-fluid shecodescertificate"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      ></img>
      <img
        src={codecoolcertificate}
        className="img-fluid codecoolcertificate"
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        }}
      ></img>
    </div>
  );
}

export default Certificates;
