import "../styles/result.css";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import ActionGuide from "../components/ActionGuide";

export default function Result() {
  const location = useLocation();

  const result = location.state || {
    imagePreview: null,

    prediction: "⚠ Potential Deepfake Detected",

    riskScore: 87,

    confidence: 92,

    indicators: [
      "Facial inconsistencies",
      "Lighting anomalies",
      "Compression artifacts",
    ],
  };

  const ringColor =
  result.riskScore >= 75
    ? "#EE6B6B" // High Risk
    : result.riskScore >= 40
    ? "#F5B041" // Medium Risk
    : "#52D1A3"; // Low Risk

const riskColor =
  result.riskScore >= 75
    ? "#EE6B6B"
    : result.riskScore >= 40
    ? "#F5B041"
    : "#52D1A3";

  const riskLevel =
    result.riskScore >= 75
      ? "High"
      : result.riskScore >= 40
      ? "Medium"
      : "Low";

  return (
    <div className="result-page">

      <Navbar />

      {/* Header */}
      <div className="result-header">

        <h1>Analysis</h1>

        <p>
          The uploaded media has been analyzed by DeepShield.
        </p>

      </div>


      {/* Uploaded Media */}
      {result.imagePreview && (
        <div className="preview-section">

          <h2>Uploaded Media</h2>

          <img
            src={result.imagePreview}
            alt="Uploaded Media"
            className="preview-image"
          />

        </div>
      )}

      <div className="risk-section">

  <div className="risk-card">

    <h2>AI Manipulation Risk</h2>

    <div
  className="risk-circle"
  style={{
    "--percentage": result.riskScore,
    "--ring-color": ringColor,
  }}
>
      <div className="risk-circle-content">
        <h1>{result.riskScore}%</h1>
        <span>RISK</span>
      </div>
    </div>

    <h3
  style={{
    color: riskColor,
  }}
>
  {riskLevel} Risk
</h3>

    <p className="risk-description">
      This media has a {result.riskScore}% likelihood
      of containing AI-generated or manipulated content.
    </p>

  </div>

  <div className="summary-card">

    <h2>Detection Summary</h2>

    <p className="prediction-text">
      {result.prediction}
    </p>

    <div className="summary-stats">

      <div className="stat-row">
        <span>Manipulation Risk</span>
        <strong>{result.riskScore}%</strong>
      </div>

      <div className="stat-row">
        <span>Authenticity Score</span>
        <strong>{100 - result.riskScore}%</strong>
      </div>

      <div className="stat-row">
        <span>Model Confidence</span>
        <strong>{result.confidence}%</strong>
      </div>

      <div className="stat-row">
        <span>Risk Level</span>
        <strong>{riskLevel}</strong>
      </div>

    </div>

  </div>

</div>

      {/* Indicators */}
      <div className="indicator-section">

        <h2>Indicators Detected</h2>

        <div className="indicator-list">

          {result.indicators.map((item, index) => (
            <div
              className="indicator-card"
              key={index}
            >
              ✓ {item}
            </div>
          ))}

        </div>

      </div>

      {/* Report */}
      <div className="report-section">

        <h2>Investigation Report</h2>

        <p>
          Download a detailed report containing
          risk assessment and evidence summary.
        </p>

        <button
          className="download-btn"
          onClick={() =>
            alert("PDF generation will be connected here.")
          }
        >
          Download PDF Report
        </button>

      </div>

      {/* Action Guide */}
      <ActionGuide riskLevel={riskLevel} />

    </div>
  );
}