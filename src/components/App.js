// src/App.js
import React from 'react';
import './App.css';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="App">
      <header>
        <h1>Welcome to My React App</h1>
      </header>
      <main>
        <p>I am learning React. My life is getting better.</p>
        <button onClick={handleClick}>Click me!</button>
      </main>
    </div>
  );
}

export default App;