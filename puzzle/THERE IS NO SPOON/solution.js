/**
 * Don't let the machines win. You are humanity's last hope...
 **/

const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis

function printBoard(board) {
    for(let i=0; i<board.length; i++)
        console.error(...board[i])
}

function getSide(x, y, board){
    let n = -1;
    for(let i=x+1;i<board[y].length;i++)
        if(board[y][i]==="0"){
            n = i
            break
        }
    return n<board[y].length && n>0 ? `${n} ${y}` : `-1 -1`
}

function getDown(x, y, board){
    console.error(`DOWN X,Y: ${x}, ${y}`)
    let n = -1;
    for(let i=y+1;i<board.length;i++)
        if(board[i][x]==="0"){
            n = i
            break
        }
    return n<board.length && n>0  ? `${x} ${n}` : `-1 -1`
}



let board = [];
for (let i = 0; i < height; i++) {
    board[i] = linreadline().split("");
}

//printBoard(board)


for(let y = 0; y < height; y++)
    for(let x = 0; x < width; x++)
        if(board[y][x] !== ".")
            console.log(`${x} ${y} ${getSide(x, y, board)} ${getDown(x, y, board)}`)
        
