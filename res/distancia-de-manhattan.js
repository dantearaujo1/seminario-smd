// Não Resolvido
const fs = require("fs");
const input = fs.readFileSync('../testes/distancia-de-manhattan.txt','utf8');
// const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
const valores = input.split(' ').map((value)=>parseInt(value));
const ini = [valores[0],valores[1]];
const fim = [valores[2],valores[3]];

let result = fim[0] - ini[0] + fim[1] - ini[1];
if(result<0)result *= -1

console.log(result);
