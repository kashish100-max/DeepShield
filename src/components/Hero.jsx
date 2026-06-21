import "../styles/hero.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-title">
  <TypeAnimation
    sequence={[
      "AI AGAINST AI",
      2500,
      "",
      500,
      "SHIELD AGAINST FRAUD",
      2500,
      "",
      500,
    ]}
    speed={50}
    repeat={Infinity}
    cursor={true}
  />
</div>

        <p>
          In a world where AI-generated content can spread
          misinformation, fraud, and digital impersonation,
          DeepShield acts as your first line of defense,
          detecting deepfakes, assessing risk, and guiding
          users toward informed action.
        </p>

        <div className="hero-buttons">

          <Link to="/upload">
            <button className="primary-btn">
              Scan Media
            </button>
          </Link>

          <a href="#features">
            <button className="secondary-btn">
              Learn More
            </button>
          </a>

        </div>

      </div>

      <div className="hero-image">

        <div className="hero-card">

          <div className="scan-header">
            <h3>DeepShield <span style={{color:"white"}}>AI Engine</span></h3>

            <div className="live-status">
              <span className="pulse-dot"></span>
              Active Scan
            </div>
          </div>

          <div className="face-preview">

            <div className="scan-line"></div>

            <div className="face-content">
              <span>MEDIA ANALYSIS</span>
            </div>

          </div>

          <div className="analysis-list">

            <div className="analysis-item">
              <span>Facial Geometry</span>
              <span className="success">✓</span>
            </div>

            <div className="analysis-item">
              <span>Texture Analysis</span>
              <span className="success">✓</span>
            </div>

            <div className="analysis-item">
              <span>Artifact Detection</span>
              <span className="success">✓</span>
            </div>

            <div className="analysis-item">
              <span>Metadata Check</span>
              <span className="success">✓</span>
            </div>

          </div>

          <div className="result-preview">

            <div className="confidence">
              <span>Confidence</span>
              <strong>92%</strong>
            </div>

            <div className="warning-box">
              ⚠ Potential Manipulation Detected
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}