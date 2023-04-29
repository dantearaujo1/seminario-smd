const fs = require("fs");
const input = fs.readFileSync(0,"utf8");

const valores = input.split(" ");
const numero = valores[0];
const potencia = valores[1];
let result = Math.pow(numero,potencia).toFixed(4);
console.log(result);


