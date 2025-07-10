import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function CreatePostPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // No backend? Just log the values instead
      console.log({
        title,
        caption,
        imageUrl: "https://source.unsplash.com/400x300/?nature",
        userId: user?._id || "dummyUserId",
      });

      navigate('/');

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '30px auto' }}>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Caption:</label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px' }}>
          Create Post
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;





