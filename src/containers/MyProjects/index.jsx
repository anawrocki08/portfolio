import Gallery from "../../components/Gallery";
import imgScenario1 from "../../assets/projects-images/workflow-scenario1.webp";
import imgScenario2 from "../../assets/projects-images/workflow-scenario2.webp";

function MyProjects() {
  return (
    <section id="my-projects" className="myprojects">
      <h2>Mes réalisations</h2>
      <h3>Projets No-code</h3>
      {/* Rajout de projet no-code ici */}
      {/* Card MyCRM */}
      <div className="mycrm-card">
        <div className="mycrm-card__header">
          <div className="mycrm-card__header-content">
            <h4 className="mycrm-card__title">MyCRM Freelance</h4>
            <p className="mycrm-card__subtitle">
              Un assistant personnel qui automatise la gestion des prospects et
              le suivi des tâches
            </p>
            <div className="mycrm-card__tags">
              <span className="mycrm-card__tag mycrm-card__tag--primary">
                No-code
              </span>
              <span className="mycrm-card__tag">Airtable</span>
              <span className="mycrm-card__tag">Make</span>
              <span className="mycrm-card__tag">Tally</span>
              <span className="mycrm-card__tag">Automatisation</span>
              <span className="mycrm-card__tag">MVP</span>
            </div>
          </div>
          <span className="mycrm-card__badge-featured">★ Projet phare</span>
        </div>

        <div className="mycrm-card__body">
          {/* Contexte */}
          <div className="mycrm-card__section">
            <h5 className="mycrm-card__section-title">Le contexte</h5>
            <p className="mycrm-card__text">
              Les freelances perdent un temps précieux dans la gestion
              administrative : capture manuelle des prospects, risque d'oublis,
              suivi des tâches chronophage. J'ai créé ce CRM pour résoudre ces
              problématiques de manière automatisée et intelligente.
            </p>
          </div>

          {/* Architecture */}
          <div className="mycrm-card__section">
            <h5 className="mycrm-card__section-title">
              L'architecture - Les 3 piliers
            </h5>
            <div className="mycrm-card__pillars">
              <div className="mycrm-card__pillar mycrm-card__pillar--blue">
                <p className="mycrm-card__pillar-title">
                  Airtable - Le Cerveau
                </p>
                <p className="mycrm-card__pillar-text">
                  Base de données avec 3 tables relationnelles (Contacts,
                  Projets, Tâches)
                </p>
              </div>
              <div className="mycrm-card__pillar mycrm-card__pillar--purple">
                <p className="mycrm-card__pillar-title">
                  Make - Le Chef d'Orchestre
                </p>
                <p className="mycrm-card__pillar-text">
                  2 scénarios d'automatisation avec logique conditionnelle
                  avancée
                </p>
              </div>
              <div className="mycrm-card__pillar mycrm-card__pillar--green">
                <p className="mycrm-card__pillar-title">
                  Tally - La Porte d'Entrée
                </p>
                <p className="mycrm-card__pillar-text">
                  Formulaire de contact public optimisé UX
                </p>
              </div>
            </div>
          </div>

          {/* Fonctionnalités */}
          <div className="mycrm-card__section">
            <h5 className="mycrm-card__section-title">Fonctionnalités clés</h5>
            <div className="mycrm-card__features">
              <div className="mycrm-card__feature mycrm-card__feature--blue">
                <p className="mycrm-card__feature-title">
                  1. Capture automatique
                </p>
                <ul className="mycrm-card__feature-list">
                  <li>Formulaire web → webhook</li>
                  <li>Vérification doublons</li>
                  <li>Création/MAJ contact</li>
                </ul>
              </div>
              <div className="mycrm-card__feature mycrm-card__feature--purple">
                <p className="mycrm-card__feature-title">2. Gestion projets</p>
                <ul className="mycrm-card__feature-list">
                  <li>Création auto projet</li>
                  <li>Notification client</li>
                  <li>Alerte freelance</li>
                </ul>
              </div>
              <div className="mycrm-card__feature mycrm-card__feature--green">
                <p className="mycrm-card__feature-title">
                  3. Rappels quotidiens
                </p>
                <ul className="mycrm-card__feature-list">
                  <li>Scan 8h chaque jour</li>
                  <li>Agrégation tâches</li>
                  <li>Email récapitulatif</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ce que ça démontre */}
          <div className="mycrm-card__section">
            <h5 className="mycrm-card__section-title">
              Ce que ce projet démontre
            </h5>
            <ul className="mycrm-card__demo-list">
              <li>Analyse besoin métier → solution technique</li>
              <li>Maîtrise automatisation avancée (webhooks, routeurs)</li>
              <li>
                Conception architecture robuste (relations, anti-doublons)
              </li>
              <li>Approche MVP : simple mais complet et évolutif</li>
            </ul>
          </div>

          {/* Impact */}
          <div className="mycrm-card__section">
            <h5 className="mycrm-card__section-title">Impact mesuré</h5>
            <div className="mycrm-card__impacts">
              <div className="mycrm-card__impact">
                <p className="mycrm-card__impact-value">Zéro oubli</p>
                <p className="mycrm-card__impact-label">de prospect</p>
              </div>
              <div className="mycrm-card__impact">
                <p className="mycrm-card__impact-value">+10h/mois</p>
                <p className="mycrm-card__impact-label">gagnées</p>
              </div>
              <div className="mycrm-card__impact">
                <p className="mycrm-card__impact-value">100%</p>
                <p className="mycrm-card__impact-label">base propre</p>
              </div>
              <div className="mycrm-card__impact">
                <p className="mycrm-card__impact-value">Pro</p>
                <p className="mycrm-card__impact-label">image client</p>
              </div>
            </div>
          </div>

          {/* Workflows */}
          <div className="mycrm-card__section mycrm-card__section--workflows">
            <h5 className="mycrm-card__section-title">Workflows Make</h5>
            <div className="mycrm-card__screenshots">
              <div className="mycrm-card__screenshot">
                <p className="mycrm-card__screenshot-title">
                  Screenshot Scénario 1
                </p>
                <p className="mycrm-card__screenshot-subtitle">
                  Gestion Intelligente des Prospects
                </p>
                <p className="mycrm-card__screenshot-caption">
                  De Prospect à Projet en un éclair
                </p>
                <div className="mycrm-card__screenshot-placeholder">
                  <img src={imgScenario1} alt="Workflow 1" />
                </div>
              </div>
              <div className="mycrm-card__screenshot">
                <p className="mycrm-card__screenshot-title">
                  Screenshot Scénario 2
                </p>
                <p className="mycrm-card__screenshot-subtitle">
                  Rappel Quotidien des Tâches
                </p>
                <p className="mycrm-card__screenshot-caption">
                  Ne manquer aucune échéance
                </p>
                <div className="mycrm-card__screenshot-placeholder">
                  <img src={imgScenario2} alt="Workflow 2" />
                </div>
              </div>
            </div>
            <div className="mycrm-card__demo-notice">
              <p>
                <strong>💡 Démo live disponible sur demande</strong> - Je serai
                ravie de vous présenter le système en action lors d'un
                entretien.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Placeholder futurs projets */}
      <div className="projects-nocode__placeholder">
        <p>
          D'autres projets No-code seront ajoutés au fur et à mesure de ma
          formation chez Alegria.academy (Bubble, intégrations IA, etc.)
        </p>
      </div>
      {/* Fin Rajout projet no-code */}
      <h3>Projets Web Dev</h3>
      <Gallery />
    </section>
  );
}

export default MyProjects;
