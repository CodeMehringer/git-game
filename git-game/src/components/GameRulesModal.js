import React from 'react';
import '../assets/Game-Rules.css';

function GameRulesModal({ onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h1>UH-OH Game Rules</h1>
      </div>
      <img src="git-game\images\Uh-oh.png" alt="Uh Oh Logo" className="mx-auto d-block shadow" />
      <div className="container">
        <div className="row mt-3 mb-1" id="main">
          <section id="gameRules" className="col-6">
            <h2>Game Rules</h2>
            <ul>
              <li> There are 4 player spots labeled with 4 different colors.</li>
              <li> Each player has 4 game pieces.</li>
              <li> Each player takes turns drawing cards until a 2, 12, or "UH OH" card is drawn.</li>
              <li> A 2 or 12 gets the player out of start and then it is the next player's turn. </li>
              <li> The "UH OH" can be used if another player has a game piece on the board that is not in a safety zone.</li>
              <li> When a player draws a card, the directions for that card will be displayed and the player chooses which game pice to move and moves it according to the directions.</li>
              <li> If it is not possible for a player to move any of their game pieces the turn is over and moves to the next player.</li>
              <li> If you land on another players game piece or run into it during a slide, that player' game piece returns to their start where a 2, 12 or sorry is needed to get out again.</li>
              <li> Players need to be able to take turns intermittently and be let known when it is their turn.</li>
              <li> Players can only enter the safe zones and home of their own color. If a player is in their safezone, their game piece cannot be removed and sent to start.</li>
              <li> The game is over when a player gets all 4 game pieces to HOME</li>
            </ul>
          </section>
          <section id="cardRules" className="col-6">
            <h2>What Do The Cards Do?</h2>
            <ol>
              <li>Forward 1 spaces</li>
              <li>Get out of start or forward 2 spaces</li>
              <li>Forward 3 spaces</li>
              <li>Backwards 4 spaces</li>
              <li>Forward 5 spaces</li>
              <li>Forward 6 spaces</li>
              <li>Forward 7 spaces and draw again</li>
              <li>Forward 8 spaces or split the spaces between 2 of your game pieces</li>
              <li>Forward 9 spaces</li>
              <li>Forward 10 spaces or backwards 1 space</li>
              <li>Forward 11 spaces or switch spaces with another player</li>
              <li>Forward twelve spaces or get out of start</li>
              <li> UH-OH - Take a player from your start area and switch places with anyone on the board. If no players are on the board move out of start one space</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GameRulesModal;