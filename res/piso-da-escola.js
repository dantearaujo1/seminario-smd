const fs = require("fs");
// const input = fs.readFileSync('../testes/piso-da-escola.txt','utf8');
const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
// H*L + (H-1)*(L-1) = T1
// (H-1)*2 + 2*(L-1) = T2
// 4 = T3

const valores = input.split('\n').map(value=>parseInt(value))
const h = valores[0];
const l = valores[1];
const t1 = h*l + (h-1)*(l-1)
const t2 = (h-1)*2+ 2*(l-1)
console.log(t1);
console.log(t2);
