/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');

let pos = {'X': parseInt(inputs[0]), 'Y': parseInt(inputs[1])}
let max = {'X': W-1, 'Y': H-1}
let min = {'X': 0, 'Y': 0}

let directions = "";
let lastDirection = "";

// game loop
while (true) {
    lastDirection = directions;
    directions = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    //if bomb is to the right
    if(directions.includes('R')){
        //min is my location + 1
        min['X'] = pos['X'] + 1
        //if last time bomb was to the left
        if(lastDirection.includes('L')){
            //verify what is closest to bomb pos + 1 or minX and assign to minX
            min['X'] = Math.max(pos['X'] + 1, min['X'])
        }
        //new X is half of distance between position and max
        pos['X'] = pos['X'] + Math.ceil((max['X'] - min['X']) / 2) + 1
    }else if(directions.includes('L')){
        //same logic as R block but reversed
        max['X'] = pos['X'] - 1
        if(lastDirection.includes('R')){
            max['X'] = Math.min(pos['X'] - 1, max['X'])
            console.error("L->R")
        }
        pos['X'] = pos['X'] - Math.ceil((max['X'] - min['X']) / 2) - 1
    }

    if(directions.includes('D')){
        min['Y'] = pos['Y'] + 1

        if(lastDirection.includes('U')){
            min['Y'] = Math.max(pos['Y'] + 1, min['Y'])
            console.error("D->U")
        }
        pos['Y'] = pos['Y'] + Math.ceil((max['Y'] - min['Y']) / 2) + 1
    }else if(directions.includes('U')){
        max['Y'] = pos['Y'] - 1

        if(lastDirection.includes('D')){
            max['Y'] = Math.min(pos['Y'] - 1, max['Y'])
            console.error("U->D")
        }
        pos['Y'] = pos['Y'] - Math.ceil((max['Y'] - min['Y']) / 2) - 1
    }

    // the location of the next window Batman should jump to.
    console.log(pos['X'], pos['Y']);
}
