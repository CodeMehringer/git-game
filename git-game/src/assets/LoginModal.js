import React, { useState } from 'react';

function LoginModal({ showModal, onClose }) {
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [user3, setUser3] = useState('');
  const [user4, setUser4] = useState('');

  const handleLogin = () => {
    // Check if both users are entered
    if (user1.trim() === '' || user2.trim() === '') {
      alert('Please enter two usernames.');
      return;
    }
    // Perform login logic here, for now just log the usernames
    console.log('User 1:', user1);
    console.log('User 2:', user2);
    console.log('User 3:', user3);
    console.log('User 4:', user4);
    // Close the modal after login
    onClose();
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="User 1" value={user1} onChange={(e) => setUser1(e.target.value)} />
          <input type="text" placeholder="User 2" value={user2} onChange={(e) => setUser2(e.target.value)} />
          <input type="text" placeholder="User 3" value={user3} onChange={(e) => setUser3(e.target.value)} />
          <input type="text" placeholder="User 4" value={user4} onChange={(e) => setUser4(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;