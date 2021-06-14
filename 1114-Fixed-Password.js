// LANGUAGE: JavaScript (nodejs 8.4.0) [+2s] {beta}

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

for (let i = 0; i < lines.length; i++) {
  if (Number(lines[i]) !== 2002) {
    console.log(`Senha Invalida`);
  } else {
    console.log(`Acesso Permitido`);
    break;
  }
}
