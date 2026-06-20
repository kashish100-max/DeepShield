import "../styles/uploadbox.css";
import { useState } from "react";

export default function UploadBox({ onFileSelect }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "video/mp4",
      "video/mov",
      "video/quicktime",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a valid image or video.");
      return;
    }

    setSelectedFile(file);

    if (file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }

    onFileSelect(file);
  };

  return (
    <div className="upload-box">

      <div className="upload-content">

        <h2>Upload Media</h2>

        <p>
          Select an image or video for deepfake analysis
        </p>

        <label className="upload-label">
          Choose File

          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleChange}
            hidden
          />
        </label>

        {selectedFile && (
          <div className="file-details">

            <h4>Selected File</h4>

            <p>{selectedFile.name}</p>

            <p>
              {(selectedFile.size / (1024 * 1024)).toFixed(2)}
              {" "}MB
            </p>

          </div>
        )}

        {preview && (
          <div className="preview-container">

            <h4>Preview</h4>

            <img
              src={preview}
              alt="preview"
              className="preview-image"
            />

          </div>
        )}

      </div>

    </div>
  );
}