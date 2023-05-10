import "../About/AboutMe.css";
import Headline from "../../components/Headline.jsx";
import CVHeader from "../Columns/CVHeader.jsx";
import CV from "../../components/Columns/CV.jsx";
import selfie from "../../img/ich.png";
import education from "../../img/education.png";
import experience from "../../img/experience.png";
import { selfIntroduction1 } from "./SelfIntroduction";
import { selfIntroduction2 } from "./SelfIntroduction";
import { selfIntroduction3 } from "./SelfIntroduction";
import cat from "../../img/cat.png";
import {
  educationMileStone1,
  educationMileStone1Period,
  educationMileStone2,
  educationMileStone3,
  educationMileStone3Period,
  educationMileStone4,
  educationMileStone4Period,
  educationMileStone5,
  educationMileStone5Period,
  experienceMileStone1,
  experienceMileStone1Period,
  experienceMileStone2,
  experienceMileStone2Period,
  experienceMileStone3,
  experienceMileStone3Period,
  experienceMileStone4,
  experienceMileStone4Period,
  experienceMileStone5,
  experienceMileStone5Period,
  studentjobs,
  studentjobsPeriod,
} from "../About/Education";
import leaf from "../../img/leaf.png";

function AboutMe() {
  return (
    <div style={{ margin: "30px" }}>
      <Headline header={"About Me"} />
      <div>
        <img src={selfie} className="profile-picture img-fluid"></img>
      </div>

      <div className="selfintroduction-text">
        <p>{selfIntroduction1}</p>
        <p>{selfIntroduction2}</p>
        <p>{selfIntroduction3}</p>
        <div className="d-flex flex-row-reverse">
          <img
            src={cat}
            style={{ maxWidth: "250px", margin: "0px" }}
            className="img-fluid cat"
          ></img>
        </div>
      </div>

      <div className="mentor-reference">
        <h3 style={{ fontWeight: "bold" }}>References</h3>
        <p>Mentors who supported me during my coding journey</p>
        <p>
          <span className="mentor">Emad Easa Senior Developer</span>
        </p>
        <p>
          <span className="mentor">Guillermo Herrero Senior Developer</span>
        </p>
      </div>

      <CVHeader education={education} experience={experience} />

      <div className="curriculum-vitae">
        <div>
          <CV
            leaf={leaf}
            educationheader={educationMileStone1}
            educationsubheader={educationMileStone1Period}
            experienceheader={experienceMileStone1}
            experiencesubheader={experienceMileStone1Period}
          />
        </div>
        <div>
          <CV
            leaf={leaf}
            educationheader={educationMileStone2}
            educationsubheader={""}
            experienceheader={experienceMileStone2}
            experiencesubheader={experienceMileStone2Period}
          />
        </div>
        <div>
          <CV
            leaf={leaf}
            educationheader={educationMileStone3}
            educationsubheader={educationMileStone3Period}
            experienceheader={""}
            experiencesubheader={""}
          />
        </div>
        <div>
          <CV
            leaf={leaf}
            educationheader={""}
            educationsubheader={""}
            experienceheader={experienceMileStone3}
            experiencesubheader={experienceMileStone3Period}
          />
        </div>
        <div>
          <CV
            leaf={leaf}
            educationheader={educationMileStone4}
            educationsubheader={educationMileStone4Period}
            experienceheader={experienceMileStone4}
            experiencesubheader={experienceMileStone4Period}
          />
        </div>
        <div>
          <CV
            leaf={leaf}
            educationheader={educationMileStone5}
            educationsubheader={educationMileStone5Period}
            experienceheader={studentjobs}
            experiencesubheader={studentjobsPeriod}
          />
        </div>
        <div>
          <CV
            leaf={leaf}
            educationheader={""}
            educationsubheader={""}
            experienceheader={experienceMileStone5}
            experiencesubheader={experienceMileStone5Period}
          />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
