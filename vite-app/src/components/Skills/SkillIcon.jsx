import "../../components/Skills/Skills.css";

function SkillIcons({ icon, description }) {
  return (
    <div className=" col-4 skillicon-container">
      <img src={icon} className="img-fluid skillicon"></img>
      <div className="description">{description}</div>
    </div>
  );
}

export default SkillIcons;
