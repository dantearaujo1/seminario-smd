const fs = require("fs");
// const input = fs.readFileSync('../testes/arco-e-flecha.txt', 'utf8');
const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
// Pegando o input dado pelo NEPS
const linhas = input.split('\n');
// Pegando a quantidade de tiros que é a primeira linha do meu array
const tiros = parseInt(linhas[0]);

// Mostrando o resultado de qualPenalidade no console.
console.log(qualPenalidade(tiros,linhas));


// Assinatura qualPenalidade(número de tiros, coordenada do tiro)
// Criei um array para armazenar as distancias da coordenada que eu recebo
// até o centro do alvo, em seguida crio uma variável penalidade para cada tiro
// começo um novo for loop para ir do meu primeiro tiro até o tiro atual - 1 e
// comparo se meu tiro atual está mais distante que cada um dos anteriores, caso
// seja verdadeiro, eu aumento a penalidade e no fim do loop eu aumento o resulta
// do no valor da penalidade

function qualPenalidade(ntiros, coordenadas) {
	const dists = []
	let resultado = 0;
	// const dp = {};

	for (let i = 0; i < ntiros; i++) {
		let coordenada = coordenadas[i + 1].split(' ').map(value => parseInt(value));
		dists.push(distancia(coordenada[0], coordenada[1]));
		let penalidade = 0;
		for (let k = 0; k < i; k++) {
			if (dists[i] >= dists[k]) {
				penalidade++;
			}
		}
		resultado += penalidade;
	}

	return resultado;
}

// Calcula a distância usando os pontos x e y até o centro que é 0,0
function distancia(x, y) {
	// if(dp[x]){
	//   if(dp[x][y]){
	//     dists.push(dp[x][y]);
	//     return;
	//   }
	// }
	let dist = (x * x + y * y);
	return dist;
	// if(!dp[x]) dp[x] = {};
	// dp[x][y] = dist;
}
