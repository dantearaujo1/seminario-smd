// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('../testes/test-chocolate.txt', "utf8");

// Seu código vai aqui
const lines = input.split("\n");
let dimension = 0;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

for (let i = 0; i < lines.length-1; i++){
  values = lines[i].split(" ");

  if (i === 0) dimension = parseInt(values[0]);
  else if (i === 1) {
    x1 = parseInt(values[0]);
    y1 = parseInt(values[1]);
  }
  else {
    x2 = parseInt(values[0]);
    y2 = parseInt(values[1]);
  }

}
let divisionPoint = dimension/2;
let result = 'N';

// Teste horizontal
if (x1 <= divisionPoint && x2 > divisionPoint ||
    x2 <= divisionPoint && x1 > divisionPoint){
  result = 'S'
}
// Teste vertical
else if (y1 <= divisionPoint && y2 > divisionPoint ||
          y2 <= divisionPoint && y1 > divisionPoint){
  result = 'S'
}

// Caso seja o valor minimo de N = 2, cada figurinha vai ta em um lado
if (divisionPoint === 1 ) result = 'S';
console.log(result);

