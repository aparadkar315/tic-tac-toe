const gameBoard = (function(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(cell());
        }
    }
    return {board};
})();


function cell(){
    const value = "";
    return value;
}

function gameController(){
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


    let activePlayer;

    const switchPlayerTurn = () => {

        if(activePlayer === players[0]){
            activePlayer = players[1];
        }else{
            activePlayer = players[0];
        }
        return activePlayer;
};
    
    return {switchPlayerTurn};
}

let activePlayer  = gameController();


console.log(gameBoard);
console.log(activePlayer.switchPlayerTurn());
console.log(activePlayer.switchPlayerTurn());
console.log(activePlayer.switchPlayerTurn());
console.log(activePlayer.switchPlayerTurn());


function displayController(){

}





