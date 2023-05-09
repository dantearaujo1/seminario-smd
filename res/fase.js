const fs = require("fs");
const input = fs.readFileSync('../testes/fase.txt','utf8');
// const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
const linhas = input.split('\n');
const comp = parseInt(linhas[0]);
const vagas = parseInt(linhas[1]);
let resultado = 0;

function no_brain(c,v){
  let arr = [];
  for (let i = 0; i < c ; i++) {
    let pontos = parseInt(linhas[i+2]);
    arr.push(pontos);
  }
  for (let j = 0; j < arr.length ; j++) {
    for (let i = 0; i < arr.length ; i++) {
      if (arr[j] < arr[i]){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  // console.log(arr);
  let ultimo = 0;
  while(true){
    let p = arr.pop();
    if(resultado<vagas){
      resultado++;
      ultimo = p;
    }
    else{
      if (ultimo === p){
        resultado++;
      }
      else{
        break;
      }
    }
  }

  // console.log(arr);
  console.log(resultado);
}

no_brain(comp,vagas)

