import React from 'react';
import './App.css';
import GameSection from './components/GameSection';
// import HomeCircle from './components/HomeCircle';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src="../../src/assets/images/Uh-oh.png" alt="Game Title Uh-Oh" />
        <br />
        <br />
        <button className="reset startBtn">Reset</button>
        <br />
        <br />
      </header> */}

      <div id="gameSection">
        <GameSection />
        {/* <HomeCircle /> */}
      </div>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="./Game1.js"></script>
    </div>
  );
}

export default App;