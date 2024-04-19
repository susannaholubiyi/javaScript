var length = 3;
var width = 3;
var obj = [{row: 0, col: 0, value: "X"},
            {row: 0, col: 1, value: "X"},
            {row: 0, col: 2, value: "O"},
            {row: 1, col: 0, value: "O"},
            {row: 1, col: 2, value: "X"},
            {row: 2, col: 0, value: "X"},
            {row: 2, col: 1, value: "0"},
            {row: 2, col: 2, value: "0"}] ;



function createGameBoard( length, width, obj){
    let gameBoard = [];
    for(index = 0; index< length; index ++){
        gameBoard.push([])
        for(count=0; count < width; count++){
            gameBoard[index].push(" ")
            
        }
        
    }
    obj.map((num)=>gameBoard[num.row] [num.col] = num.value);
    return gameBoard;
}
console.log(createGameBoard(length, width, obj));