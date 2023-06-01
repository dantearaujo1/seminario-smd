// A variável input contém a entrada descrita no exercício
const fs = require("fs");
// const input = fs.readFileSync("../testes/buff-ou-nerf.txt", "utf8");
// const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
// Pego meu input do NEPS, armazeno ele em um array separando cada valor por
// espaço
const lines = input.split(" ");

// Declaro e defino as variáveis utilizadas por meio dfe cada elemento do array.
let N = parseInt(lines[0]);
let D = parseInt(lines[1]);
let M = parseInt(lines[2]);
let P = parseInt(lines[3]);

// Mostro no console o retorno de resolver que é o resultado final
console.log(resolver(N,D,M,P));

// Assinatura: resolver(poder1,multiplicador1,poder2,multiplicador2) -> string
// Inicializo meu resultado com nerf e testo qual ataque é maior
function resolver(n,d,m,p){

	let resultado = "NERF";

	if (N*D < M*P) resultado = "BUFF"

	return resultado;
}


