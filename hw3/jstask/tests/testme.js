function fetch() {}
function prompt() {}

function dbl(x) {
    return 2 * x;
}

var x = prompt(), y = prompt();
console.log("x=" + x + " y=" + y);
var z = dbl(x);
if (z === y) {
    if (x !== y + 10) {
        console.log("I am fine here");
    } else {
        console.log("I should not reach here");
    }
}
