// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('../testes/test-chocolate.txt', "utf8");

// Seu código vai aqui
// Separando o input dado em um array chamado lines, esse input vai ser dividido
// a cada nova linha
const lines = input.split("\n");
let dimension = 0;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

// Vou percorrer cada linha e settar os elementos x1,y1,x2 e y2
// Eu poderia ter feito na mão, mas fiz assim porque eu quis
// no fim, assim deu mais trabalho.
for (let i = 0; i < lines.length - 1; i++) {
	values = lines[i].split(" ");

	if (i === 0) dimension = parseInt(values[0]);
	else if (i === 1) {
		x1 = parseInt(values[0]);
		y1 = parseInt(values[1]);
	}
	else {
		x2 = parseInt(values[0]);
		y2 = parseInt(values[1]);
	}
}

// Printando o resultado no console
console.log(ehDivisivel(dimension, x1, y1, x2, y2));


// Assinatura ehDivisivel(tamanho da barra em colunas e linhas,
// 				ponto x1, ponto y1,ponto x2, ponto y2)
function ehDivisivel(dimension, x1, y1, x2, y2) {

	// Divido a barra pela metade para saber em qual linha e coluna devo
	// Fazer os testes
	let divisionPoint = dimension / 2;
	let result = 'N';

	// Teste horizontal
	// Testo quem se é possível separar em cada parte horizontalmente
	if (x1 <= divisionPoint && x2 > divisionPoint || x2 <= divisionPoint && x1 > divisionPoint) {
		result = 'S'
	}
	// Teste vertical
	// Testo quem se é possível separar em cada parte verticalmente
	else if (y1 <= divisionPoint && y2 > divisionPoint || y2 <= divisionPoint && y1 > divisionPoint) {
		result = 'S'
	}

	// Caso seja o valor minimo de N = 2, cada figurinha vai ta em um lado
	if (divisionPoint === 1) result = 'S';

	return result;
}


