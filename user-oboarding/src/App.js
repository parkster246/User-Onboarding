import React, { useState } from 'react';
import './App.css';
import Form from './Form';

function App() {
  const [user, setUser] =useState([]);
  return (
    <div className="App">
      <Form user={user} setUser={setUser}/>
      <div>
            {user.map(user=>(
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                </div>))}
    </div>
    </div>
  );
}

export default App;
