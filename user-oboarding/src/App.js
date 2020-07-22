import React, { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [user, setUser] =useState([]);
  return (
    <div className="App">
    <h1>Welcome to the team!</h1>
    <h2>Create Login</h2>
      <Form user={user} setUser={setUser}/>
      
      <div>
            {user.map(user=>(
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                </div>))}
                <h2>Team Member Information</h2>
    </div>
    </div>
  );
}

export default App;
