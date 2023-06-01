// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('../testes/test-copa.txt', "utf8");

// Seu código vai aqui
const lines = input.split("\n")

const totalDeFigurinhas= parseInt(lines[0])
const nFigCompradas = parseInt(lines[1])

console.log(quantasFaltam(totalDeFigurinhas,nFigCompradas));

/*
  Assinatura quantasFaltam(total de figurinhas no album, total compradas)
                                      int                     int
  Irá criar um dicionário e aumentará a quantidade de cada figurinha ja comprada
  no fim irá contar quantos elementos existem no dicionário
*/
function quantasFaltam(total,compradas){
  let albumFigs = new Map();

  for (let i = 0; i < compradas; i++){
    let idFigurinhas = (lines[2+i])
    if(albumFigs.has(idFigurinhas)) albumFigs.set(idFigurinhas,albumFigs.get(idFigurinhas)+1)
    else albumFigs.set(idFigurinhas,1)
  }

  return (total - albumFigs.size);
}

