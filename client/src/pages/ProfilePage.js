import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function ProfilePage() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  if (!user) {
    return <p style={{ margin: '20px' }}>Please login to view your profile.</p>;
  }

  // Check if the logged-in user matches the profile being viewed
  if (user._id !== id) {
    return <p style={{ margin: '20px' }}>Access denied. You can only view your own profile.</p>;
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>My Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>User ID:</strong> {user._id}</p>
    </div>
  );
}

export default ProfilePage;

