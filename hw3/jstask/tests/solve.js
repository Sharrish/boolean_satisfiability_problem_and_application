function fetch() {}
function prompt() {}

var x = prompt();
var y = prompt();
var z = prompt();
console.log("Input is " + x + " " + y + " " + z);

var message = "1";
if (x + y + z === 6) {
    message += " 2";
    if (2 * x + 7 * y + 3 * z === 25) {
        message += " 3";
        if (-4 * x - 2 * y + 2 * z === -2) {
            message += " 4";
        	console.log("Reached destination");
        }
    }
}
