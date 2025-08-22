const API_URL = 'http://localhost:8000/api';

export const login = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      emailid: email,
      password: password
    }),
    credentials: 'include'
  });
  
  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Login failed');
  }
  
  return response.json();
};

export const register = async (userData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
    credentials: 'include'
  });
  
  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(errorData || 'Registration failed');
  }
  
  return response.json();
};

export const getAllUsers = async () => {
  const response = await fetch(`${API_URL}/users/`);
  if (!response.ok) throw new Error('Failed to fetch users');
  return response.json();
};