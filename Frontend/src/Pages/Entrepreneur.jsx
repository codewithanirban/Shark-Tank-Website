import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Entrepreneur({ user }) {
  const [pitches, setPitches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch user's pitches from backend
    setLoading(false);
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Entrepreneur Dashboard</h1>
        <p>Welcome back, {user?.name}! Manage your business pitches and track investor interest.</p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <Link to="/create-pitch" className="btn btn-primary">Create New Pitch</Link>
            <Link to="/my-pitches" className="btn btn-secondary">View My Pitches</Link>
          </div>
        </div>

        <div className="card">
          <h3>Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{pitches.length}</span>
              <span className="stat-label">Total Pitches</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Active Offers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Investors Interested</span>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Recent Activity</h3>
        {loading ? (
          <p>Loading...</p>
        ) : pitches.length > 0 ? (
          <div className="activity-list">
            {pitches.map((pitch, index) => (
              <div key={index} className="activity-item">
                <span className="activity-text">Pitch "{pitch.title}" was viewed by investors</span>
                <span className="activity-time">{new Date().toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        ) : (
          <p>No recent activity. Create your first pitch to get started!</p>
        )}
      </div>
    </div>
  );
}