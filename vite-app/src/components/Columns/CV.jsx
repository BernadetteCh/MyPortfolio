import "../Columns/CV.css";
import Column from "../Columns/Column.jsx";

function CV({ leaf, headertext, subheadertext }) {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-6">
          <Column headertext={headertext} subheadertext={subheadertext} />
        </div>
        <div className="col-1">
          <img src={leaf} style={{ margin: "0px", maxWidth: "150px" }}></img>
        </div>
        <div className="col-5">
          <Column headertext={headertext} subheadertext={subheadertext} />
        </div>
      </div>
    </div>
  );
}

export default CV;
