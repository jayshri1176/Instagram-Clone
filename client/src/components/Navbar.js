import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav
      style={{
        background: '#333',
        padding: '10px',
        color: '#fff',
        display: 'flex',
        gap: '10px',
      }}
    >
      <Link to="/" style={{ color: '#fff' }}>Feed</Link>
      {user ? (
        <>
          <Link to="/create-post" style={{ color: '#fff' }}>
            Create Post
          </Link>
          <Link
            to={`/profile/${user._id}`}
            style={{ color: '#fff' }}
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            style={{ background: 'none', color: '#fff', border: 'none' }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" style={{ color: '#fff' }}>Login</Link>
          <Link to="/signup" style={{ color: '#fff' }}>Signup</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;


