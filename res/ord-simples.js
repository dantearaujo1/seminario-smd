const fs = require('fs');
const input = fs.readFileSync(0,'utf8');

const lines = input.split('\n');
const nElementos = parseInt(lines[0]);
const elementos = lines[1].split(' ').map((value)=>parseInt(value));

// Vamos implementar o bubbleSort
// algoritmo de ordenação
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
console.log(...bubbleSort(elementos));

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
