import React, { useState } from 'react';
import './Game.css'; 

function GameSection() {
  const [startGameVisible, setStartGameVisible] = useState(false);

  const startGame = () => {
    setStartGameVisible(true);
  }

  return (
    <div id="gameSection">
      <button onClick={startGame}>Start Game</button>
      {startGameVisible && ( 
        <div className="gameSection active">
        {/* Game board */}
        <div className="flex-container">
          {[...Array(10)].map((_, index) => (
            <div className="flex-box" key={`row${index}`}>
              {/* Cells */}
              {[...Array(10)].map((_, cellIndex) => (
                <div className="cell" key={`cell${index}-${cellIndex}`}>
                  {/* Pieces */}
              <div className="piece" id={`redPiece${index}-${cellIndex}`}></div>
              <div className="piece" id={`bluePiece${index}-${cellIndex}`}></div>
              <div className="piece" id={`greenPiece${index}-${cellIndex}`}></div>
              <div className="piece" id={`yellowPiece${index}-${cellIndex}`}></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      )}
    </div>
  );
}

export default GameSection;
