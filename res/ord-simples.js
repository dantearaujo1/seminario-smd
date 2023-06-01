const fs = require('fs');
const input = fs.readFileSync(0,'utf8');

// Pegando o input do NEPS e separo por linhas
const lines = input.split('\n');
// Pego a primeira linha e transformo pra inteiro para armazenar em nElementos
const nElementos = parseInt(lines[0]);
// Pego a segunda linha e separado por espaços cada elemento transformando-o em
// inteiro
const elementos = lines[1].split(' ').map((value)=>parseInt(value));

// Mostra no console o resultado
console.log(...bubbleSort(elementos));

// Vamos implementar o bubbleSort
// algoritmo de ordenação
// Aconselho ver vídeos no youtube sobre
// ou ver alguma página da internet, pois é um
// algorítimo conhecido e eu provavelmente n explicaria
// melhor.
function bubbleSort(arr) {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Realiza a troca de elementos
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // Se não houve trocas nesta iteração, o array já está ordenado
    if (!swapped) {
      break;
    }
  }
  return arr;
}

// for (let i = 0; i < nElementos-1; i++) {
//   for (let j = i+1; j < nElementos; j++) {
//     let fixo = elementos[i];
//     let movel = elementos[j];
//
//     if ( fixo > movel ){
//       const temp = elementos[i];
//       elementos[i] = elementos[j];
//       elementos[j] = temp;
//     }
//
//   }
//
// }
