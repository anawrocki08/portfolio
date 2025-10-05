import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Welcome() {
  const urlGithub = "https://github.com/anawrocki08";
  const urlLinkedin = "https://www.linkedin.com/in/anne-nawrocki";
  const emailAddress = "nawrocki.anne@gmail.com";

  function sendEmail() {
    window.location.href = `mailto:${emailAddress}`;
  }

  return (
    <section id="welcome" className="welcome">
      <h1>Anne Nawrocki</h1>
      <h2>Product Builder No-code & IA</h2>
      <div className="contact-list">
        <div className="social-networks">
          <NavLink
            to={urlGithub}
            target="_blank"
            title="lien vers compte Github"
          >
            <FontAwesomeIcon className="sn-icon" icon={faGithub} />
          </NavLink>
          <NavLink
            to={urlLinkedin}
            target="_blank"
            title="lien vers profil linkedin"
          >
            <FontAwesomeIcon className="sn-icon" icon={faLinkedin} />
          </NavLink>
        </div>
        <button className="contact-me" onClick={sendEmail}>
          <span className="contact-me__text">Me contacter</span>
          {/* <FontAwesomeIcon className="contactme__icon" icon={faPaperPlane} /> */}
          <FontAwesomeIcon className="contactme__icon" icon={faEnvelope} />
        </button>
      </div>
    </section>
  );
}

export default Welcome;
