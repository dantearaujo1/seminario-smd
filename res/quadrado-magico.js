const { randomInt } = require("crypto");
const fs = require("fs");
const input = fs.readFileSync('../testes/quadrado-magico.txt','utf8');
// const input = fs.readFileSync(0,'utf8');

const linhas = input.split('\n');
const matriz = linhas.flatMap((value) => {
  let numbers = [value.split(' ').map(v=>parseInt(v))];
  return numbers
})
const n = matriz[0][0];
matriz.shift();
matriz.pop();
console.log(matriz);
no_brain(n,matriz)

function no_brain(n,arr){
  let soma_magica = 0;
  let rows = 0;
  let cols = 0;
  let diagonal = 0;
  let idiagonal = 0;
  for (let j = 0; j < n; j++){
    for (let i = 0; i < n; i++){
      let elem_linha = arr[j][i];
      let elem_coluna = arr[i][j];
      rows += elem_linha;
      cols += elem_coluna;
      if(j===0)soma_magica += elem_linha;
      if(i===j)diagonal += elem_linha
      if(i===n-j-1)idiagonal += elem_linha
    }
    if(rows !== soma_magica || cols !== soma_magica){
      soma_magica = -1;
    }
    rows = 0;
    cols = 0;
  }
  if(diagonal !== soma_magica || idiagonal !== soma_magica){
    soma_magica = -1;
  }
  console.log(soma_magica);
}
