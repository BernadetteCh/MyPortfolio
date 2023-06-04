import "../../components/Skills/Skills.css";

function SkillIcons({ icon }) {
  return (
    <div className=" col-4 skillicon-container">
      <img
        src={icon}
        className="img-fluid skillicon"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          marginTop: "20px",
          width: "80px",
        }}
        alt={icon}
      ></img>
    </div>
  );
}

export default SkillIcons;
