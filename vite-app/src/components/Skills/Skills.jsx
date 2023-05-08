import Headline from "../../components/Headline.jsx";
import skills from "../../img/skills.png";
import SkillIcons from "./SkillIcon.jsx";
import "../../components/Skills/Skills.css";
import growthmindsettree from "../../img/growthmindsettree.png";
import javascript from "../../img/technologies/javascript.svg";
import html from "../../img/technologies/html5.png";
import css from "../../img/technologies/css.svg";
import postgresql from "../../img/technologies/postgresql.svg";
import expressjs from "../../img/technologies/expressjs.svg";
import reacticon from "../../img/technologies/react.svg";
import git from "../../img/technologies/git.svg";
import bootstrapicon from "../../img/technologies/bootstrap.svg";
import java from "../../img/technologies/java.svg";
import mongodb from "../../img/technologies/mongodb.png";
import mysql from "../../img/technologies/mysql.svg";
import nodejs from "../../img/technologies/nodejs.svg";
import shecodesreact from "../../img/shecodesreact.png";

function Skills() {
  return (
    <div>
      <Headline header={"Skills"} />
      <div className="content-container container">
        <div className="row ">
          <div className="col-6 mt-5">
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
                src={shecodesreact}
                className="img-fluid shecodescertificate"
              ></img>
              <img
                src={shecodesreact}
                className="img-fluid shecodescertificate"
              ></img>
            </div>
          </div>
          <div className="col-6 mindsettree">
            <img src={growthmindsettree} className="tree"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
