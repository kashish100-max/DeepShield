import "../styles/upload.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import UploadBox from "../components/UploadBox";

export default function Upload() {
  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

const handleAnalyze = async () => {
  if (!file) {
    alert("Please select a file first!");
    return;
  }

  try {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      "http://127.0.0.1:8000/detect",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    const deepfakeScore = Math.round(data.Deepfake * 100);
    const realismScore = Math.round(data.Realism * 100);

    const prediction =
      deepfakeScore > realismScore
        ? "Potential Deepfake Detected"
        : "Likely Authentic";

    navigate("/result", {
      state: {
        imagePreview: URL.createObjectURL(file),

        prediction,

        riskScore: deepfakeScore,

        confidence: Math.max(
          deepfakeScore,
          realismScore
        ),

        indicators:
          deepfakeScore > 50
            ? [
                "Facial inconsistencies",
                "Lighting anomalies",
                "AI-generated patterns",
              ]
            : [
                "Natural facial structure",
                "Consistent lighting",
                "No major anomalies detected",
              ],
      },
    });

  } catch (error) {
    console.error(error);
    alert("Analysis failed.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="upload-page">

      <Navbar />

      <div className="upload-container">

        <h1>DeepFake Analysis</h1>

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
  disabled={!file || loading}
>
  {loading ? "Analyzing..." : "Analyze Media"}
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
