const fs = require('fs');
const input = fs.readFileSync('../testes/mergesort.txt','utf8');
// const input = fs.readFileSync(0,'utf8');

const linhas = input.split('\n');
const qnt = parseInt(linhas[0]);
const numeros = linhas[1].split(' ').map((value)=>parseInt(value));

function merge(arr, e, m, d){
  // Contando quantos elementos tem em
  // cada lado
  let n1 = m - e + 1;
  let n2 = d - m;

  // Criando arrays locais para armazenar
  // o lado esquerdo e o direito
  let Esquerda = new Array(n1);
  let Direita = new Array(n2);

  // Copiando no vetor Esquerdo
  for (let i = 0; i < n1; i++){
    Esquerda[i] = arr[e + i];
  }
  // Copiando no vetor Direito
  for (let j = 0; j < n2; j++){
    Direita[j] = arr[m + 1 + j];
  }


  let i = 0; // Indice do Array Local Esquerda
  let j = 0; // Indice do Array Local Direita
  let k = e; // Indice Global Inicial

  // Resolvendo os elementos do Global
  // Até que o primeiro vetor local chegue
  // ao fim
  while (i < n1 && j < n2){
    if (Esquerda[i] <= Direita[j]){
      // Mudar para Direita J faz ser decrescente
      arr[k] = Direita[j];
      j++;
    }
    else{
      // Mudar para Esquerda I faz ser decrescente
      arr[k] = Esquerda[i];
      i++;
    }
    k++;
  }

  // Se o primeiro while
  // chegou ao fim, pode ser que
  // tenha algo aqui no esquerdo ainda
  while(i<n1){
    arr[k] = Esquerda[i];
    i++;
    k++;
  }
  // Assim como pode ter algo
  // no direito, mas não vai poder
  // ter os dois. Obrigatoriamente
  // um dos dois vão ter sido com
  // pletamente percorrido no primeiro
  // while
  while(j<n2){
    arr[k] = Direita[j];
    j++;
    k++;
  }
}

function mergeSort(arr, e, d){
  // Caso base para sair da recursão
  // Se meu indice esquerdo, for maior
  // ou igual ao direito, é pq temos
  // somente 1 elemento no vetor
  if (e >= d){
    return;
  }

  // Calculo o meio e recursivamente
  // me chamo tanto para minha metade
  // esquerda, quanto para a direita
  let m = e + ((d - e)/2|0);
  mergeSort(arr,e,m);
  mergeSort(arr,m+1,d);

  // Por fim, vou juntar na ordem correta
  merge(arr,e,m,d);
}

mergeSort(numeros,0,numeros.length-1);
console.log(...numeros)
