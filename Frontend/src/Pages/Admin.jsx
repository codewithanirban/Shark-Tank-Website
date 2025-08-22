import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [pitches, setPitches] = useState([]);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch system statistics from backend
    setLoading(false);
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Admin Dashboard</h1>
        <p>System overview and user management for Shark Tank platform.</p>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h3>System Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{users.length}</span>
              <span className="stat-label">Total Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{pitches.length}</span>
              <span className="stat-label">Active Pitches</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{offers.length}</span>
              <span className="stat-label">Pending Offers</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <Link to="/admin/users" className="btn btn-primary">Manage Users</Link>
            <Link to="/admin/pitches" className="btn btn-secondary">Review Pitches</Link>
            <Link to="/admin/offers" className="btn btn-secondary">Monitor Offers</Link>
          </div>
        </div>
      </div>

      <div className="card">
        <h3>Recent User Registrations</h3>
        {loading ? (
          <p>Loading...</p>
        ) : users.length > 0 ? (
          <div className="users-list">
            {users.slice(0, 5).map((user, index) => (
              <div key={index} className="user-item">
                <div className="user-info">
                  <span className="user-name">{user.name}</span>
                  <span className="user-role">{user.role}</span>
                  <span className="user-email">{user.emailid}</span>
                </div>
                <div className="user-actions">
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No users registered yet.</p>
        )}
      </div>

      <div className="card">
        <h3>Platform Health</h3>
        <div className="health-indicators">
          <div className="health-item">
            <span className="health-label">Database</span>
            <span className="health-status success">Connected</span>
          </div>
          <div className="health-item">
            <span className="health-label">API Services</span>
            <span className="health-status success">Running</span>
          </div>
          <div className="health-item">
            <span className="health-label">File Storage</span>
            <span className="health-status success">Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}