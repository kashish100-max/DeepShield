import "../styles/hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <h1>
          AI <span className="hero-sub-content">AGAINST</span> AI
        </h1>

        <p>
          <p>
                In a world where AI-generated content can spread
                misinformation, fraud, and digital impersonation,
                DeepShield acts as your first line of defense,
                detecting deepfakes, assessing risk, and guiding
                users toward informed action.
         </p>
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

          <h3>Deepfake Analysis</h3>

          <div className="score">

            <span>Risk Score</span>

            <h2>87%</h2>

          </div>

          <p>
            ⚠ Potential Deepfake Detected
          </p>

          <ul className="analysis-points">

            <li>✓ Facial Artifacts</li>

            <li>✓ Lighting Mismatch</li>

            <li>✓ AI Manipulation Indicators</li>

          </ul>

        </div>

      </div>

    </section>
  );
}