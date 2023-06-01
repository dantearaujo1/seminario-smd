const fs = require("fs");
// const input = fs.readFileSync('../testes/lista-palindroma.txt','utf8');
const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
// Separando o input por linhas e colocando em um array
const lines = input.split('\n');

// Pegando o primeiro elemento do array, transformando pra inteiro e armazenando
// em nElementos
let nElementos = parseInt(lines[0]);
// Pegando o segundo elemento do array e separando por espaços ja transformando
// para inteiros e armazenando em elementos (um array)
const elementos = lines[1].split(' ').map((value)=>parseInt(value));

// Mostra no console o resultado
console.log(resolverPalindromo(nElementos,elementos))

// Assinatura: resolverPalindrome(numéro de elementos, array de elementos)
// Crio dois indices um que começara na ponta esquerda i e outro na ponta direita
// j e um contador para contar o número de contrações
// Como a questão n pede para dizer se é palindromo, pode-se presumir que os
// inputs serão todos possíveis de serem transformados em palindromos através das
// contrações.
function resolverPalindromo(n,arr){

	let i = 0;
	let j = n-1;
	let contador = 0;
	// Devo usar o while ja que eu vou usar os dois indices
	// enquanto os indices não se ultrapassarem eu vou testar qual elemento é maior
	// em cada indice e vou somar o menor com o próximo elemento da ordem natural
	// do exercício, i.e: no indice da esquerda se i = 0 o próximo sera i = 1, no
	// indice da direito se j = n-1 o próximo sera j = n-2
	// Após somar nessa ordem quem for o menor eu aumentarei a contração
	// Caso os dois sejam iguais, eu só vou pros meus próximo elementos a serem
	// comparados no fim eu retorno a quantidade de contrações que teve para a lista
	// ficar palindroma
	while (i < j){
	  let a = arr[i];
	  let b = arr[j];
	  if (a > b){
	    arr[j-1] += b;
	    j--;
	    contador++;
	  }
	  else if (a < b){

	    arr[i+1] += a;
	    i++;
	    contador++;
	  }
	  else{
	    i++;
	    j--;
	  }
	}
	return contador;
}
