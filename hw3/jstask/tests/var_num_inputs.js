function fetch() {}
function prompt() {}

var message = "1";
var x, y, z;
x = prompt();
if (x === 100) {
    message += " 2 " + x;
    y = prompt();
    if (y === 200) {
        message += " 3 " + y;
        z = prompt();
        if (z === 300) {
            message += " 4 " + z;
            console.log("Hello");
        }
    } else {
        message += " 5";
        z = prompt();
        if (z === 400) {
            message += " 6 " + z;
            console.log("Hullo");
        }
    }
}
