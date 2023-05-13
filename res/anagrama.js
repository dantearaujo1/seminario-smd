// A variável input contém a entrada descrita no exercício
const fs = require("fs");
onst input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const lines = input.split("\n");
const N = parseInt(lines[0]);
const frase1 = lines[1];
const frase2 = lines[2];
let result = 'S';
const letras1 = {};
const letras2 = {};

[...frase1].forEach(letra => {
  if(!letras1[letra]){
    letras1[letra]=1;
  }
  else {
    letras1[letra] += 1;
  }
});
[...frase2].forEach(letra => {
  if(!letras2[letra]){
    letras2[letra]=1;
  }
  else {
    letras2[letra] += 1;
  }
});

for(let i = 96; i < 123; i++){
  if (letras1[String.fromCharCode(i)] !== letras2[String.fromCharCode(i)]){
    result='N'
  }
}

console.log(result)

// console.log(String.fromCharCode(26));
// console.log('z'.charCodeAt(0));
// == Achei um caso que da errado, mas passou no NEPS"
// Preciso testar a quantidade de cada letra
// for (const [key,_] of Object.entries(letras1)) {
//   if (key === ' ' || key === '.' || key === ',') {}
//   else if(letras1[key] !== letras2[key]) {
//     result='N';
//   }
// }
