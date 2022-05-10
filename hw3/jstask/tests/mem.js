function fetch() {}
function prompt() {}

function foo() {
    this.i = 1;
    this.c = 'c';
};

function memsett(a) {
    for (var i in a) {
        a[i] = 0;
    }
    return a;
}

var a = new foo();
a.i = prompt();
a.c = prompt();
var message = "1";
if (a.c === 1) {
    message += " 2";
    a = memsett(a);
    if (a.c !== 1) {
        console.log("Error");
        message += " 3";
    }
}
