const playerObj = player();
const players = playerObj.players;


let displayer = display();
let displayResult = "Next players turn.";


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
            if(displayResult !== "Next players turn."){ 
                updatedBoard = updatedBoard;
            }else{
                updatedBoard = game.updateBoard(x,y);
            }
            
            return updatedBoard;
        }
            
        const getResult = (displayResult,updatedBoard) => {

         if(displayResult === "Next players turn."){
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
                        } else {
                            return "Next players turn."
                            }
                
            } else {
                return displayResult;
                } 
        };
        return {getBoard, getResult};
    }

    
   

    function domLogic(){
        
        //let updatedBoard = displayer.getBoard();

        const mapBoardToDom = (updatedBoard) => {
            const game = document.querySelector("#game");
            
            const container = document.createElement("div");
            container.classList.add("container");
            for(let i = 0; i < 3; i++){
                for(let j = 0; j < 3; j++){
                    let box = document.createElement("div");
                    box.classList.add("box");
                    box.textContent = updatedBoard[i][j];
                    container.appendChild(box);  
                }
            }
                game.appendChild(container);
        };

        return{mapBoardToDom};
    }
        

    const dom = domLogic();
    

    const start = document.querySelector("#start");
    start.addEventListener("click", dom.mapBoardToDom(updatedBoard));





























updatedBoard = displayer.getBoard(displayResult,0,0);
console.log(updatedBoard);
displayResult = displayer.getResult(displayResult,updatedBoard);
console.log(displayResult);

updatedBoard = displayer.getBoard(displayResult,1,1);
console.log(updatedBoard);
displayResult = displayer.getResult(displayResult,updatedBoard);
console.log(displayResult);

updatedBoard = displayer.getBoard(displayResult,2,2);
console.log(updatedBoard);
displayResult = displayer.getResult(displayResult,updatedBoard);
console.log(displayResult);

updatedBoard = displayer.getBoard(displayResult,1,2);
console.log(updatedBoard);
displayResult = displayer.getResult(displayResult,updatedBoard);
console.log(displayResult);

updatedBoard = displayer.getBoard(displayResult,1,0);
console.log(updatedBoard);
displayResult = displayer.getResult(displayResult,updatedBoard);
console.log(displayResult);

updatedBoard = displayer.getBoard(displayResult,2,0);
console.log(updatedBoard);
console.log(displayer.getResult(displayResult,updatedBoard));


updatedBoard = displayer.getBoard(displayResult,0,2);
console.log(updatedBoard);
displayResult = displayer.getResult(displayResult,updatedBoard);
console.log(displayResult);

updatedBoard = displayer.getBoard(displayResult,0,1);
console.log(updatedBoard);
displayResult = displayer.getResult(displayResult,updatedBoard);
console.log(displayResult);

updatedBoard = displayer.getBoard(displayResult,2,1);
console.log(updatedBoard);
displayResult = displayer.getResult(displayResult,updatedBoard);
console.log(displayResult);































