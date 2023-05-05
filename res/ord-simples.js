const fs = require('fs');
const input = fs.readFileSync("../testes/ord-simples.txt",'utf8');


const lines = input.split('\n');
const nElementos = parseInt(lines[0]);
const elementos = lines[1].split(' ').map((value)=>parseInt(value));

for (let i = 0; i < nElementos; i++) {
  for (let j = i+1; j < nElementos; j++) {
    let fixo = elementos[i];
    let movel = elementos[j];

    if ( fixo > movel ){
      const temp = elementos[i];
      elementos[i] = elementos[j];
      elementos[j] = temp;
    }

  }

}

console.log(...elementos);
