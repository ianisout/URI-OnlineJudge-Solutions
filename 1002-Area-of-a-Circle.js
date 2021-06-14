// LANGUAGE: JavaScript (nodejs 8.4.0) [+2s] {beta}

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let r = parseFloat(lines.shift());
let a = 3.14159 * Math.pow(r, 2);

console.log(`A=${a.toFixed(4)}`);
