import "../../src/components/Headline.css";

function Headline({ header }) {
  return (
    <h2 className="headline">
      {"<"}
      {header}
      {" />"}
    </h2>
  );
}

export default Headline;
