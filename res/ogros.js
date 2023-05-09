const fs = require("fs");
const input = fs.readFileSync('../testes/ogros.txt','utf8');
// const input = fs.readFileSync(0,'utf8');
const linhas = input.split('\n');
const linha1 = linhas[0].split(' ');
const faixas = linhas[1].split(' ').map(value=>parseInt(value));
const premiacao = linhas[2].split(' ').map(value=>parseInt(value));
const fogro = linhas[3].split(' ').map(value=>parseInt(value));
const n = parseInt(linha1[0]);
const m = parseInt(linha1[1]);
const saved = {

}
// Seu código vai aqui


for(let i = 0; i < m; i++){
  qualPremio(fogro[i],i);
}
console.log(...fogro);

function qualPremio(ogro,id){
  // console.log(`Ogro:${id},Forca:${fogro[ id ]}`)
  // if(hasIt(ogro)){
  //   fogro[id]=giveIt(ogro);
  //   console.log("Has it");
  //   return
  // }
  for(let i=1; i < n; i++){
    if(ogro < faixas[i-1] ){
      fogro[id]=premiacao[i-1];
      saved[ogro]=premiacao[i-1];
      break;
    }
    else if (ogro >= faixas[i-1] && ogro < faixas[i]){
      fogro[id]=premiacao[i];
      saved[ogro]=premiacao[i];
      break;
    }
    else if (ogro >= faixas[i] && ogro < faixas[i+1]){
      fogro[id]=premiacao[i+1];
      saved[ogro]=premiacao[i+1];
      break;
    }
    else {
        fogro[id]=premiacao[i];
        saved[ogro]=premiacao[i];
    }


  }
}
// function hasIt(ogro){
//   if(saved[ogro]) return true;
//   return false;
// }
// function giveIt(ogro){
//   return saved[ogro];
// }
