import "../../src/components/Headline.css";

function Headline({ header }) {
  return (
    <h2 style={{ fontSize: "60px" }}>
      {"<"}
      {header}
      {"/>"}
    </h2>
  );
}

export default Headline;
