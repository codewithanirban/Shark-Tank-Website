import { Link } from 'react-router-dom';
import './Landing.css'; // We'll create this next

export default function Landing() {
  return (
    <div className="landing-container">
      <header className="hero-section">
        <h1 className="main-title">SHARK TANK</h1>
        <p className="tagline">Where Entrepreneurs Meet Investors</p>
      </header>

      <section className="about-section">
        <div className="about-content">
          <h2>About Shark Tank</h2>
          <p>
            Shark Tank connects ambitious entrepreneurs with experienced investors.
            Pitch your business idea, get funding, and take your venture to the next level.
          </p>
          <p>
            For investors, discover the next big opportunity and grow your portfolio.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <h3>For Entrepreneurs</h3>
          <ul>
            <li>Pitch your business idea</li>
            <li>Get funding from investors</li>
            <li>Receive valuable feedback</li>
          </ul>
        </div>
        <div className="feature-card">
          <h3>For Investors</h3>
          <ul>
            <li>Discover promising startups</li>
            <li>Invest in innovative ideas</li>
            <li>Grow your investment portfolio</li>
          </ul>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Dive In?</h2>
        <div className="auth-buttons">
          <Link to="/login" className="auth-button login-button">Login</Link>
          <Link to="/register" className="auth-button register-button">Register</Link>
        </div>
      </section>

      <footer className="landing-footer">
        <p>© {new Date().getFullYear()} Shark Tank. All rights reserved.</p>
      </footer>
    </div>
  );
}