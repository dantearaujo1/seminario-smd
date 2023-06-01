const fs = require('fs');
// const input = fs.readFileSync('../testes/botas-trocadas.txt','utf8');
const input = fs.readFileSync(0,'utf8');

// Pego o input do NEPS e separo por linhas
const linhas = input.split('\n');
// Coloco a quantidade de botas em uma variável quantidade
const quantidade = parseInt(linhas[0]);

// Printo na tela o retorno de resolver Botas
console.log(resolverBotas(quantidade));


// Assinatura resolverBotas(quantidade de botas) -> inteiro
// Crio um objeto para armazenar as botas
// Crio uma variável para armazenar meu contador de pares iguais
function resolverBotas(qnt){
	const botas = {};
	let contador = 0;
	// Percorro cada bota do meu inpt
	for (let i = 0; i < qnt;i++){
	  const bota  = linhas[i+1].split(' ');
		// bota 0 é meu número
	  const number = parseInt(bota[0]);
		// pair é o pé direito ou pé esquerdo
	  const pair = bota[1];
		// adiciono no número da bota um de seus pares caso n exista
	  if(!botas[number]) botas[number] = [pair];
	  else {
			// Caso ja exista um par la dentro eu testo se é o mesmo par e adiciono
			// caso seja.
	    if (botas[number][0] === bota[1] || botas[number].length === 0) {
	      botas[number].push(bota[1]);
	    }
			// Caso não seja, eu dou um pop e aumento meu número de pares contados
	    else {
	      botas[number].pop();
	      contador++;
	    }
	  }
	}

	// Retorno do contador
	return contador;
}

