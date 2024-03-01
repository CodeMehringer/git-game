  
   let arr = [1,2,3,4,5,6,7,8,9,10];
   arr.reverse()
   console.log(arr);
  $(document).ready(() => 

    //values from forms
        const value1 = $('#player1Name');
        const value2 = $('#player2Name');
        const value3 = $('#player3Name');
        const value4 = $('#player4Name');
    
    
    // Starts game after landing page gets button
    $('#startBtn').click(() => {
      event.preventDefault();
        console.log('Game starts!');
        $('h1').text(`Draw a card to begin! \n${value.val()}'s Turn`);
        $('images\Uh-oh.png').addClass('animated infinite tada')
        $('#startBtn').addClass('zoomOutDown')
        $('.gameSection').css('display', 'flex');
    
      });
    
    
      let playerOne = $('#player1Name').val()
      (console.log(playerOne.val()));
    
    
      let redPiece = $('.redPiece')
      let bluePiece = $('.bluePiece')
      let greenPiece = $('.greenPiece')
      let yellowPiecePiece = $('.yellowPiece')
    
    //sets an array of all the flexboxes
      const cell = $('.cell');
    
    
      var part0 = cell.slice(0, 10);
      var part1 = cell.slice(10, 12);
      var part2 = cell.slice(12, 14);
      var part3 = cell.slice(14);
  
    
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

    let cells = [];

    // cell.each(function (i, d) {
    //     cells.push(new Cell(i, $(d)));
    // });
    
    for (var i = 0; i < newCell.length; i++) {
      cells.push(new Cell (i, newCell[i]));
    };
    
    $(cells[0]).html("new text")
     console.log(cell);
     console.log(cells);
    
      let counter = 2;
      let turns = "red";
    
      let clickDice = $('.dice').click(rollDice)
      let diceVal = null;

    //create an object of a Dice
      function rollDice() {
        var dice = {
          sides: 12,
          // method to generate number
          roll: function () {
            // random number between 0-1, times the amount of possible side,
            // rounded down, add one to add possibility of 10.
            var randomNumber = Math.floor(Math.random() * this.sides) + 1;
            return randomNumber;
          }
         }
        let value = dice.roll();
    
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
    
  let redCurrent = 0;
  let blueCurrent = 10;
        //need for green and yellow
    
  function movePiece() {
  checkWin();
    
    
          if (turns == 'red') {
            $('#mainPiece1').css('visibility','hidden');
            cells[redCurrent].showPiece('red');
    
              if (counter >= 3 && !isHigher('red')) {
    
                cells[redCurrent].hidePiece('red');
                redCurrent += diceVal
                cells[redCurrent].showPiece('red');
                console.log(cells[redCurrent].occupied)
                changeTurns();
                // $('.redPiece').click(changeTurns());
              } else {
              changeTurns();
            }
    
          } else {
              $('#mainPiece2').css('visibility','hidden');
              cells[blueCurrent].showPiece('blue');
    
                if (counter >= 4 && !isHigher('blue')) {
                    cells[blueCurrent].hidePiece('blue');
                    blueCurrent += diceVal
                    cells[blueCurrent].showPiece('blue');
                    console.log(cells[blueCurrent].occupied)
                    changeTurns();
                  // $('.bluePiece').click(changeTurns());
                } else {
                changeTurns();
              }
          }
    
      }

      }
    
        function changeTurns() {
    
          if(counter % 2 == 0) {
            console.log(turns);
            $('.bluePiece').off('click');
            turns = "blue";
            $('h1').text(`${value1.val()}'s Turn. ${value2.val()} is next.`);
    
    
            $('.redPiece').click(movePiece);
            counter ++;
          }
          else {
            console.log(turns);
            $('.redPiece').off('click');
            turns = "red";
            $('h1').text(`${value2.val()}'s Turn. ${value1.val()} is next.`);
    
            $('.bluePiece').click(movePiece);
            counter++;
          }
         
        }
    
      function checkWin() {
        if(cells[9].isOccupied()) {
          $('.gameSection').css('display', 'none');
          $('#startgame').removeClass('zoomOutDown').addClass('zoomIn');
          $('#startgame').text(`${value1.val()} wins!`)
        }
        if(cells[21].isOccupied()) {
          $('.gameSection').css('display', 'none');
          $('#startgame').removeClass('zoomOutDown').addClass('zoomIn');
          $('#startgame').text(`${value2.val()} wins!`)
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
           });
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
       });

    //JQUERY ender
 
    
    
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
         let setBoard;
        class gameBoard {
         constructor() {
    
         }
    
       }
    
    
//          let player1 = new Player(1,'red', clickMainPiece1) ;
//          let player2 = new Player(2,'blue', clickMainPiece2);
//          let player3 = new Player(3,'green', clickMainPiece3);
//          let player4 = new Player(4,'yellow', clickMainPiece4);

//          console.log(player1)
//          console.log(player2)
//          console.log(player3)
//          console.log(player4)

// class Game {
//     constructor() {
//       this.players = ['red', 'blue', 'green', 'yellow'];
//       this.currentPlayer = 0;
//       this.diceValue = 0;
//     }
  
//     rollDice() {
//       // Generate a random dice value between 1 and 10
//       this.diceValue = Math.floor(Math.random() * 10) + 1;
//       console.log(`Dice rolled: ${this.diceValue}`);
//       return this.diceValue;
//     }
  
//     movePiece(playerColor) {
//       // Implement the logic to move the piece based on the dice value
//       // For simplicity, let's just log the move for now
//       console.log(`${playerColor} piece moved ${this.diceValue} steps.`);
//     }
  
//     switchPlayer() {
//       this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
//       console.log(`Switching to ${this.players[this.currentPlayer]}'s turn.`);
//     }
//   }
  
//   // jQuery ready function
//   $(document).ready(() => {
//     const game = new Game();
  
//     // Attach a click event to the dice
//     $('.dice').click(() => {
//         const currentPlayerColor = game.players[game.currentPlayer];
//         const diceValue = game.rollDice();
//         game.movePiece(currentPlayerColor);
  
//       // Switch to the next player after a move
//       game.switchPlayer();
//     });
//   });