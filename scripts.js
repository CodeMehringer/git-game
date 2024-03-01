$(document).ready(() => {

    // class Player {
    //   constructor(player, color, clickMainPiece, currentPlayer) {
    //     this.player = player
    //     this.color = color
    //     this.clickMainPiece = clickMainPiece
    //     this.currentPlayer = false;
    //   }
  
    //   changeTurns(){};
    //   rollDice() {};
    //   movePiece(){};
  
    // }
      // let setBoard;
    // class gameBoard {
    //   constructor() {
  
    //   }
  
    // }
  
  
      // let player1 = new Player(1,'red', clickMainPiece1) ;
      // let player2 = new Player(2,'blue', clickMainPiece2);
      // console.log(player1)
      // console.log(player2)
  
  
  
$('.startBtn').click(() => {
    console.log('Game starts!');
    event.preventDefault()
    $('h1').text('Roll the Dice to begin!');
    $('.logo').addClass('animated infinite tada')
    $('#startgame').addClass('zoomOutDown')
    $('audio').attr('src', 'Audio/music2.mp3')
    $('.gameSection').css('display', 'flex');
    console.log(value1.val());
    console.log(player1);
  
    console.log(value2.val());
  
  
});
  
const value1 = $('#player1Name');
const value2 = $('#player2Name');
  
    // let playerOne = $('#player1Name').val()
    // (console.log(playerOne.val()));
  
let redPiece = $('.redPiece')
let bluePiece = $('.bluePiece')
  
const cell = $('.cell');
  
console.log(cell);
let setBoard = Array.from(Array(24).keys(cell));
for (var i = 0; i <Array.length; i++) {
    Array[i]
}
  
  
let redPosition = 15;
let bluePosition = 15;
let greenPosition = 15;
let yellowposition = 15;
let counter = 2;
  
let turns = "red";
  
  
function movePiece(clickMainPiece) {
  
    if (turns == 'red') {
        // console.log(turns)
    redPosition += 11.35;
    $('.redPiece').css('left',`${redPosition}vh`);
        changeTurns();
        } else {
        bluePosition += value * 11.35;
        $('.bluePiece').css('right',`${bluePosition}vh`);
        turns = "red";
        } else {
        greenPositionPosition += value * 11.35;
        $('.greenPiece').css('right',`${greenPositionPosition}vh`);
        turns = "red";
        } else {
        yellowpositionPosition += value * 11.35;
        $('.yellowPiece').css('right',`${yellowPosition}vh`);
        turns = "red";
        return turns;
        changeTurns();
      }
    }
  
function changeTurns() {
  
    if(counter % 2 === 0) {
        $('.bluePiece').off('click');
        $('h1').text(`${value1.val()}'s Turn`);
        turns = "blue";
        $('.redPiece').click(movePiece);
  
        counter ++;
    }
    else {
        $('.redPiece').off('click');
        turns = "red";
        $('h1').text(`${value2.val()}'s Turn`);
        $('.bluePiece').click(movePiece);
        counter++;
  
    }
}
  
  
  
let clickDice = $('.dice').click(rollDice)
  
function rollDice() {
      //create an object of a Dice
    var dice = {
    sides: 12,
        // method to generate number
    roll: function () {
          // random number between 0-1, times the amount of possible side,
          // rounded down, add one to add possibility of 12.
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

let value = dice.roll();
  
    if(value === 1) {
        $(".dice > img").attr("src","images\Uh-oh-forward1.png");
        movePiece();
    }
    
    if(value === 2) {
        $(".dice > img").attr("src","images\Uh-oh-STARTforward2.png");
        movePiece();
    }

    if(value === 3) {
        $(".dice > img").attr("src","images\Uh-oh-forward3.png");
        movePiece();
    }

    if(value === 4) {
        $(".dice > img").attr("src","images\Uh-oh-backward4.png");
        movePiece(); //this needs to go back 4
    }
    if(value === 5) {
      $(".dice > img").attr("src","images\Uh-oh-forward5.png");
      movePiece();
    }    
    
    if(value === 6) {
        $(".dice > img").attr("src","images\images\Uh-oh-forward6.png");
        movePiece();
    }    
    if(value === 7) {
        $(".dice > img").attr("src","images\Uh-oh-forward7.png");
        movePiece();
    }    

    if(value === 8) {
        $(".dice > img").attr("src","images\Uh-oh-forward8DRAWAGAIN.png");
        $('h1').text('You got an Eight. Move and Roll Again!');
        rollEight();
    }
    if(value === 9) {
        $(".dice > img").attr("src","images\Uh-oh-forward9.png");
       
        moveNine();
    }

    if(value === 10) {
        $(".dice > img").attr("src","images\Uh-oh-forward9.png");
       
        moveNine();
    }       
      return value;
    }
  
    function rollEight() {
  
      if(turns == 'red') {
        let clickMainPiece1 = $('#mainPiece1').click(function() {
            console.log('this has been clicked');
            $('#mainPiece1').css('display','none');
            $('.redPiece').css('visibility', 'visible');
            rollDice();
            // changeTurns();
        });
      }
  
      if(turns == 'blue') {
        let clickMainPiece2 = $('#mainPiece2').click(function() {
            console.log('this has been clicked');
            $('#mainPiece2').css('display','none');
            $('.bluePiece').css('visibility', 'visible');
            rollDice();
            // changeTurns();
        });
      }
   

    if(turns == 'Yellow') {
        let clickMainPiece2 = $('#mainPiece2').click(function() {
            console.log('this has been clicked');
            $('#mainPiece2').css('display','none');
            $('.bluePiece').css('visibility', 'visible');
            rollDice();
            // changeTurns();
        });
      }


    if(turns == 'Green') {
        let clickMainPiece2 = $('#mainPiece2').click(function() {
            console.log('this has been clicked');
            $('#mainPiece2').css('display','none');
            $('.bluePiece').css('visibility', 'visible');
            rollDice();
            // changeTurns();
        });
      }
    };

  
  //JQUERY ender
   });
  
  
  
  
  
  // function turn() {};
  
  // function endTurn() {};
  
  
