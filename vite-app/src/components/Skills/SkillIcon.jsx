import "../../components/Skills/Skills.css";

function SkillIcons({ icon }) {
  return (
    <div className=" col-4 skillicon-container">
      <img
        src={icon}
        className="img-fluid skillicon"
        style={{
          boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
          marginTop: "20px",
          width: "80px",
        }}
        alt={icon}
      ></img>
    </div>
  );
}

export default SkillIcons;
