import "../About/AboutMe.css";
import Headline from "../../components/Headline.jsx";
import DividePage from "../Columns/DividePage.jsx";
import CV from "../../components/Columns/CV.jsx";
import selfie from "../../img/ich.png";
import education from "../../img/education.png";
import experience from "../../img/experience.png";
import leaf from "../../img/leaf.png";

function AboutMe() {
  return (
    <div style={{ margin: "30px" }}>
      <Headline header={"About Me"} />
      <img src={selfie}></img>
      <div className="selfintroduction-text">
        <p>
          Hallo, my name is Bernadette and I am a fullstack developer from
          Austria. I am always interested in learning new things and educate
          myself. I started learning to code during the pandemic by self-study
          and online workshop of SheCodes, which provides "hands on" front-end
          developer coding workshops.
        </p>
        <p>
          Starting exploring a new world was quite exciting so it came that I
          spent more than a year on a coding school in Vienna to built up an
          expertise in different technologies and how to put my own project
          ideas to practice. Besides coding i like to spend my time in the
          nature because it clears my head. You can also find me taking pictures
          on top of a mountain or in a restless city, as photography has been a
          hobby of mine for a long time.{" "}
        </p>
        <p>
          I would say my biggest strength is my courage and weakest is my ????
          If you like my work or if you would like to give feedback, I would be
          very happy to receive a message.
        </p>
      </div>
      <div className="mentor-reference">
        <h3 style={{ fontWeight: "bold" }}>References</h3>
        <p>Mentors who supported me during my coding journey</p>
        <p>
          <span>Emad Easa Senior Developer</span>
        </p>
        <p>
          <span>Guillermo Herrero Senior Developer</span>
        </p>
      </div>

      <DividePage education={education} experience={experience} />
      <CV leaf={leaf} headertext={"Hi"} subheadertext={"Berni"} />
    </div>
  );
}
export default AboutMe;
