import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/auth';

export default function Register({ setUser }) {
  const [formData, setFormData] = useState({
    name: '',
    emailid: '',
    password: '',
    role: 'ENTREPRENEUR' // Default role
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await register(formData);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      navigate(`/${user.role.toLowerCase()}`);
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="auth-form">
      <h2>Create Shark Tank Account</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="emailid"
          placeholder="Email"
          value={formData.emailid}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <div className="form-group">
          <label>Account Type:</label>
          <select 
            name="role" 
            value={formData.role} 
            onChange={handleChange}
            required
          >
            <option value="ENTREPRENEUR">Entrepreneur</option>
            <option value="INVESTOR">Investor</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}