const fs = require("fs");
const input = fs.readFileSync('../testes/arco-e-flecha.txt','utf8');
// const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
// Centro está em (0,0)
const linhas = input.split('\n');
const tiros = parseInt(linhas[0]);
const dists = []
const dp = { };
let resultado = 0;
for (let i = 0; i < tiros; i++){
  let coordenada = linhas[i+1].split(' ').map(value=>parseInt(value));
  distancia(coordenada[0],coordenada[1]);
  let penalidade = 0;
  for (let k = 0; k < i; k++){
    if(dists[i]>= dists[k]){
      penalidade++;
    }
  }
  resultado += penalidade;
}
console.log(resultado)


function distancia(x,y){
  // if(dp[x]){
  //   if(dp[x][y]){
  //     dists.push(dp[x][y]);
  //     return;
  //   }
  // }
  let dist = ((x)*(x)+(y)*(y));
  dists.push(dist);
  // if(!dp[x]) dp[x] = {};
  // dp[x][y] = dist;


}
