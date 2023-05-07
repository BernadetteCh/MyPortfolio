import "../Columns/CV.css";
function Column({ headertext, subheadertext }) {
  return (
    <div>
      <span className="header">{headertext}</span>
      <br />
      <span className="subheader">{subheadertext}</span>
    </div>
  );
}

export default Column;
