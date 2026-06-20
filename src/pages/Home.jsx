import "../styles/home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";


export default function Home() {
  return (
    <div className="home">

      <Navbar />

      <Hero />

      {/* Features */}
      <section id="features" className="features">

        <h2>Key Features</h2>

        <div className="feature-grid">

          <div className="card">
            <h3>Deepfake Detection</h3>

            <p>
              Analyze suspicious images and videos using
              AI-powered detection.
            </p>
          </div>

          <div className="card">
            <h3>Risk Assessment</h3>

            <p>
              Receive confidence scores and authenticity
              indicators.
            </p>
          </div>

          <div className="card">
            <h3>PDF Report</h3>

            <p>
              Generate downloadable investigation reports.
            </p>
          </div>

          <div className="card">
            <h3>Action Guide</h3>

            <p>
              Get recommendations on reporting and
              protecting yourself.
            </p>
          </div>

        </div>

      </section>

      {/* How It Works */}
      <section id="how" className="workflow">

        <h2>How DeepShield Works</h2>

        <div className="steps">

          <div className="step">
            <h3>1</h3>
            <p>Upload Media</p>
          </div>

          <div className="step">
            <h3>2</h3>
            <p>AI Analysis</p>
          </div>

          <div className="step">
            <h3>3</h3>
            <p>Risk Score</p>
          </div>

          <div className="step">
            <h3>4</h3>
            <p>Take Action</p>
          </div>

        </div>

      </section>

      {/* Impact */}
      <section id="impact" className="impact">

        <h2>Who Benefits?</h2>

        <div className="impact-grid">

          <div className="card">
            <h3>Women & Children</h3>
          </div>

          <div className="card">
            <h3>Journalists</h3>
          </div>

          <div className="card">
            <h3>Fact Checkers</h3>
          </div>

          <div className="card">
            <h3>Social Media Users</h3>
          </div>

        </div>

      </section>

      {/* Stats Section */}
      <section className="stats">

        <h2>Why It Matters</h2>

        <div className="stats-grid">

          <div className="stat-card">
            <h1>AI</h1>
            <p>Generated content is becoming increasingly realistic.</p>
          </div>

          <div className="stat-card">
            <h1>24/7</h1>
            <p>Fast automated media analysis.</p>
          </div>

          <div className="stat-card">
            <h1>1 Click</h1>
            <p>Generate detailed investigation reports.</p>
          </div>

        </div>

      </section>

      <footer className="footer">
        <p>© 2026 DeepShield | Detect. Verify. Protect.</p>
      </footer>

    </div>
  );
}