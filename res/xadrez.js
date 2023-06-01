// A variável input contém a entrada descrita no exercício
const fs = require("fs");
// const input = fs.readFileSync(0, "utf8");
const input = fs.readFileSync('../testes/test-xadrez.txt', "utf8");

// Seu código vai aqui
let lines = input.split("\n")
lines.pop();
lines = lines.map((v)=>parseInt(v));

console.log(resolver2(lines[0],lines[1]));


/*
	Assinatura resolver2(ndelinhas,ndecolunas)
	Caso a soma de linhas com colunas seja par
	Quer dizer que o último elemento do tabuleiro
	É branco
*/
function resolver2(linhas,colunas){
	let result = 0;
	if( ( linhas+colunas ) % 2 === 0){
		result = 1;
	}
	return result;
}


// Forma diferente de resolver
function resolver(linhas,colunas){
  let result = 1

  if ((linhas) % 2 === 0) result++
  if ((colunas) % 2 === 0) result++
  result = result % 2

	return result;

}
