/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
var answer = 0;
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    console.error("t:"+t);

    if(Math.abs(t) < Math.abs(answer) || answer === 0){
        answer = t;
    }else if(Math.abs(t) === Math.abs(answer)){
        answer = t > answer ? t : answer;
    }

    console.error(`a:${answer}`);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(answer);
