const fs = require("fs");
const input = fs.readFileSync('../testes/hora-da-corrida.txt','utf8');
// const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
const valores = input.split(' ').map(value=>parseInt(value));
const espacamentos = [];
const total_de_placas = valores[0] * valores[1];

for (let i = 1; i < 10; i++){
  espacamentos[i-1] = Math.ceil(total_de_placas*(i/10));
}
console.log(...espacamentos);
