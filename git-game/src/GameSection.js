import React, { useState } from 'react';
import './Game.css'; 

function GameSection() {
  const [startGameVisible, setStartGameVisible] = useState(false);

  const startGame = () => {
    setStartGameVisible(true);
  };

  // Define the function to rearrange cells
  function adjCell(array, array2, array3, array4) {
    let ans = [];
    
    for (let i = 0; i < array.length; i++) {
      ans.push(array[i]);
    }
    
    for (let h = 0; h < array2.length; h++) {
      ans.push(array2[h]);
    }
    
    for (let j = array3.length - 1; j >= 0; j--) {
      ans.push(array3[j]);
    }
    
    for (let k = array4.length -1; k >= 0; k--) {
      ans.push(array4[k]);
    }
   
  return ans;
  };
  console.log();

  // Define the parts of cells
  const cell = [...Array(10)].map((_, index) => index);
  const part0 = cell.slice(0, 10);
  const part1 = cell.slice(11, 20);
  const part2 = cell.slice(21, 30);
  const part3 = cell.slice(31, 40);

  // Rearrange the cells
  const newCell = adjCell(part0, part2, part3, part1);

  // Split newCell into left, center, and right sections
  const leftSection = newCell.slice(0, 32);
  const centerSection = newCell.slice(32, 36);
  const rightSection = newCell.slice(36, 68);
console.log("newCell:", newCell);
console.log("leftSection:", leftSection);
console.log("centerSection:", centerSection);
console.log("rightSection:", rightSection);
  return (
    <div id="gameSection">
      <button onClick={startGame}>Start Game</button>
      {startGameVisible && (
        <div className="gameSection active">
          {/* Game board */}
          <div className="flex-container">
            {/* Left side */}
            <div className="left-side">
              {leftSection.map((cellIndex) => (
                <div className="flex-box" key={`leftCell${cellIndex}`}>
                  {/* Pieces */}
                  <div className="cell">
                    <div className="piece" id={`redPieceLeft${cellIndex}`}></div>
                    <div className="piece" id={`bluePieceLeft${cellIndex}`}></div>
                    <div className="piece" id={`greenPieceLeft${cellIndex}`}></div>
                    <div className="piece" id={`yellowPieceLeft${cellIndex}`}></div>
                  </div>
                </div>
              ))}
            </div>
            {/* Center */}
            <div className="center">
              {centerSection.map((cellIndex) => (
                <div className="flex-box" key={`centerCell${cellIndex}`}>
                  {/* Pieces */}
                  <div className="cell">
                    <div className="piece" id={`redPieceCenter${cellIndex}`}></div>
                    <div className="piece" id={`bluePieceCenter${cellIndex}`}></div>
                    <div className="piece" id={`greenPieceCenter${cellIndex}`}></div>
                    <div className="piece" id={`yellowPieceCenter${cellIndex}`}></div>
                  </div>
                </div>
              ))}
            </div>
            {/* Right side */}
            <div className="right-side">
              {rightSection.map((cellIndex) => (
                <div className="flex-box" key={`rightCell${cellIndex}`}>
                  {/* Pieces */}
                  <div className="cell">
                    <div className="piece" id={`redPieceRight${cellIndex}`}></div>
                    <div className="piece" id={`bluePieceRight${cellIndex}`}></div>
                    <div className="piece" id={`greenPieceRight${cellIndex}`}></div>
                    <div className="piece" id={`yellowPieceRight${cellIndex}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameSection;
