// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('../testes/anagrama.txt', "utf8");

// Seu código vai aqui
const lines = input.split("\n");
const N = parseInt(lines[0]);
const frase1 = lines[1];
const frase2 = lines[2];
let result = 'S';
const letras1 = {};
const letras2 = {};

[...frase1].forEach(letra => {
  if(!letras1[letra])letras1[letra]=1;
  else letras1[letra] += 1;
});
[...frase2].forEach(letra => {
  if(!letras2[letra])letras2[letra]=1;
  else letras2[letra] += 1;
});

// Preciso testar quantidade de simbolos(espaco, virgula e ponto)
// if (frase1[" "] === frase2[" "] && frase1["."] === frase2["."] && frase1[","] === frase2[","]) result = 'S';

// Preciso testar a quantidade de cada letra
for (const [key,_] of Object.entries(letras1)) {
  if (key === ' ' || key === '.' || key === ',') {}
  else if(letras1[key] !== letras2[key]) {
    result='N';
  }
}


console.log(result)

