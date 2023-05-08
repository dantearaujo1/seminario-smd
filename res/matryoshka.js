const fs = require('fs');
// const input = fs.readFileSync(0,"utf8");
const input = fs.readFileSync("../testes/matryoshka.txt","utf8");


const linhas = input.split("\n");

const quantidade = parseInt(linhas[0]);
const alturas = linhas[1].split(" ").map( element => {return parseInt(element)} );


const copia = [...alturas];

let fixed = alturas[0];
for (let j = 0; j < quantidade; j++){
  for (let i = j+1; i < quantidade; i++){
    fixed = alturas[j];
    let mover = alturas[i];
    if (fixed > mover){
      alturas[i] = alturas[j];
      alturas[j] = mover;
    }
  }
}

console.log(...copia);
console.log(...alturas);

let movimento = 0;
let result = [];
for ( let i = 0; i < quantidade; i++){
  if (copia[i] !== alturas[i]){
    // let inside = false;
    // for (let j = 0; j < result.length; j++){
    //   if (alturas[i] === result[j]){
    //     inside = true;
    //   }
    // } movimento++;
    // if(!inside){
      result.push(alturas[i]);
    movimento++;
    // }
  }
}

console.log(movimento);
if(movimento){
  console.log(...result);
}
