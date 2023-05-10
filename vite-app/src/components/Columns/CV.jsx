import "../Columns/CV.css";
import Column from "../Columns/Column.jsx";

function CV({
  leaf,
  educationheader,
  educationsubheader,
  experienceheader,
  experiencesubheader,
}) {
  return (
    <div className="container text-center">
      <div className="row justify-content-evenly">
        <div className="col-4" style={{ textAlign: "right" }}>
          <Column
            headertext={educationheader}
            subheadertext={educationsubheader}
          />
        </div>
        <div className="col-1">
          <img src={leaf} style={{ margin: "0px", maxWidth: "50px" }}></img>
        </div>
        <div className="col-4" style={{ textAlign: "left", marginLeft: "0px" }}>
          <Column
            headertext={experienceheader}
            subheadertext={experiencesubheader}
          />
        </div>
      </div>
    </div>
  );
}

export default CV;
