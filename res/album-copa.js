// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('test-copa.txt', "utf8");

// Seu código vai aqui
const lines = input.split("\n")

const totalDeFigurinhas= parseInt(lines[0])
const nFigCompradas = parseInt(lines[1])
let albumFigs = new Map();
// let albumFigs = {};

for (let i = 0; i < nFigCompradas; i++){
  let idFigurinhas = (lines[2+i])
  if(albumFigs.has(idFigurinhas)) albumFigs.set(idFigurinhas,albumFigs.get(idFigurinhas)+1)
  else albumFigs.set(idFigurinhas,1)
  // if(!albumFigs[idFigurinhas]){ albumFigs[idFigurinhas] = 1}
  // else albumFigs[idFigurinhas]++
  // console.log(Object.keys(albumFigs).length)


}
console.log(totalDeFigurinhas-albumFigs.size);

