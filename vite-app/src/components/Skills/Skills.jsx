import Headline from "../../components/Headline.jsx";
import skills from "../../img/skills.png";
import SkillIcons from "./SkillIcon.jsx";
import "../../components/Skills/Skills.css";
import growthmindsettree from "../../img/growthmindsettree.png";
import javascript from "../../img/technologies/javascript.png";
import html from "../../img/technologies/html5.png";
import css from "../../img/technologies/css.png";
import postgresql from "../../img/technologies/postgresql.png";
import expressjs from "../../img/technologies/expressjs.png";
import reacticon from "../../img/technologies/react.png";
import git from "../../img/technologies/git.png";
import bootstrapicon from "../../img/technologies/bootstrap.png";
import java from "../../img/technologies/java.png";
import mongodb from "../../img/technologies/mongodb.png";
import mysql from "../../img/technologies/mysql.png";
import spring from "../../img/technologies/spring.png";
import nodejs from "../../img/technologies/nodejs.png";
import shecodesreact from "../../img/shecodesreact.png";
import shecodesfrontend from "../../img/shecodesfrontend.png";

function Skills() {
  return (
    <div>
      <Headline header={"Skills"} />
      <div className="content-container container">
        <div className="row d-block d-lg-flex">
          <div className="col-6 mt-5">
            <SkillIcons icon={spring} />
            <SkillIcons icon={javascript} />
            <SkillIcons icon={html} />
            <SkillIcons icon={css} />
            <SkillIcons icon={postgresql} />
            <SkillIcons icon={expressjs} />
            <SkillIcons icon={reacticon} />
            <SkillIcons icon={git} />
            <SkillIcons icon={bootstrapicon} />
            <SkillIcons icon={java} />
            <SkillIcons icon={mongodb} />
            <SkillIcons icon={mysql} />
            <SkillIcons icon={nodejs} />

            <div className="certificates">
              <img
                src={shecodesfrontend}
                className="img-fluid shecodescertificate"
              ></img>
              <img
                src={shecodesreact}
                className="img-fluid shecodescertificate"
              ></img>
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
