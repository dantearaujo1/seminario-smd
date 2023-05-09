const fs = require("fs");
const input = fs.readFileSync('../testes/recibo-de-compra.txt','utf8');
// const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
const valores = input.split(' ').map(value=>parseInt(value));
var R = valores[0];
var k = valores[1];
let resp = 0;

// no_brain(R,k);
laco(1,1,R);
console.log(resp);

function laco(nivel, minimo, maximo){
  if(nivel===k){
    if(minimo<=maximo) resp++;
  }
  else{
    for (let i = minimo; i <= maximo; i++){
      laco(nivel+1,i+1,maximo-i)
    }
  }
}

// Funciona só pro caso de 3
// Preciso fazer isso ser recursivo
// Nivel = variaveis para achar do conjunto
// minimo = o minimo valor de cada variavel
// maximo = até onde o valor pode chegar em cada variavel
// Funcao laco
function no_brain(r,c){
  for(let i = 1; i <= r; i++)
  for(let j = i+1; j <= r-i; j++)
  for(let k = j+1; k <= r-i-j; k++){
        if(i+j+k === r){
          resp++;
        }
      }
}
