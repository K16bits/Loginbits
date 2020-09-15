import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

export default function Home() {
  const [email,SetEmail] = useState('');
  const [senha,SetSenha] = useState("");

  async function handleRegister(e){
    e.preventDefault();
    const data = {
      email,senha
    }
    console.log(data);
  }
  
  return (
    <div className='container'>
      <h1>Hello</h1>
      <form onSubmit={handleRegister}>
        <div>
          <h4>Email</h4>
          <input value={email}
            onChange= { e => SetEmail(e.target.value)}
            ></input>
        </div>
        <div>
          <h4>Senha</h4>
          <input type='password' value={senha}
            onChange={ e => SetSenha(e.target.value)}
          ></input>
        </div>
        <button type='submit' onChange={handleRegister}>Start</button>
        <Link to="/profile">Select</Link>
      </form>
    </div>
  );
}
