import "../styles/actionguide.css";
export default function ActionGuide({ riskLevel = "High" }) {
  return (
    <section className="action-guide">

      <h2>Recommended Actions</h2>

      <p>
        Based on the analysis results, consider the following
        steps to protect yourself and prevent the spread of
        manipulated content.
      </p>

      <div className="actions-container">

        <div className="action-card">
          <h3>🛡 Preserve Evidence</h3>

          <p>
            Save screenshots, URLs, timestamps, and the original
            media file for future reference.
          </p>
        </div>

        <div className="action-card">
          <h3>🚫 Avoid Sharing</h3>

          <p>
            Do not repost or forward suspicious content until
            its authenticity has been verified.
          </p>
        </div>

        <div className="action-card">
          <h3>📢 Report Content</h3>

          <p>
            Report the media to the platform where it was
            discovered.
          </p>
        </div>

        <div className="action-card">
          <h3>⚖ Cybercrime Support</h3>

          <p>
            Contact relevant authorities if the content
            involves impersonation, fraud, harassment,
            or misinformation.
          </p>
        </div>

      </div>

      <div className="risk-note">

        <h3>Current Risk Level</h3>

        <span
          className={`risk-badge ${riskLevel.toLowerCase()}`}
        >
          {riskLevel}
        </span>

      </div>

    </section>
  );
}