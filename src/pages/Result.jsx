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

        <h1>Analysis Complete</h1>

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

      {/* Risk Section */}
      <div className="risk-section">

        <div className="risk-card">

          <h2>Risk Score</h2>

          <div className="risk-circle">
            <h1>{result.riskScore}%</h1>
          </div>

          <h3>{riskLevel} Risk</h3>

        </div>

        <div className="summary-card">

          <h2>Detection Summary</h2>

          <p className="prediction-text">
            {result.prediction}
          </p>

          <h4>
            Confidence: {result.confidence}%
          </h4>

          <h4>
            Risk Level: {riskLevel}
          </h4>

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