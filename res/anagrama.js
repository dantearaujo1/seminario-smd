// A variável input contém a entrada descrita no exercício
const fs = require("fs");
// const input = fs.readFileSync(0, "utf8");
const input = fs.readFileSync("../testes/anagrama.txt", "utf8");

// Seu código vai aqui
// Aqui eu pego o input dado pelo NEPS
// e separo ele por linhas
const lines = input.split("\n");
// Pego o primeiro número e transformo em inteiro
const N = parseInt(lines[0]);

// Pego a primeira frase
const frase1 = lines[1];
// Pego a segunda frase
const frase2 = lines[2];


// Mostro meu resultado na tela
console.log(determinarAnagrama(frase1,frase2));


/*
	Assinatura: determinarAnagrama(frase,frasediferente)
	Nessa função irei colocar cada letra em um objeto
	caso a letra n exista no objeto irei dizer que o valor é
	1, caso ela exista, eu irei incrementar em 1 o valor dela.
	Irei acessar cada letra no objeto, utilizando como chave
	seu próprio valor. No fim eu acesso todas as letras de cada
	frase e testo se tem alguma que não contém na outra.
	Caso tenha diferença, minha palavra n é anagrama.
*/
function determinarAnagrama(frase01, frase02){
	let result = 'S';
	const letras1 = {};
	const letras2 = {};

	// Spread operator para colocar cada letra como um elemento em um array
	// Seguido de um forEach para realizar uma operação com cada letra dentro
	// do Array. A operação é justamente adicionar a letra no objeto.
	[...frase01].forEach(letra => {
		if(!letras1[letra]){
			letras1[letra]=1;
		}
		else {
			letras1[letra] += 1;
		}
	});

	// Spread operator para colocar cada letra como um elemento em um array
	// Seguido de um forEach para realizar uma operação com cada letra dentro
	// do Array. A operação é justamente adicionar a letra no objeto.
	[...frase2].forEach(letra => {
		if(!letras2[letra]){
			letras2[letra]=1;
		}
		else {
			letras2[letra] += 1;
		}
	});

	// Testo todas as letras do alfabeto, transformo o valor inteiro em
	// character usando String.fromCharCode() e meu loop vai de 96 a 123
	// pois é esse o range de valores da tabela ASCII
	for(let i = 96; i < 123; i++){
		if (letras1[String.fromCharCode(i)] !== letras2[String.fromCharCode(i)]){
			result='N'
		}
	}

	return result;
}
