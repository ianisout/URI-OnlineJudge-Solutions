// LANGUAGE: JavaScript (nodejs 8.4.0) [+2s] {beta}

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const parts = lines.shift().split(" ");

function fazerPedido(item, qtd) {
  const menu = {
    1: 4.0,
    2: 4.5,
    3: 5.0,
    4: 2.0,
    5: 1.5,
  };

  return (menu[item] * qtd).toFixed(2);
}

console.log(`Total: R$ ${fazerPedido(parts[0], parts[1])}`);
