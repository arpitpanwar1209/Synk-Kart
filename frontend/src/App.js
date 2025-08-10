import React from 'react';
import TestApi from './TestApi';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import './index.css';


function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err));
  }, []);
  return (
    
    <div className="App">
      <TestApi />
       <h1>React + Django Connection Test</h1>
      <p>{message}</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
