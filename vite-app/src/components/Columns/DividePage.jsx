function DividePage({ education, experience }) {
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-6">
          <img src={education} style={{ margin: "0px" }}></img>
        </div>
        <div className="col-6">
          <img src={experience} style={{ margin: "0px" }}></img>
        </div>
      </div>
    </div>
  );
}

export default DividePage;
