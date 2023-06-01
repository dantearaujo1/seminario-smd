const fs = require("fs");
// const input = fs.readFileSync('../testes/fase.txt','utf8');
const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
// Separo o input do NEPS por linhas e coloco essas linhas em um array
const linhas = input.split('\n');

// Declaro e defino minhas variáveis por meio desse array linhas e transformo
// de strings para inteiro
const comp = parseInt(linhas[0]);
const vagas = parseInt(linhas[1]);


// Mostro o resultado da minha função no brain no console
console.log(no_brain(comp,vagas));

// Assinatura: no_brain(competidores, vagas disponiveis) -> inteiro
function no_brain(c,v){
	let resultado = 0;
	// Crio um array para armazenar os pontos de cada competidor
  let arr = [];
	// Loop parar determinar os pontos de cada competidor
	// Ele vai do primeiro competidor até o ultimo de um em um
  for (let i = 0; i < c ; i++) {
    let pontos = parseInt(linhas[i+2]);
    arr.push(pontos);
  }

	// Ordenando os pontos de uma maneira simples
	// sem muita performance
  for (let j = 0; j < arr.length ; j++) {
    for (let i = 0; i < arr.length ; i++) {
      if (arr[j] < arr[i]){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }

	// Vou retirando cada valor dos fim do array pontos, pois como está ordenado,
	// eu estarei retirando os maiores. Enquanto eu tiver tirado menos pontos do
	// que a quantidade de vagas eu continuarei retirando pontos, porém assim que
	// a quantidade de vagas for preenchida, eu vou testar se o meu próximo ponto é
	// igual ao anterior, pois assim estariam empatados e aumentar meu resultado
	// em 1, no momento que n forem iguais o loop sai e imprimo o resultado
  let ultimo = 0;
  while(true){
    let p = arr.pop();
    if(resultado<vagas){
      resultado++;
      ultimo = p;
    }
    else{
      if (ultimo === p){
        resultado++;
      }
      else{
        break;
      }
    }
  }

  // console.log(arr);
  return resultado;
}


