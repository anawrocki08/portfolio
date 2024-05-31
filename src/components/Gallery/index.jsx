import projects from "../../data/projects.json";
import ProjectCard from "../ProjectCard";

function Gallery() {
  return (
    <div className="gallery">
      { projects && 
        projects.map(
          ({ id, title, type, cover, alt, summary, tags, github, site }) => (
            <ProjectCard
              key={id}
              id={id}
              title={title}
              type={type}
              cover={cover}
              alt={alt}
              summary={summary}
              tags={tags}
              github={github}
              site={site}
            />
          ),
        )}
    </div>
  );
}

export default Gallery;
