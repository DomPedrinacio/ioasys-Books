// App.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'books@ioasys.com.br' && password === 'ioasysBooks2024') {
      setIsLoggedIn(true);
      setLoginMessage('Login bem-sucedido!');
      navigate('/books');
    } else {
      setLoginMessage('Email e/ou senha incorretos.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setLoginMessage('');
  };

  return (
    <div className='container'>
      <div className='form'>
        <div className='header'>
          <h1 className='logo'>ioasys</h1>
          <p className='title'>Books</p>
        </div>
        <br />
        <div className="input-container">
          <input
            className="input"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            className="input"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn" onClick={handleLogin}>Entrar</button>
        </div>
        {loginMessage && <p className={isLoggedIn ? 'success' : 'error'}>{loginMessage}</p>}
        {isLoggedIn && (
          <Link to="/books">
            <button onClick={handleLogout}>Sair</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default App;
