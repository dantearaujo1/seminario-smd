const fs = require("fs");
// const input = fs.readFileSync('../testes/pokemao.txt','utf8');
const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
const linhas = input.split('\n');
const disp = parseInt(linhas[0]);
const pokemons = []
for (let i = 0; i < 3; i++){
  pokemons.push(parseInt(linhas[i+1]));
}
no_brain(disp,pokemons);

function no_brain(disp, pokemons){

  let sum = disp;
  let evo = 0;
  let maxEvo = 0;

  for (let i = 0; i < pokemons.length; i++){
    let stack = [];
    sum = disp;
    for (let j = i+1; j < pokemons.length+1; j++){
      sum -= pokemons[j-1];
      if (sum<0){
        sum += pokemons[j-1];
        continue;
      }
      stack.push(pokemons[j-1]);
    }
    evo = stack.length;
    if (evo > maxEvo){
      maxEvo = evo;
    }
  }
  console.log(maxEvo)

}

// Estratégia =============================
// for (let i = 0; i < 1000; i++) {
//   let data_set = generate_input();
//   console.log(data_set)
//   no_brain(data_set.disp,data_set.pok);
// }
// function generate_input(){
//   return {disp:Math.floor(Math.random()*1001),pok:[Math.floor(Math.random()*1001),Math.floor(Math.random()*1001),Math.floor(Math.random()*1001)]}
// }
// ======================================
