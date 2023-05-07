import "../../components/Home/Home.css";
import header from "../../img/header.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <img src={header}></img>

      <div style={{ textAlign: "center" }}>
        <Link
          to="/contact"
          style={{
            textDecoration: "none",
            display: "block",
            margin: "0px auto",
            fontSize: "20px",
          }}
        >
          <button>Contact me</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
