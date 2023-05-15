import "../About/AboutMe.css";
import { useState } from "react";
import Headline from "../../components/Headline.jsx";
import CVHeader from "../Columns/CVHeader.jsx";
import CV from "../../components/Columns/CV.jsx";
import Modal from "../Columns/Modal.jsx";
import selfie from "../../img/ich.png";
import education from "../../img/education.png";
import experience from "../../img/experience.png";
import { selfIntroduction1 } from "./SelfIntroduction";
import { selfIntroduction2 } from "./SelfIntroduction";
import { selfIntroduction3 } from "./SelfIntroduction";
import cat from "../../img/cat.png";
import { curriculumVitea } from "./CV";
import leaf from "../../img/leaf.png";
import BCHCV from "../../BCHCV.pdf";

function AboutMe() {
  const [openModal, setOpenModal] = useState(false);
  const [cvStep, setCvStep] = useState(0);

  const toggleModal = (modalBoolean, index) => {
    setOpenModal(modalBoolean);
    setCvStep(index);
  };

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
        {curriculumVitea.map((cv, index) => {
          return (
            <CV
              key={index}
              index={index}
              leaf={leaf}
              educationheader={cv.educationHeader}
              educationsubheader={cv.educationSubheader}
              experienceheader={cv.experienceHeader}
              experiencesubheader={cv.experienceSubheader}
              modal={openModal}
              setOpenModal={toggleModal}
            />
          );
        })}
      </div>
      <a href={BCHCV} className="download-cv" target="_blank">
        Download CV
      </a>
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          cvData={curriculumVitea}
          index={cvStep}
        />
      )}
    </div>
  );
}

export default AboutMe;
