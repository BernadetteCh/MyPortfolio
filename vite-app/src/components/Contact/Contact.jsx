import Headline from "../Headline";
import "./Contact.css";
import contactHeadline from "../../img/contact.png";
import linkedInIcon from "../../img/linkedin.png";
import githubIcon from "../../img/githubicon.png";
import discordIcon from "../../img/discordIcon.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Contact() {
  return (
    <div>
      <Headline header={"Contact "} />
      <div>
        <img src={contactHeadline} className="headline-contact img-fluid"></img>
      </div>
      <div style={{ textAlign: "center" }}>
        <AnchorLink href="contact" className="contact-link">
          <button className="contactViaMail">Contact Me</button>
        </AnchorLink>

        <p className="emailaddress">b.christiner93@gmail.com</p>
      </div>
      <div style={{ display: "block", textAlign: "center" }}>
        <a href="https://at.linkedin.com/" target="_blank">
          <img src={linkedInIcon} className="contact-icon"></img>
        </a>
        <a href="https://github.com/BernadetteCh" target="_blank">
          <img src={githubIcon} className="contact-icon"></img>
        </a>
        <a
          href="https://discordapp.com/users/949019145968705669"
          target="_blank"
        >
          <img src={discordIcon} className="contact-icon"></img>
        </a>
      </div>
    </div>
  );
}

export default Contact;
