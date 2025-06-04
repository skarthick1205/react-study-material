
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    console.log('User Created:', name);
    navigate('/');
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter name" />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;