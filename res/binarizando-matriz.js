const fs = require("fs");
const input = fs.readFileSync('../testes/binarizando-matriz.txt','utf8');
// const input = fs.readFileSync(0,'utf8');

const linhas = input.split('\n');
const dadosMatriz = linhas[0].split(' ');
const rows = parseInt(dadosMatriz[0]);
const cols = parseInt(dadosMatriz[1]);

// Preciso descobrir quantos elementos livres tem
// elemento livre está a j+1 e i+1 do último 1
let posUltimo = {
  x:0,
  y:0,
  tx:cols,
  ty:rows,
  dx:0,
  dy:0,

}
let dots = 0;
let zeros = 0;
for (let j = 0; j < rows; j++){
  let elementos = linhas[j+1];
  for (let i = 0; i < cols; i++){
    let elemento = elementos[i];
    if (elemento === '1'){
      posUltimo.x = i;
      posUltimo.y = j;
    }
    else if (elemento === '.'){
      dots++;
      posUltimo.dx = i;
      posUltimo.dy = j;
    }
    else{
      zeros++;
    }
  }
}

for (let j = 0; j <= posUltimo.y; j++){
  for (let i = 0; i <= posUltimo.x; i++){
    let elemento = linhas[j+1][i];
    if (elemento === '.'){
        dots--;
    }
  }
}

if(dots<0){
  dots = 0;
}

// Seu código vai aqui
console.log((Math.pow(2,dots))%(10e+9+7));
