import "../../src/components/Headline.css";

function Headline({ header }) {
  return (
    <h2 style={{ fontSize: "80px" }}>
      {"<"}
      {header}
      {"/>"}
    </h2>
  );
}

export default Headline;
