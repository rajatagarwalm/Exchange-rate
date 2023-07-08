import React from 'react';
import Header from './components/Header';
import ExchangeRate from './components/ExchangeRate';
import Calculator from './components/Calculator';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <>
      <Header />
      <div className="app-container">
        <div className="flex-container">
          <div className="flex-item">
            <ExchangeRate />
          </div>
          <div className="flex-item">
            <Calculator />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
