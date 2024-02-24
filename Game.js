
  class Game {
    constructor() {
      this.players = ['red', 'blue', 'green', 'yellow'];
      this.currentPlayer = 0;
      this.diceValue = 0;
    }
  
    rollDice() {
      // Generate a random dice value between 1 and 10
      this.diceValue = Math.floor(Math.random() * 10) + 1;
      console.log(`Dice rolled: ${this.diceValue}`);
      return this.diceValue;
    }
  
    movePiece(playerColor) {
      // Implement the logic to move the piece based on the dice value
      // For simplicity, let's just log the move for now
      console.log(`${playerColor} piece moved ${this.diceValue} steps.`);
    }
  
    switchPlayer() {
      this.currentPlayer = (this.currentPlayer + 1) % this.players.length;
      console.log(`Switching to ${this.players[this.currentPlayer]}'s turn.`);
    }
  }
  
  // jQuery ready function
  $(document).ready(() => {
    const game = new Game();
  
    // Attach a click event to the dice
    $('.dice').click(() => {
      const currentPlayerColor = game.players[game.currentPlayer];
      const diceValue = game.rollDice();
      game.movePiece(currentPlayerColor);
  
      // Switch to the next player after a move
      game.switchPlayer();
    });
  });           