import { Link } from 'react-router-dom';

export default function Navbar({ user, onLogout }) {
  if (!user) return null; // Don't render navbar if no user is logged in

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Shark Tank</Link>
      <div className="nav-links">
        <span>Welcome, {user.name} ({user.role})</span>
        <button onClick={onLogout}>Logout</button>
      </div>
    </nav>
  );
}