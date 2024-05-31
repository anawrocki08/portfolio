import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import ProjectTag from "../ProjectTag";

function ProjectCard({
  id,
  title,
  type,
  cover,
  alt,
  summary,
  tags,
  github,
  site,
}) {
  return (
    <article className="project-card" key={id}>
      <div className="project-card__content">
        <img
          className="project-card__img"
          src={require(`../../assets/projects-images/${cover}`)}
          alt={alt}
        />
        <h3 className="project-card__title">{title}</h3>
        <h4 className="project-card__type">{type}</h4>
        <p className="project-card__summary">{summary}</p>
        <div className="project-card__tags">
          {tags.map((tag, index) => (
            <ProjectTag className="tag" key={index} tag={tag} />
          ))}
        </div>
        <div className="project-card__links">
          <NavLink
            to={github}
            target="_blank"
            title="lien vers le code du projet"
          >
            <FontAwesomeIcon className="sn-icon" icon={faGithub} />
          </NavLink>
          {site && (
            <NavLink
              to={site}
              target="_blank"
              title="lien vers le site du projet"
            >
              <FontAwesomeIcon className="sn-icon" icon={faGlobe} />
            </NavLink>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
