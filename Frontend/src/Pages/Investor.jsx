import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Investor({ user }) {
  const [pitches, setPitches] = useState([]);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch available pitches and user's offers from backend
    setLoading(false);
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Investor Dashboard</h1>
        <p>Welcome back, {user?.name}! Discover promising startups and manage your investment offers.</p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <Link to="/browse-pitches" className="btn btn-primary">Browse Pitches</Link>
            <Link to="/my-offers" className="btn btn-secondary">View My Offers</Link>
          </div>
        </div>

        <div className="card">
          <h3>Investment Summary</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{offers.length}</span>
              <span className="stat-label">Total Offers Made</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Active Investments</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">$0</span>
              <span className="stat-label">Total Invested</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Featured Pitches</h3>
        {loading ? (
          <p>Loading...</p>
        ) : pitches.length > 0 ? (
          <div className="pitches-grid">
            {pitches.slice(0, 3).map((pitch, index) => (
              <div key={index} className="pitch-preview">
                <h4>{pitch.title}</h4>
                <p>{pitch.description?.substring(0, 100)}...</p>
                <div className="pitch-meta">
                  <span>Funding: ${pitch.funding?.toLocaleString()}</span>
                  <span>Equity: {pitch.equityOffered}%</span>
                </div>
                <Link to={`/pitch/${pitch.pitch_id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>No pitches available at the moment. Check back later!</p>
        )}
      </div>

      <div className="card">
        <h3>Recent Activity</h3>
        {loading ? (
          <p>Loading...</p>
        ) : offers.length > 0 ? (
          <div className="activity-list">
            {offers.slice(0, 5).map((offer, index) => (
              <div key={index} className="activity-item">
                <span className="activity-text">Made offer on "{offer.pitch?.title}"</span>
                <span className="activity-time">{new Date().toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>No recent activity. Start browsing pitches to make your first offer!</p>
        )}
      </div>
    </div>
  );
}