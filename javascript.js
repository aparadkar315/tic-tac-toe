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


/*function cell(){
    const value = "";
    return value;
}*/

//factory function to store player and switch player
//                   |
//                   V
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


const playerObj = player();
const players = playerObj.players;
console.log(players);


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
        

        const getBoard = (x,y) => {
            updatedBoard = game.updateBoard(x,y);
            return updatedBoard;
        }

        const getResult = (updatedBoard) => {
         if(updatedBoard[0][0] === updatedBoard[0][1] && updatedBoard[0][1] === updatedBoard[0][2] && updatedBoard[0][2]||
            updatedBoard[1][0] === updatedBoard[1][1] && updatedBoard[1][1] === updatedBoard[1][2] && updatedBoard[1][2]||
            updatedBoard[2][0] === updatedBoard[2][1] && updatedBoard[2][1] === updatedBoard[2][2] && updatedBoard[2][2]||
            updatedBoard[0][0] === updatedBoard[1][0] && updatedBoard[1][0] === updatedBoard[2][0] && updatedBoard[2][0]|| 
            updatedBoard[0][1] === updatedBoard[1][1] && updatedBoard[1][1] === updatedBoard[2][1] && updatedBoard[2][1]||
            updatedBoard[0][2] === updatedBoard[1][2] && updatedBoard[1][2] === updatedBoard[2][2] && updatedBoard[2][2]||
            updatedBoard[0][0] === updatedBoard[1][1] && updatedBoard[1][1] === updatedBoard[2][2] && updatedBoard[2][2]||
            updatedBoard[0][2] === updatedBoard[1][1] && updatedBoard[1][1] === updatedBoard[2][0] && updatedBoard[2][0]){
            if(game.getActivePlayer() === players[0]){
                    return "Player2 wins!";
                }else{
                    return "Player1 wins!";
                    }
                }else{
                    return "Next players turn";
                } 
        };
        return {getBoard, getResult};
    }
     
   

   
            
       
    

let updatedBoard = gameBoard.board;

let displayer = display();
updatedBoard = displayer.getBoard(0,0);
console.log(updatedBoard);
console.log(displayer.getResult(updatedBoard));

updatedBoard = displayer.getBoard(2,1);
console.log(updatedBoard);
console.log(displayer.getResult(updatedBoard));

updatedBoard = displayer.getBoard(1,1);
console.log(updatedBoard);
console.log(displayer.getResult(updatedBoard));

updatedBoard = displayer.getBoard(1,2);
console.log(updatedBoard);
console.log(displayer.getResult(updatedBoard)); 

updatedBoard = displayer.getBoard(2,2);
console.log(updatedBoard);
console.log(displayer.getResult(updatedBoard));

updatedBoard = displayer.getBoard(0,1);
console.log(updatedBoard);
console.log(displayer.getResult(updatedBoard));


















