const fs = require('fs');
const input = fs.readFileSync("../testes/tacos-de-bilhar.txt",'utf8');

// Assumir estoque vazio

const linhas = input.split('\n');
const nConsultas = parseInt(linhas[0]);
const comprimentos = linhas[1].split(' ').map((compString) => {return parseInt(compString);});
const fabricados = new Map();
let contador = 0;
for (let i = 0; i < nConsultas; i++){
  const comprimentoDesejado = comprimentos[i];

  if (!fabricados[comprimentoDesejado]) {
    contador += 2;
    fabricados[comprimentoDesejado] = 1;
  }
  else{
    fabricados[comprimentoDesejado] -= 1;
  }
}

console.log(contador);

