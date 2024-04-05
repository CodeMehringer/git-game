import React, { useState } from 'react';
import '../assets/Game.css';
import HomeCircle from './HomeCircle';
import LoginModal from '../assets/LoginModal';

function GameSection() {
  const [startGameVisible, setStartGameVisible] = useState(true);
  const [loginModalVisible, setLoginModalVisible] = useState(true); // Initially show login modal
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track user login status

  const startGame = () => {
    if (isLoggedIn) {
      console.log("Starting game..."); //NOT LOGGING
      setStartGameVisible(true);
      setLoginModalVisible(false); // Hide the login modal when the game starts (dont want to take this away yet, need a restart game modal)
    } else {
      // Handle case where user tries to start game without logging in
      alert("Please log in before starting the game!"); //THIS WORKS
    }
  };

  const handleLogin = () => {
    console.log("User logged in."); //NOT LOGGING
    setIsLoggedIn(true); // Set isLoggedIn to true when the user logs in
    setLoginModalVisible(true); // Hide the login modal after logging in (not working)
  };

  console.log("startGameVisible:", startGameVisible);
  console.log("loginModalVisible:", loginModalVisible);
  console.log("isLoggedIn:", isLoggedIn);

  // Define the function to rearrange cells
  function adjCell( leftSection, topSection, bottomSection, rightSection) {
    let ans = [];
    

    ans.push(...topSection);
    ans.push(...bottomSection);
    
    // Push the left and right sections, excluding the first and last elements (top left and bottom right corners)
    leftSection.forEach((cellIndex, index) => {
      if (index !== 0 && index !== leftSection.length - 1) ans.push(cellIndex);
    });
    rightSection.forEach((cellIndex, index) => {
      if (index !== 0 && index !== rightSection.length - 1) ans.push(cellIndex);
    });
    
    return ans;
  };

  // Define the parts of cells
  const cell = [...Array(100)].map((_, index) => index);
  const topSection = cell.slice(0,10);  // 8 cells on the top
  const bottomSection = cell.slice(90); // 8 cells on the bottom
  const leftSection = cell.filter((_, index) => index % 10 === 9); // 10 cells on the left side
  const rightSection = cell.filter((_, index) => index % 10 === 9); // 10 cells on the right side
  
  console.log("leftSection:", leftSection);
  console.log('topSection:', topSection);
  console.log("bottomSection:", bottomSection);
  console.log("rightSection:", rightSection);
  // Rearrange the cells
const newCell = adjCell(topSection, bottomSection, leftSection, rightSection);

  return (
    <div id="gameSection">
    {startGameVisible && <button onClick={startGame}> Start Game</button>}
    {loginModalVisible && <LoginModal onLogin={handleLogin} />}

    {startGameVisible && isLoggedIn && (
        <div className="gameSection active">
          {/* Game board */}
          <div className="flex-container">
            {/* Left side */}
            <div className="left-side">
            <HomeCircle color="circleOne" position="circle" />
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
            {/* Top */}
            <div className="top flex-container">
              {topSection.map((cellIndex) => (
                <div className="flex-box" key={`topCell${cellIndex}`}>
                  {/* Pieces */}
                  <div className="cell">
                    <div className="piece" id={`redPieceTop${cellIndex}`}></div>
                    <div className="piece" id={`bluePieceTop${cellIndex}`}></div>
                    <div className="piece" id={`greenPieceTop${cellIndex}`}></div>
                    <div className="piece" id={`yellowPieceTop${cellIndex}`}></div>
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
          <div className="bottom flex-container">
              {bottomSection.map((cellIndex) => (
                <div className="flex-box" key={`bottomCell${cellIndex}`}>
                  {/* Pieces */}
                  <div className="cell">
                    <div className="piece" id={`redPieceBottom${cellIndex}`}></div>
                    <div className="piece" id={`bluePieceBottom${cellIndex}`}></div>
                    <div className="piece" id={`greenPieceBottom${cellIndex}`}></div>
                    <div className="piece" id={`yellowPieceBottom${cellIndex}`}></div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      )}
    </div>
  );
}
export default GameSection;