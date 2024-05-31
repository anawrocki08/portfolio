import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function Welcome() {
  const urlGithub = "https://github.com/CrazyCat08";
  const urlLinkedin = "#";
  const emailAddress = "anawrocki.dev@gmail.com";

  function sendEmail() {
    window.location.href = `mailto:${emailAddress}`;
  }

  return (
    <section id="welcome" className="welcome">
      <h1>Anne Nawrocki</h1>
      <h2>Développeur front-end</h2>
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
            // target="_blank"
            title="lien vers profil linkedin"
          >
            <FontAwesomeIcon className="sn-icon" icon={faLinkedin} />
          </NavLink>
        </div>
        <button className="contact-me" onClick={sendEmail}>
          <span className="contact-me__text">Contactez-moi:</span>
          <FontAwesomeIcon className="contactme__icon" icon={faPaperPlane} />
        </button>
      </div>
    </section>
  );
}

export default Welcome;
