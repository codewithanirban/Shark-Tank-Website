const API_URL = 'http://localhost:8000/api/users';

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/login?emailid=${email}&password=${password}`);
  if (!response.ok) throw new Error('Login failed');
  return response.json();
};

export const register = async (userData) => {
  const response = await fetch(`${API_URL}/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  if (!response.ok) throw new Error('Registration failed');
  return response.json();
};

export const getAllUsers = async () => {
  const response = await fetch('http://localhost:8000/api/users/');
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};