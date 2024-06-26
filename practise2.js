class TicTacToe {
    constructor() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.currentPlayer = 'X'; //This allows player (X) to make the first move.
        this.moves = 0;
        //this.gameOver = false;
    }

    printBoard() {
        console.log("-------------");
        for (let i = 0; i < 3; i++) {
            let row = "|";
            for (let j = 0; j < 3; j++) {
                row += ` ${this.board[i][j]} |`;
            }
            console.log(row);
            console.log("-------------");
        }
    }
}

 const game = new TicTacToe(); // Create an instance of the TicTacToe class
game.printBoard(); // Call the printBoard method to display the game board
