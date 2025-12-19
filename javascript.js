const playerObj = player();
const players = playerObj.players;


let displayer = display();
let displayResult = "Player 1's Turn.";

const game = document.querySelector("#game");

const startGame = document.createElement("button");
startGame.id = "start";
startGame.textContent = "START GAME";
game.appendChild(startGame);
startGame.addEventListener("click", createBoard,{once: true});


const gameBoard = (function(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push("");
        }
    }
    return {board};
})();

let updatedBoard = gameBoard.board;

function player(){
    const players = [
        {
            playerOneName : "Player1",
            token : "X"
        },
        {
            playerTwoName : "Player2",
            token : "O"
        }
    ];
    return {players};
}



function playGame() {

    let activePlayer;

    const switchPlayerTurn = () => {

        if(activePlayer === players[0]){
            activePlayer = players[1];
        }else{
            activePlayer = players[0];
        }
        return activePlayer;
    };


    const getActivePlayer = () => {
        return switchPlayerTurn();
    };


    const updateBoard = (x,y) => {
        activePlayer = getActivePlayer();
        
        if(updatedBoard[x][y]===""){
            updatedBoard[x][y] = activePlayer.token;
            return updatedBoard;
        }else{
            updatedBoard[x][y] = updatedBoard[x][y];
            return updatedBoard;
        }
    };


    return {updateBoard,getActivePlayer};
    
}


    function display() {
        const game = playGame();
        let count = 0;

        const getBoard = (displayResult, x, y) => {
            //condition to stop play after a result.
            if(displayResult !== "Player 1's Turn." && displayResult !== "Player 2's Turn."){ 
                updatedBoard = updatedBoard;
            }else{
                updatedBoard = game.updateBoard(x,y);
            }
            
            return updatedBoard;
        };

            
        const getResult = (displayResult,updatedBoard) => {

         if(displayResult === "Player 1's Turn." || displayResult === "Player 2's Turn."){
                count++;

            if(updatedBoard[0][0] === updatedBoard[0][1] && updatedBoard[0][1] === updatedBoard[0][2] && updatedBoard[0][2]||
            updatedBoard[1][0] === updatedBoard[1][1] && updatedBoard[1][1] === updatedBoard[1][2] && updatedBoard[1][2]||
            updatedBoard[2][0] === updatedBoard[2][1] && updatedBoard[2][1] === updatedBoard[2][2] && updatedBoard[2][2]||
            updatedBoard[0][0] === updatedBoard[1][0] && updatedBoard[1][0] === updatedBoard[2][0] && updatedBoard[2][0]|| 
            updatedBoard[0][1] === updatedBoard[1][1] && updatedBoard[1][1] === updatedBoard[2][1] && updatedBoard[2][1]||
            updatedBoard[0][2] === updatedBoard[1][2] && updatedBoard[1][2] === updatedBoard[2][2] && updatedBoard[2][2]||
            updatedBoard[0][0] === updatedBoard[1][1] && updatedBoard[1][1] === updatedBoard[2][2] && updatedBoard[2][2]||
            updatedBoard[0][2] === updatedBoard[1][1] && updatedBoard[1][1] === updatedBoard[2][0] && updatedBoard[2][0]) {
            
                if(game.getActivePlayer() === players[0]) {
                    return "Player2 won!";
                    } else {
                        return "Player1 won!";
                        }
                } else if(count === 9) {
                        return "Its a draw!";
                        } else if(isCountEven(count)){
                            return "Player 1's Turn.";
                            }else{
                                return "Player 2's Turn.";
                            }
                
            } else {
                return displayResult;
                } 
        };

        const clearDisplay = () => {
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    updatedBoard[i][j] = "";
                }
            }
            displayResult = "Player 1's Turn.";
            count = 0;
            newBoard();
        };

        return {getBoard, getResult, clearDisplay};
    }

    
   

    function domLogic(){
        
        let count = 0;
        const restart = document.createElement("button");
        restart.id = "restart";
        restart.textContent = "RESTART GAME";
        game.appendChild(restart);
        restart.addEventListener("click", displayer.clearDisplay);

        const container = document.createElement("div");
        container.classList.add("container");
        game.appendChild(container);

        let result = document.createElement("div");
        result.textContent = "Player 1's Turn."
        result.classList.add("result");
        game.appendChild(result);

        const mapBoardToDom = (updatedBoard) => {
            
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    count++;
                    let box = document.createElement("div");
                    box.classList.add("box");
                    box.dataset.row = i;
                    box.dataset.column = j;
                    box.textContent = updatedBoard[i][j];
                    if(isCountEven(count)){
                        box.style.backgroundColor = "#FFFFFF";
                    }else{
                        box.style.backgroundColor = "#C0DBE2";
                    }

                    if(updatedBoard[i][j] === ""){
                        placeMarker(box,updatedBoard,count);
                    }
                    container.appendChild(box);  
                }
            }
                
        };


        const placeMarker = (box,updatedBoard,count) => {

                box.addEventListener("click", () => {
                        if(box.textContent === ""){
                        updatedBoard = displayer.getBoard(displayResult,box.dataset.row,box.dataset.column);
                        box.textContent = updatedBoard[box.dataset.row][box.dataset.column];

                        if(box.textContent === "X"){
                            box.setAttribute("style", "color: #DFE2DB; background-color: #354E61;");
                        }else if(box.textContent === "O"){
                            box.setAttribute("style", "color: #354E61; background-color: #538495;");
                            }

                        resultDisplayer(updatedBoard,count);
                        }
                    });

            };


        const resultDisplayer = (updatedBoard,count) => {

            if(isCountEven(count)){
                result.style.color = "#354E61";
            }else{
                result.style.color = "#538495";
            }
            updatedBoard = updatedBoard;
            displayResult = displayer.getResult(displayResult,updatedBoard);
            result.textContent = displayResult;
        };    

        return{mapBoardToDom};

    }
     
    
    function createBoard() {
        const dom = domLogic();
        dom.mapBoardToDom(updatedBoard);
        game.removeChild(startGame);
    }

    function newBoard() {
        game.innerHTML = "";
        const dom = domLogic();
        dom.mapBoardToDom(updatedBoard);
    }

    function isCountEven(count) {
        if(count % 2 === 0){
            return true;
        }else 
            {
            return false;
            }
    }
    
    
    
























































