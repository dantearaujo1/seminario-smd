// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('../testes/buff-ou-nerf.txt', "utf8");

// Seu código vai aqui
const lines = input.split(" ");
let N = parseInt(lines[0]);
let D = parseInt(lines[1]);
let M = parseInt(lines[2]);
let P = parseInt(lines[3]);

if (N*D > M*P) console.log("NERF")
if (N*D < M*P) console.log("BUFF")


