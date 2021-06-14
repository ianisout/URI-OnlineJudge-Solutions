// LANGUAGE: JavaScript (nodejs 8.4.0) [+2s] {beta}

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let num1 = parseInt(lines.shift());
let num2 = parseInt(lines.shift());

console.log(`SOMA = ${num1 + num2}`);
