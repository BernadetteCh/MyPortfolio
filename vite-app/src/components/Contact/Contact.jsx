import Headline from "../Headline";
import "./Contact.css";
import contactHeadline from "../../img/contact.png";

function Contact() {
  return (
    <div>
      <Headline header={"Contact "} />
      <div>
        <img src={contactHeadline} className="headline-contact"></img>
      </div>
    </div>
  );
}

export default Contact;
