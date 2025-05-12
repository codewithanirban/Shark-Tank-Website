import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailid: email,
                password: password
            }),
            credentials: 'include' // If using cookies/sessions
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed');
        }

        const user = await response.json();
        setUser(user);
        localStorage.setItem('user', JSON.stringify(user));
        navigate(`/${user.role.toLowerCase()}`);
    } catch (err) {
        setError(err.message || 'Login failed. Please try again.');
    }
};

    return (
        <div className="auth-form">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}