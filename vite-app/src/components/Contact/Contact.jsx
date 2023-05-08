import Headline from "../Headline";
import "./Contact.css";
import contactHeadline from "../../img/contact.png";
import linkedInIcon from "../../img/linkedin.png";
import githubIcon from "../../img/githubicon.png";
import discordIcon from "../../img/discordIcon.png";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Headline header={"Contact "} />
      <div>
        <img src={contactHeadline} className="headline-contact"></img>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link
          to="mailto:b.christiner93@gmail.com"
          style={{
            textDecoration: "none",
            display: "block",
            margin: "0px auto",
            fontSize: "20px",
          }}
        >
          <button className="contactViaMail">Contact Me</button>
        </Link>

        <p className="emailaddress">b.christiner93@gmail.com</p>
      </div>
      <div style={{ display: "block", textAlign: "center" }}>
        <Link to="https://at.linkedin.com/" target="_blank">
          <img src={linkedInIcon} className="contact-icon"></img>
        </Link>
        <Link to="https://github.com/BernadetteCh" target="_blank">
          <img src={githubIcon} className="contact-icon"></img>
        </Link>
        <Link
          to="https://discordapp.com/users/949019145968705669"
          target="_blank"
        >
          <img src={discordIcon} className="contact-icon"></img>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
