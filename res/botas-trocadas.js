const fs = require('fs');
const input = fs.readFileSync('../testes/botas-trocadas.txt','utf8');

const linhas = input.split('\n');
const qnt = parseInt(linhas[0]);
const botas = {};

let contador = 0;

for (let i = 0; i < qnt;i++){
  bota  = linhas[i+1].split(' ');
  number = parseInt(bota[0]);
  pair = bota[1];
  if(!botas[number]) botas[number] = [pair];
  else {
    if (botas[number][0] === bota[1] || botas[number].length === 0) {
      botas[number].push(bota[1]);
    }
    else {
      botas[number].pop()
      contador++
    }
  }
}

console.log(contador);
