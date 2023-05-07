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
      <div className="row justify-content-center">
        <div className="col-6">
          <Column
            headertext={educationheader}
            subheadertext={educationsubheader}
          />
        </div>
        <div className="col-1">
          <img src={leaf} style={{ margin: "0px", maxWidth: "150px" }}></img>
        </div>
        <div className="col-5">
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
