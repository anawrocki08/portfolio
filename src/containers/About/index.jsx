import imgJS from "../../assets/JSonLaptop-600px.webp";

function About() {
  return (
    <section id="about" className="about">
      {/* <h2>A propos de moi</h2> */}
      <h2>
        Mon parcours : De la gestion de projets complexes au Product Building
        No-code
      </h2>
      <div className="about-content">
        <img src={imgJS} alt="imgJS" className="about-content__img" />
        <p className="about-content__text">
          {/* Avec un esprit autant analytique que créatif, mon parcours
          professionnel est le reflet d’un vif intérêt pour l’innovation et la
          technologie. Après une carrière enrichissante en tant que chercheur et
          développeur de logiciels dans le domaine exigeant de la simulation
          numérique par éléments finis en France puis aux États-Unis, j’ai plongé
          dans l’univers aéronautique une fois rentrée en Europe. Pendant 13
          ans, j’ai évolué de l’ingénierie d’études avancées dans l’industrie
          vers des fonctions de manager dans un centre de recherche, me
          spécialisant, entre autres, dans la coordination de projets de
          recherche collaboratifs européens. <br />
          Mon grand intérêt pour le digital et les nouvelles technologies,
          combiné à un intérêt prononcé pour le design UI, m’a conduite à une
          reconversion professionnelle dans le développement web front-end.
          Diplômée d’OpenClassrooms avec une certification de développeur
          Intégrateur web (BAC+2), j’ai acquis pendant les 9 mois de formation
          intensive des compétences techniques solides en HTML, CSS, JavaScript
          et React, que j’ai mises en pratique en créant ce portfolio en ligne.{" "}
          <br />
          Empathique et rigoureuse, je m’épanouis dans le travail d’équipe et je
          suis toujours avide d’apprendre et de relever de nouveaux défis. Je
          cherche à apporter ma polyvalence, mon expérience intersectorielle et
          ma vision innovante au sein d’une équipe dynamique où la collaboration
          et la créativité sont au cœur des projets. <br />
          <br />
          N’hésitez pas à parcourir mon portfolio ! */}
          Mon parcours de scientifique (PhD) et de cheffe de projet m'a appris
          la rigueur, la pensée analytique et la gestion de la complexité.
          Aujourd'hui, j'applique ces compétences pour créer des systèmes
          automatisés et des applications fonctionnelles qui résolvent de vrais
          problèmes métiers.
          <br />
          Mon parcours de scientifique (PhD) et de cheffe de projet m'a appris
          la rigueur, la pensée analytique et la gestion de la complexité.
          Aujourd'hui, j'applique ces compétences pour créer des systèmes
          automatisés et des applications fonctionnelles qui résolvent de vrais
          problèmes métiers.
          <br />
          Pour mettre en pratique cette passion, j'ai récemment développé de A à
          Z <strong>"MyCRM Freelance"</strong>, un assistant personnel qui
          automatise la gestion des prospects et le suivi des tâches en
          connectant Airtable, Make et Tally.
        </p>
      </div>
    </section>
  );
}

export default About;
