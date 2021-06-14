// LANGUAGE: JavaScript (nodejs 8.4.0) [+2s] {beta}

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let valor = parseFloat(lines.shift());

let notaCem,
  notaCinq,
  notaVinte,
  notaDez,
  notaCinc,
  notaDois,
  moedaReal,
  moedaCinq,
  moedaVin,
  moedaDez,
  moedaCinc,
  moedaUm,
  troco = 0;

let centavos = (valor - Math.floor(valor)).toFixed(2) * 100;

troco = Math.floor(valor);

notaCem = parseInt(troco / 100);
troco -= notaCem * 100;
notaCinq = parseInt(troco / 50);
troco -= notaCinq * 50;
notaVinte = parseInt(troco / 20);
troco -= notaVinte * 20;
notaDez = parseInt(troco / 10);
troco -= notaDez * 10;
notaCinc = parseInt(troco / 5);
troco -= notaCinc * 5;
notaDois = parseInt(troco / 2);
troco -= notaDois * 2;

moedaReal = troco;
troco = centavos;
moedaCinq = parseInt(troco / 50);
troco -= moedaCinq * 50;
moedaVin = parseInt(troco / 25);
troco -= moedaVin * 25;
moedaDez = parseInt(troco / 10);
troco -= moedaDez * 10;
moedaCinc = parseInt(troco / 5);
troco -= moedaCinc * 5;
moedaUm = parseInt(troco / 1);
troco -= moedaUm * 1;

console.log(`NOTAS:
${notaCem} nota(s) de R$ 100.00
${notaCinq} nota(s) de R$ 50.00
${notaVinte} nota(s) de R$ 20.00
${notaDez} nota(s) de R$ 10.00
${notaCinc} nota(s) de R$ 5.00
${notaDois} nota(s) de R$ 2.00
MOEDAS:
${moedaReal} moeda(s) de R$ 1.00
${moedaCinq} moeda(s) de R$ 0.50
${moedaVin} moeda(s) de R$ 0.25
${moedaDez} moeda(s) de R$ 0.10
${moedaCinc} moeda(s) de R$ 0.05
${moedaUm} moeda(s) de R$ 0.01`);
