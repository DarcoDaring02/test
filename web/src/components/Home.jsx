import "./Home.css";
import heroImg from "../assets/images/logo.png";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* INTRODUCTION SECTION */}
      <div className="hero-container">
        <div className="hero-top">

          {/* LEFT TEXT */}
          <div className="hero-text">
            <h1>Introduction</h1>

            <p>
              Breast milk is rich in essential nutrients, bioactive chemicals,
              and a varied microbial population, all of which are important for
              an infant's initial development.
            </p>

            <p>
              It includes a variety of secondary metabolites including short-chain
              fatty acids (SCFAs), organic acids, and bioactive peptides.
            </p>

            <p>
              The interaction of breast milk microbes and their metabolites plays
              a key role in immunological development.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-img">
            <img src={heroImg} alt="Breast milk microbiome" />
          </div>

        </div>
      </div>

      {/* SIGNIFICANCE SECTION */}
      <div className="significance-container">

        <div className="significance-header">
          <h2>Significance</h2>
          <p>
            Understanding the breastmilk microbiome is fundamental to advancing
            neonatal health research and clinical applications.
          </p>
        </div>

        <p className="significance-text">
          The breastmilk microbiome plays a significant role in early growth and
          development by influencing immune maturation, gut colonization, and
          metabolic regulation. Microbial-derived metabolites contribute to
          neonatal health through the following mechanisms:
        </p>

        <div className="significance-features">
          <div className="feature-card">
            <span>🧬</span>
            <h4>Gut Barrier Integrity</h4>
            <p>
              Supports intestinal maturation and strengthens epithelial defense
              mechanisms.
            </p>
          </div>

          <div className="feature-card">
            <span>🛡️</span>
            <h4>Immune Modulation</h4>
            <p>
              Guides immune system development and promotes immune tolerance.
            </p>
          </div>

          <div className="feature-card">
            <span>🦠</span>
            <h4>Pathogen Defense</h4>
            <p>
              Suppresses pathogenic microbes while supporting beneficial species.
            </p>
          </div>

          <div className="feature-card">
            <span>⚙️</span>
            <h4>Nutrient Metabolism</h4>
            <p>
              Enhances nutrient absorption and metabolic efficiency in infants.
            </p>
          </div>

          <div className="feature-card">
            <span>🧠</span>
            <h4>Neurodevelopment</h4>
            <p>
              Influences brain development through microbe–metabolite signaling.
            </p>
          </div>
        </div>

        <p className="significance-footer">
          This database provides a centralized platform for exploring the complex
          relationships between breastmilk microbiota and their metabolic outputs,
          supporting future research, clinical translation, and potential
          probiotic or postbiotic interventions for neonatal health.
        </p>

      </div>
    </section>
  );
}

export default Hero;