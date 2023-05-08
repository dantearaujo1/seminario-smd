const fs = require("fs");
const input = fs.readFileSync('../testes/soma.txt','utf8');
// const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
const linhas = input.split("\n");
const variaveis = linhas[0].split(' ');
const N = parseInt(variaveis[0]);
const K = parseInt(variaveis[1]);
const data = linhas[1].split(' ').map(value=>parseInt(value));

// console.log(data);
no_brain(N,K,data)

function no_brain(n,k,arr){
  let stack = [];
  let sum = 0;
  let resposta = 0;
  let i = 0;

  while (i<n){
    sum += arr[i];
    stack.push(arr[i]);
    if (sum === k){
      resposta++;
      console.log("+1");
    }
    if (sum < k){
    }
    else if (sum > k){
      sum = 0;
      stack = [];
      stack.push(arr[i]);
    }
    console.log(stack);
    i++
  }

  console.log(resposta);

}

// function generate_input(){
//   let n = Math.floor(Math.random()*101);
//   let k = Math.floor(Math.random()*101);
//   let arr = [];
//   for (let i = 0; i < n; i++){
//     arr.push(Math.floor(Math.random()*101));
//   }
//   return {N:n, K:k, Arr:arr}
// }
// let {N,K,Arr} = generate_input();
// console.log(`N:${N},K:${K}`);
// console.log(Arr);
// no_brain(N,K,Arr);
