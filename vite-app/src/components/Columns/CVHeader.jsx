import "./CV.css";

function CVHeader({ education, experience }) {
  return (
    <div className="container text-center">
      <div className="row justify-content-evenly">
        <div className="col-2">
          <img
            src={education}
            style={{ margin: "0px", maxWidth: "200px" }}
            className="cvheader-picture"
          ></img>
        </div>
        <div className="col-2">
          <img
            src={experience}
            style={{ margin: "0px", maxWidth: "200px" }}
            className="cvheader-picture"
          ></img>
        </div>
      </div>
      <p>hint: click on the leafs ...</p>
    </div>
  );
}

export default CVHeader;
