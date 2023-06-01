const fs = require("fs");
// const input = fs.readFileSync('../testes/hora-da-corrida.txt','utf8');
const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
// Pegando o input do NEPS, separando por espaço e colocando em um array
// sendo que eu ja passei cada valor pro array para inteiro usando
// .map(value=>parseInt(value)) que é uma função que transforma os elementos de
// um array
const valores = input.split(' ').map(value=>parseInt(value));
// Conta o total de placas visualizadas = numero de placas de uma volta * n
// de voltas
const total_de_placas = valores[0] * valores[1];

// Mostra na tela o resultado de resolveEspacamentos
console.log(resolveEspacamentos(total_de_placas));


// Assinatura resolveEspacamento(número de placas totais vistas) -> array
// Calcula a placa que vai estar em cada 10% da pista
function resolveEspacamentos(placas){
	const espacamentos = [];
	for (let i = 1; i < 10; i++){
		// Coloco em cada posição do array espaçamentos o valor do total de placas
		// multiplicado pelo 10%, 20%, 30%..... assim sei cada placa em
		// cada porcentagem
	  espacamentos[i-1] = Math.ceil(placas*(i/10));
	}

	return [...espacamentos];
}
