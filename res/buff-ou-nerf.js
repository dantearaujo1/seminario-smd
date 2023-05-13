// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const lines = input.split(" ");
let resultado = "NERF";
let N = parseInt(lines[0]);
let D = parseInt(lines[1]);
let M = parseInt(lines[2]);
let P = parseInt(lines[3]);

if (N*D < M*P) resultado = "BUFF"

console.log(resultado);


