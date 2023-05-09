const fs = require("fs");
// const input = fs.readFileSync('../testes/batalha.txt','utf8');
const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
const linhas = input.split('\n');
const a1 = parseInt(linhas[0]);
const d1 = parseInt(linhas[1]);
const a2 = parseInt(linhas[2]);
const d2 = parseInt(linhas[3]);

let result = 0;

if (a1 !== d2 && a2 !== d1 || a1 === d2 && a2 === d1){
  result = -1;
}
else if (a2 !== d1){
  result = 2;
}
else if (a1 !== d2){
  result = 1;
}
console.log(result);
