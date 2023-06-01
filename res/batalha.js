const fs = require("fs");
// const input = fs.readFileSync('../testes/batalha.txt','utf8');
const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
// Pego o input do NEPS e separo em um array contendo cada linhas

const linhas = input.split('\n');

// Declaro e defino todas as variáveis que irei usar de acordo com os elementos
// do array linhas, faço uma conversão de string para inteiros
const a1 = parseInt(linhas[0]);
const d1 = parseInt(linhas[1]);
const a2 = parseInt(linhas[2]);
const d2 = parseInt(linhas[3]);


// Printo o resultado na tela
console.log(vencedor(a1,d1,a2,d2));


// Assinatura vencedor(ataque do primeiro, defesa doprimeiro,
// 			ataque do segundo, defesa do segundo) -> inteiro
// faço 3 testes para determinar o vencedor exatamente como manda as regras
// do jogo.
function vencedor(a1,d1,a2,d2){
	let result = 0;

	if (a1 !== d2 && a2 !== d1 || a1 === d2 && a2 === d1){
		result = -1;
	}
	else if (a2 !== d1){
		result = 2;
	}
	else if (a1 !== d2){
		result = 1;
	}
	return result;
}

