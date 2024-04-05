import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GameSection from './components/GameSection';
import HomeCircle from './components/HomeCircle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const Game = () => {
  return (
    <>
      <head>
        <title>Uh-Oh! Game</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header>
          <img src="./images/Uh-oh.png" alt="Game Title Uh-Oh" />
          <br />
          <br />
          <button className="reset startBtn">Reset</button>
          <br />
          <br />
        </header>

        <div id="gameSection">
          {GameSection}
          {HomeCircle}
          
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="./Game1.js"></script>
      </body>
    </>
    );
  };


reportWebVitals();
export default Game;