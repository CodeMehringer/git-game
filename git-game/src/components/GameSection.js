import React, { useState, useEffect } from 'react';
import '../assets/Game.css';
import HomeCircle from './HomeCircle';
import LoginModal from './LoginModal';
import GameRulesModal from '../components/GameRulesModal';

function GameSection() {
  const [startGameVisible, setStartGameVisible] = useState(true);
  const [loginModalVisible, setLoginModalVisible] = useState(true); // Initially show login modal
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track user login status
  const [rulesModalVisible, setRulesModalVisible] = useState(false); // Track rules modal visibility

  // Define sections of the game board
  const leftSection = Array.from({ length: 10 }, (_, index) => index * 10);
  const topSection = Array.from({ length: 10 }, (_, index) => index);
  const rightSection = Array.from({ length: 10 }, (_, index) => index * 10 + 9);
  const bottomSection = Array.from({ length: 10 }, (_, index) => index + 90);

  useEffect(() => {
    console.log("isLoggedIn:", isLoggedIn);
  }, [isLoggedIn]);

  const startGame = () => {
    if (isLoggedIn) {
      console.log("Starting game...");
      setStartGameVisible(true);
      setLoginModalVisible(false); // Hide the login modal when the game starts
    } else {
      // Handle case where user tries to start game without logging in
      alert("Please log in before starting the game!");
    }
  };

  const handleLogin = () => {
    console.log("User logged in.");
    setIsLoggedIn(true); // Set isLoggedIn to true when the user logs in
    setLoginModalVisible(false); // Hide the login modal after logging in
  };

  const toggleRulesModal = () => {
    setRulesModalVisible(!rulesModalVisible); // Toggle rules modal visibility
  };

  return (
    <div id="gameSection">
      {startGameVisible && isLoggedIn && (
        <div className="game-controls">
          <button onClick={startGame}>New Game</button>
          <button onClick={toggleRulesModal}>Rules</button>
        </div>
      )}
      {loginModalVisible && <LoginModal onLogin={handleLogin} />}
  
      {rulesModalVisible && <GameRulesModal onClose={toggleRulesModal} />}
  
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
)};
export default GameSection;