const { createInterface } = require('readline');//For taking user input and displaying a corresponding text output.

//Array of arrays, board grid containing 3 x 3 cell layout.
class TicTacToe {
    constructor() {
    
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.currentPlayer = 'X'; //This allows player (X) to make first move.
        this.moves = 0;
        this.gameOver = false;
     }

//Display the game board. (|) creates columns, (---) creates rows in console. Alos contains a double 'for' loop to make 3 rows and 3 columns
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

//This checks players moves and determines win/draw conditons,if cell is empty, full or another turn is due and asks if another game will be played if win/draw occurs.
    makeMove(row, col) {
        if (!this.gameOver && this.board[row][col] === ' ') {    
            this.board[row][col] = this.currentPlayer;           
            this.moves++;
            this.printBoard();
            if (this.checkWin(row, col)) {
                console.log(`Player ${this.currentPlayer} wins!`);   
                this.gameOver = true;
                this.askToPlayAgain();                             
            } else if (this.moves === 9) {                          
                console.log("Its a draw!");                           
                this.gameOver = true;
                this.askToPlayAgain();
            } else {
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';  //Checks if it's player (X) turn then (O) will be next.If not player (X),then it must be player (O) so (X) will be next.
                this.promptPlayer();
            }
        } else {
            console.log("Its taken. Try again.");
            this.promptPlayer();
        }
    }

//Confirm win conditions, horizontally, vertically and diagonally using 'every()'method and 'callback' function.
    checkWin(row, col) {
        const symbol = this.board[row][col];
        if (this.board[row].every(cell => cell === symbol)) return true;//Checks row.
        if (this.board.every(row => row[col] === symbol)) return true;//Checks column.
        if (row === col && this.board.every((row, index) => row[index] === symbol)) return true;//checks diagonal top left to bottom right.
        if (row + col === 2 && this.board.every((row, index) => row[2 - index] === symbol)) return true;//checks opposing diagonal, top right to bottom left.
        return false;
    }

//Exit game process and 'exit' message.  
    exitGame() {
        console.log("Exiting the game.");
        process.exit(); 
    }

//Refresh new board, sets game back to beginning with palyer 1 (X) to start again.
    resetGame() {
        this.board = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.currentPlayer = 'X';
        this.moves = 0;
        this.gameOver = false;
        console.log("Starting a new game...");
        this.printBoard();
        this.promptPlayer();
    }

//Asking to confirm if another game is to be played or not. 'y' will restart game, 'n' will exit game.    
    askToPlayAgain() {
        this.readlineInterface.question("Do you want to play again? (y/n): ", (answer) => {
            if (answer.toLowerCase() === 'y') {
                this.resetGame(); 
            } else {
                console.log("Game Over!");
                this.exitGame(); 
            }
        });
    }

    promptPlayer() {
        //Prompt the current player for input or option to exit game.
        this.readlineInterface.question(`Player ${this.currentPlayer}, enter row and column with a space between them(1-3 1-3), or type 'exit' to quit: `,
         (input) => {
            if (input.toLowerCase() === 'exit') {
                this.exitGame(); 
            } else {
                const [row, col] = input.trim().split(' ').map(num => parseInt(num));/*takes input string,removes any leading or trailing whitespace,
                makes array of substrings,converts substring to integer then assigns to the variables row,col*/

                
                //Validate input and place marker or ask for input between 1-3 if a character outside that is entered.
                if (!isNaN(row) && !isNaN(col) && row >= 1 && row <= 3 && col >= 1 && col <= 3) {
                    this.makeMove(row - 1, col - 1);
                } else {
                    console.log("Invalid input. Row and column numbers must be between 1 and 3.");
                    this.promptPlayer(); 
                }
            }
        });
    }

 //Start the game, creates and configures readline interface for input and output. Display board and prompt player   
 play() {
    this.readlineInterface = createInterface({
        input: process.stdin,
        output: process.stdout,
       });

        this.printBoard();
        this.promptPlayer();
    }
}

const game = new TicTacToe();

game.play();
