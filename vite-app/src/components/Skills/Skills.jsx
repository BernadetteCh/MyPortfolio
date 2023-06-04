import Headline from "../../components/Headline.jsx";
import SkillIcon from "./SkillIcon.jsx";
import "../../components/Skills/Skills.css";
import growthmindsettree from "../../img/growthmindsettree.png";
import { icons } from "./Icons";
import Certificates from "./Certificates.jsx";

function Skills() {
  return (
    <div>
      <Headline header={"Skills"} />
      <div className="content-container container">
        <div className="row d-block d-lg-flex">
          <div className="col-6 mt-5">
            {icons.map((icon, index) => {
              return <SkillIcon icon={icon} key={index} />;
            })}
            <div className="certificates">
              <Certificates />
            </div>
          </div>
          <div className="col-6 d-lg-block d-none mindsettree">
            <img src={growthmindsettree} className="tree"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
