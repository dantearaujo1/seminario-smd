const fs = require("fs");
// const input = fs.readFileSync('../testes/lista-palindroma.txt','utf8');
const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
const lines = input.split('\n');
let nElementos = parseInt(lines[0]);
const elementos = lines[1].split(' ').map((value)=>parseInt(value));

// Devo usar o while ja que eu vou usar os dois indices
let i = 0;
let j = nElementos-1;
let contador = 0;
while (i < j){
  let a = elementos[i];
  let b = elementos[j];
  if (a > b){
    elementos[j-1] += b;
    j--;
    contador++;
  }
  else if (a < b){

    elementos[i+1] += a;
    i++;
    contador++;
  }
  else{
    i++;
    j--;
  }
}
console.log(contador);
