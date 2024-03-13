$(document).ready(() => {  

    // Starts game after landing page gets button
$('#startGame').click(() => { // Changed the selector to match the HTML
  event.preventDefault();
  console.log('Game starts!');
  $('h1').text(`Draw a card to begin! \n${value1}'s Turn`); // Fixed value1 instead of value
  $('images\Uh-oh.png').addClass('animated infinite tada'); // Fixed selector to use correct syntax
  $('#startGame').addClass('zoomOutDown');
  $('.gameSection').css('display', 'flex');
});
const value1 = $('#player1Name').val();
const value2 = $('#player2Name').val();
const value3 = $('#player3Name').val();
const value4 = $('#player4Name').val();
      
console.log(player1)
console.log(player2)
console.log(player3)
console.log(player4)  


    
const player1 = new Player(value1, 'red', clickMainPiece1); 
const player2 = new Player(value2, 'blue', clickMainPiece2); 
const player3 = new Player(value3, 'green', clickMainPiece3); 
const player4 = new Player(value4, 'yellow', clickMainPiece4);  
    //sets an array of all the flexboxes
const cell = $('.cell');
    
    
var part0 = cell.slice(0, 10);
var part1 = cell.slice(11, 20);
var part2 = cell.slice(21, 30);
var part3 = cell.slice(31, 40);
  
    
    //rearranges cells so they are actually board format
function adjCell(array, array2, array3, array4) {
  let ans = [];
    
    
  for (var i = 0; i < array.length; i++) {
    ans.push(array[i]);
  }
    
  for (var h = 0; h < array2.length; h++) {
    ans.push(array2[h]);
  }
    
  for (var j = array3.length - 1; j >= 0; j--) {
    ans.push(array3[j]);
  }
    
  for (var k = array4.length -1; k >= 0; k--) {
     ans.push(array4[k]);
  }
    
  return ans;
};
    
const newCell = adjCell(part0, part2, part3, part1);
console.log(newCell);

class Player {
  constructor(player, color, clickMainPiece, currentPlayer) {
      this.player = player
      this.color = color
      this.clickMainPiece = clickMainPiece
      this.currentPlayer = false;
  }
    
  changeTurns(){};
  rollDice() {};
  movePiece(){};
    
}
class Cell {
  constructor(key,value){
    this.key = key;
    this.value = value;
    this.occupied = false;
  }
  isOccupied() {
    return this.occupied;
  }
  hidePiece() {
    if('red') {
      $(this.value).children('.redPiece').css('visibility', 'hidden');
      this.occupied = false;
    }
    if('blue'){
      $(this.value).children('.bluePiece').css('visibility', 'hidden');
      this.occupied = false;
    }
    if('green') {
      $(this.value).children('.greenPiece').css('visibility', 'hidden');
      this.occupied = false;
    }
    if('yellow') {
      $(this.value).children('.yellowPiece').css('visibility', 'hidden');
      this.occupied = false;
    }
  }
  showPiece() {
    if('red') {
      $(this.value).children('.redPiece').css('visibility', 'visible');
      this.occupied = true;
    }
    if('blue') {
      $(this.value).children('.bluePiece').css('visibility', 'visible');
      this.occupied = true;
    }
    if('green') {
      $(this.value).children('.greenPiece').css('visibility', 'visible');
      this.occupied = true;
    }
    if('yellow') {
      $(this.value).children('.yellowPiece').css('visibility', 'visible');
      this.occupied = true;  
    }
  }

  const cells = [];
  $('.cell').each(function (i, d) {
      cells.push(new Cell(i, $(d)));
  });

  for (let i = 0; i < newCell.length; i++) {
      cells.push(new Cell(i, newCell[i]));
  }

  $('.dice').click(() => {
    const diceValue = rollDice();
    console.log(`You rolled a ${diceValue}`);
    // Move the current player's piece based on the dice value
    movePiece(diceValue);
    // Switch to the next player
    switchPlayer();
});

function switchPlayer() {
  console.log(`Switching to ${nextPlayer().player}'s turn.`);
}
function nextPlayer() {
  if (currentPlayer === player1) {
      return player2;
  } else if (currentPlayer === player2) {
      return player3;
  } else if (currentPlayer === player3) {
      return player4;
  } else {
      return player1;
  }

}
let currentPlayer = player1;
// Function to roll the dice
function rollDice() {
    const sides = 12;
    const randomNumber = Math.floor(Math.random() * sides) + 1;
    return randomNumber;
}
function movePiece(diceValue) {
  console.log(`Switching to ${nextPlayer().player}'s turn.`);
checkWin();

  if(value === 1) {
     $(".dice > img").attr("src","NEED CARD IMG");
     diceVal = 1;
      movePiece();
  }
  if(value === 2) {
     $(".dice > img").attr("src","NEED CARD IMG");
      diceVal = 2;
      movePiece();
  }
  if(value === 3) {
     $(".dice > img").attr("src","NEED CARD IMG");
     diceVal = 3;
     movePiece();
  }
  if(value === 4) {
    $(".dice > img").attr("src","NEED CARD IMG");
     diceVal = 4;
    movePiece();
  }
  if(value === 5) {
    $(".dice > img").attr("src","NEED CARD IMG");
    diceVal = 5;
    movePiece();
  }
  if(value === 6) {
    $(".dice > img").attr("src","NEED CARD IMG");
    diceVal = 6;
    $('h1').text('You Rolled a Six. Roll Again!');
    rollSix();
    movePiece();
  }
  if(value === 7) {
    $(".dice > img").attr("src","NEED CARD IMG");
    diceVal = 7;
    movePiece();
  }
  if(value === 8) {
    $(".dice > img").attr("src","NEED CARD IMG");
    diceVal = 8;
    movePiece();
  }
    if(value === 9) {
      $(".dice > img").attr("src","NEED CARD IMG");
      diceVal = 9;
      movePiece();
    }
    if(value === 10) {
      $(".dice > img").attr("src","NEED CARD IMG");
      diceVal = 10;
      movePiece();
    }
    if(value === 10) {
      $(".dice > img").attr("src","NEED CARD IMG");
      diceVal = 10;
      movePiece();
    }
    if(value === 11) {
      $(".dice > img").attr("src","NEED CARD IMG");
      diceVal = 11;
      movePiece();
    }
    if(value === 12) {
      $(".dice > img").attr("src","NEED CARD IMG");
      diceVal = 12;
      movePiece();
    }
      return value;
} 


  function checkWin() {
    if(cells[9].isOccupied()) {
      $('.gameSection').css('display', 'none');
      $('#startGame').removeClass('zoomOutDown').addClass('zoomIn');
      $('#startGame').text(`${value1.val()} wins!`)
    }
    if(cells[21].isOccupied()) {
      $('.gameSection').css('display', 'none');
      $('#startGame').removeClass('zoomOutDown').addClass('zoomIn');
      $('#startGame').text(`${value2.val()} wins!`)
    }
  }
   function rollSix() {
  
     if(turns == 'red') {
       let clickMainPiece1 = $('#mainPiece1').click(function() {
           console.log('this has been clicked');
           $('#mainPiece1').css('display','none');
           $('.redPiece').css('visibility', 'visible');
           rollDice();
            changeTurns();
      )};
    }
  
     if(turns == 'blue') {
       let clickMainPiece2 = $('#mainPiece2').click(function() {
           console.log('this has been clicked');
           $('#mainPiece2').css('display','none');
           $('.bluePiece').css('visibility', 'visible');
           rollDice();
            changeTurns();
       });
     }

     if(turns == 'green') {
      let clickMainPiece3 = $('#mainPiece3').click(function() {
          console.log('this has been clicked');
          $('#mainPiece3').css('display','none');
          $('.greenPiece').css('visibility', 'visible');
          rollDice();
           changeTurns();
      });
    }

    if(turns == 'yellow') {
      let clickMainPiece4 = $('#mainPiece4').click(function() {
          console.log('this has been clicked');
          $('#mainPiece4').css('display','none');
          $('.yellowPiece').css('visibility', 'visible');
          rollDice();
           changeTurns();
      });
    }
  };


function changeTurns() {
    if (counter % 4 == 0) {
        $('.yellowPiece').off('click');
        turns = "yellow";
        $('h1').text(`${value1}'s Turn. ${value2} is next.`);

        $('.redPiece').click(movePiece);
        counter++;
    } else if (counter % 4 == 1) {
        $('.redPiece').off('click');
        turns = "red";
        $('h1').text(`${value2}'s Turn. ${value3} is next.`);

        $('.bluePiece').click(movePiece);
        counter++;
    } else if (counter % 4 == 2) {
        $('.bluePiece').off('click');
        turns = "blue";
        $('h1').text(`${value3}'s Turn. ${value4} is next.`);

        $('.greenPiece').click(movePiece);
        counter++;
    } else {
        $('.greenPiece').off('click');
        turns = "green";
        $('h1').text(`${value4}'s Turn. ${value1} is next.`);

        $('.yellowPiece').click(movePiece);
        counter++;
    }
}


    
    
    




