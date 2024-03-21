import React from 'react';
import './Game.css';
import { useState } from 'react';

function GameSection() {
  const [startGameVisible, setStartGameVisible] = useState(false);

  const startGame =() => {

    setStartGameVisible(true);
  }
  return (
    <div id="gameSection">
      <button onClick={startGame}>Start Game</button>
        <div className="flex-container"> </div>
        <div class="row row1">
          <div class="gameSection animated rotateIn"></div>
          <div id="startGame" className={startGameVisible ? 'active' : ''}></div>
          <div class="flex-box" id="cell1">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell2">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell3">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell4">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div> 
          </div>
          <div class="flex-box" id="cell5">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell6">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>  
          </div>
          <div class="flex-box" id="cell8">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell9">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div> 
          <div class="flex-box" id="cell10">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
        <div class="column">
          <div class="row row3">
          <div class="flex-box" id="cell30">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell29">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell28">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell27">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell26">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell25">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell24">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell23">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell22">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell21">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
        </div>         
    </div>
    <div class="circle">
      <div class="flex-circle small" id='circleOne'>
        <div class="piece" id="redPiece"></div>
      </div>
      <div class="flex-circle big" id='circleDice'>
        <div class="dice"></div>
      </div> 
      <div class="flex-circle small" id='circleTwo'>
        <div class="piece" id="bluePiece"></div>
      </div>
      <div class="flex-circle small" id='circleThree'>
        <div class="piece" id="greenPiece"></div> 
      </div>
      <div class="flex-circle small" id='circleFour'>
        <div class="piece" id="yellowPiece"></div> 
      </div>
    </div>
 
    <div class="row row2">
      <div class="flex-box" id="cell11">
      <div class="piece" id="redPiece"></div>
      <div class="piece" id="bluePiece"></div>
      <div class="piece" id="greenPiece"></div>
      <div class="piece" id="yellowPiece"></div>
    </div>
        <div class="flex-box" id="cell12">
        <div class="piece" id="redPiece"></div>
        <div class="piece" id="bluePiece"></div>
        <div class="piece" id="greenPiece"></div>
        <div class="piece" id="yellowPiece"></div>
      </div>
      <div class="flex-box" id="cell13">
        <div class="piece" id="redPiece"></div>
        <div class="piece" id="bluePiece"></div>
        <div class="piece" id="greenPiece"></div>
        <div class="piece" id="yellowPiece"></div>
        </div>
        <div class="flex-box" id="cell14">
          <div class="piece" id="redPiece"></div>
          <div class="piece" id="bluePiece"></div>
          <div class="piece" id="greenPiece"></div>
          <div class="piece" id="yellowPiece"></div>
        </div>
        <div class="flex-box" id="cell15">
          <div class="piece" id="redPiece"></div>
          <div class="piece" id="bluePiece"></div>
          <div class="piece" id="greenPiece"></div>
          <div class="piece" id="yellowPiece"></div>
        </div>
        <div class="flex-box" id="cell16">
          <div class="piece" id="redPiece"></div>
          <div class="piece" id="bluePiece"></div>
          <div class="piece" id="greenPiece"></div>
          <div class="piece" id="yellowPiece"></div>
        </div>
        <div class="flex-box" id="cell17">
          <div class="piece" id="redPiece"></div>
          <div class="piece" id="bluePiece"></div>
          <div class="piece" id="greenPiece"></div>
          <div class="piece" id="yellowPiece"></div>
        </div>
        <div class="flex-box" id="cell18">
          <div class="piece" id="redPiece"></div>
          <div class="piece" id="bluePiece"></div>
          <div class="piece" id="greenPiece"></div>
          <div class="piece" id="yellowPiece"></div>
        </div>
        <div class="flex-box" id="cell19">
          <div class="piece" id="redPiece"></div>
          <div class="piece" id="bluePiece"></div>
          <div class="piece" id="greenPiece"></div>
          <div class="piece" id="yellowPiece"></div>
        </div>
        <div class="flex-box" id="cell30">
          <div class="piece" id="redPiece"></div>
          <div class="piece" id="bluePiece"></div>
          <div class="piece" id="greenPiece"></div>
          <div class="piece" id="yellowPiece"></div>
        </div>
        <div class="row row2">
          <div class="flex-box" id="cell31">
          <div class="piece" id="redPiece"></div>
          <div class="piece" id="bluePiece"></div>
          <div class="piece" id="greenPiece"></div>
          <div class="piece" id="yellowPiece"></div>
        </div>
            <div class="flex-box" id="cell32">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
          </div>
          <div class="flex-box" id="cell33">
            <div class="piece" id="redPiece"></div>
            <div class="piece" id="bluePiece"></div>
            <div class="piece" id="greenPiece"></div>
            <div class="piece" id="yellowPiece"></div>
            </div>
            <div class="flex-box" id="cell34">
              <div class="piece" id="redPiece"></div>
              <div class="piece" id="bluePiece"></div>
              <div class="piece" id="greenPiece"></div>
              <div class="piece" id="yellowPiece"></div>
            </div>
            <div class="flex-box" id="cell35">
              <div class="piece" id="redPiece"></div>
              <div class="piece" id="bluePiece"></div>
              <div class="piece" id="greenPiece"></div>
              <div class="piece" id="yellowPiece"></div>
            </div>
            <div class="flex-box" id="cell36">
              <div class="piece" id="redPiece"></div>
              <div class="piece" id="bluePiece"></div>
              <div class="piece" id="greenPiece"></div>
              <div class="piece" id="yellowPiece"></div>
            </div>
            <div class="flex-box" id="cell37">
              <div class="piece" id="redPiece"></div>
              <div class="piece" id="bluePiece"></div>
              <div class="piece" id="greenPiece"></div>
              <div class="piece" id="yellowPiece"></div>
            </div>
            <div class="flex-box" id="cell38">
              <div class="piece" id="redPiece"></div>
              <div class="piece" id="bluePiece"></div>
              <div class="piece" id="greenPiece"></div>
              <div class="piece" id="yellowPiece"></div>
            </div>
            <div class="flex-box" id="cell39">
              <div class="piece" id="redPiece"></div>
              <div class="piece" id="bluePiece"></div>
              <div class="piece" id="greenPiece"></div>
              <div class="piece" id="yellowPiece"></div>
            </div>
            <div class="flex-box" id="cell40">
              <div class="piece" id="redPiece"></div>
              <div class="piece" id="bluePiece"></div>
              <div class="piece" id="greenPiece"></div>
              <div class="piece" id="yellowPiece"></div>
            </div>
        </div>      
      </div>
    </div>
  </div>
  );     
}
export default GameSection;