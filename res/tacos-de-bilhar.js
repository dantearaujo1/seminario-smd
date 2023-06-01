const fs = require('fs');
const input = fs.readFileSync("../testes/tacos-de-bilhar.txt",'utf8');

// Assumir estoque vazio

// PEgando o input do NEPS separando por linhas e armazenando em um vetor
const linhas = input.split('\n');
// Pegando o número de consultas, transformando de string pra inteiro
const nConsultas = parseInt(linhas[0]);
// Separando a string por espaços e transformando cada elemento em inteiro
const comprimentos = linhas[1].split(' ').map((compString) => {return parseInt(compString);});

console.log(resolverTacos(nConsultas,comprimentos));

// Assinatura resolverTacos(n de comprimento, array de comprimentos) -> inteiro
// Crio um dicionário para armazenar cada taco criado,
// se n tem taco eu aumento o contador em 2 e adiciono
// 1 no dicionário, pois crio 2 e vendo 1
// caso contrário eu só subtraio 1 do dicionário, pois
// vendi o que ja tinha
function resolverTacos(consultas,comprimentos){

	const fabricados = new Map();
	let contador = 0;
	for (let i = 0; i < consultas; i++){
		const comprimentoDesejado = comprimentos[i];

		if (!fabricados[comprimentoDesejado]) {
		contador += 2;
		fabricados[comprimentoDesejado] = 1;
		}
		else{
		fabricados[comprimentoDesejado] -= 1;
		}
	}

	return contador;

}
