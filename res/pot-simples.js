const fs = require("fs");
const input = fs.readFileSync(0,"utf8");

// Pegando o input do Neps e separando por espaço em uma lista
const valores = input.split(" ");

// Pego o primeiro elemento e armazeno na variável numero
const numero = parseInt(valores[0]);
// Pego o segundo elemento e armazeno na variável numero
const potencia = parseInt(valores[1]);

// Mostro o resultado na tela
console.log(pot(numero,potencia));

// Assinatura pot(número, potencia) -> inteiro
// Retornará a potenciação de n por p com 4 casas decimais
function pot(n,p){
	let result = Math.pow(n,p).toFixed(4);
	return result
}


