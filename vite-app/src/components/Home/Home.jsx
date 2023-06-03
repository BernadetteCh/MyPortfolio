import "../../components/Home/Home.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { latestProjects } from "./LatestProject";
import LatestProjects from "./LatestProjects";
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

function Home() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
