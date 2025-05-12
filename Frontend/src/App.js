import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import Entrepreneur from './Pages/Entrepreneur';
import Investor from './Pages/Investor';
import Landing from './Pages/Landing';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

   return (
    <div className="app">
      {/* Don't show navbar on landing page */}
      {user && <Navbar user={user} onLogout={handleLogout} />}
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/admin" element={user?.role === 'ADMIN' ? <Admin /> : <Navigate to="/login" />} />
        <Route path="/entrepreneur" element={user?.role === 'ENTREPRENEUR' ? <Entrepreneur user={user} /> : <Navigate to="/login" />} />
        <Route path="/investor" element={user?.role === 'INVESTOR' ? <Investor user={user} /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;