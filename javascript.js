const gameBoard = (function(){
    const rows = 3;
    const columns = 3;
    const board = [];

    for(let i = 0; i < rows; i++){
        board[i] = [];
        for(let j = 0; j < columns; j++){
            board[i].push(Cell());
        }
    }
    return {board};
})();


function players(){
    const playerInfo = [
        {
            playerOneName : "Player1",
            token : "X"
        },
        {
            playerTwoName : "Player2",
            token : "O"
        }
    ]
    return {playerInfo};
}

//function gameControl() {
//    gameBoard.board;
//    } 



