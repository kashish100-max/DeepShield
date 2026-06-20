import "../styles/upload.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";

export default function Upload() {
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    navigate("/result", {
      state: {
        imagePreview: URL.createObjectURL(file),

        prediction: "⚠ Potential Deepfake Detected",

        riskScore: 87,

        confidence: 92,

        indicators: [
          "Facial inconsistencies",
          "Lighting anomalies",
          "Compression artifacts",
        ],
      },
    });
  };

  return (
    <div className="upload-page">

      <Navbar />

      <div className="upload-container">

        <h1>Deepfake Analysis</h1>

        <p>
          Upload an image or video to analyze its authenticity
          and receive a detailed risk assessment.
        </p>

        <UploadBox
          onFileSelect={(selectedFile) =>
            setFile(selectedFile)
          }
        />


        <button
          className="analyze-btn"
          onClick={handleAnalyze}
          disabled={!file}
        >
          Analyze Media
        </button>

      </div>

      <div className="instructions">

        <h2>How It Works</h2>

        <div className="steps">

          <div className="step-card">
            <h3>1</h3>
            <p>Upload Media</p>
          </div>

          <div className="step-card">
            <h3>2</h3>
            <p>AI Analysis</p>
          </div>

          <div className="step-card">
            <h3>3</h3>
            <p>Risk Assessment</p>
          </div>

          <div className="step-card">
            <h3>4</h3>
            <p>Action Guide</p>
          </div>

        </div>

      </div>

    </div>
  );
}