import "../../src/components/Headline.css";

function Headline({ header }) {
  return (
    <h2 style={{ fontSize: "60px", marginTop: "100px" }}>
      {"<"}
      {header}
      {"/>"}
    </h2>
  );
}

export default Headline;
