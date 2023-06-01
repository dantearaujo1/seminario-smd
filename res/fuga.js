// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('../testes/test-fuga.txt', "utf8");

// Seu código vai aqui
// Pegando o input do NEPS e armazenando em um array separado por espaço.
const linha = input.split(" ")

// Declarando e definindo cada variável que irei usar no programa.
const H =  parseInt(linha[0]);
const P =  parseInt(linha[1]);
const F =  parseInt(linha[2]);
const D =  parseInt(linha[3]);

// Imprimindo o resultado de fuga na tela);
console.log(fuga(H,P,F,D));


// Assinatura: fuga(posição do Helicoptero, posição do Policial,
// 									posição do Fugitivo, direção) -> string
function fuga(H,P,F,D){
	// Determino a distancia entre o helicoptero e o fugitivo no sentido indicado
  let h = (H - F)/D

	// Determino a distancia entre o policial e o fugitivo no sentido indicado
  let p = (P - F)/D

	// Tanto h como p podem ficar negativos pois o fugitivo pode estar na frente
	// deles (H-F) ser menor do que 0. Quando isso acontece eu tenho que somar mais
	// 16 que é o número de elementos para percorrer, assim meu h ou p vão me dizer
	// quantos passos eu to de distancia no sentido pedido do fugitivo
  h += (h<0)?16:0
  p += (p<0)?16:0

	// Assim caso o helicptero tenha a menor distancia o fugitivo foge.
  return (h<p)?'S':'N'
}

