import skillsData from "../../data/skills.json";

function MySkills() {
  return (
    <section id="skills" className="myskills">
      <h2>Mes compétences</h2>
      <div className="skills">
        {skillsData.map((skill, index) => (
          <div key={index} className="skills__item">
            <img
              src={require(`../../assets/skills-logos/${skill.img}`)}
              className="skills__logo"
              alt={skill.alt}
            />
            <p className="skills__title">{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
