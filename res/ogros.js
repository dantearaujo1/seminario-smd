const fs = require("fs");
const input = fs.readFileSync('../testes/ogros.txt','utf8');
// const input = fs.readFileSync(0,'utf8');

// Seu código vai aqui
// Pego o input do NEPS e separo por linhas e coloco num array chamado linhas
const linhas = input.split('\n');

// Declaro e defino cada variável que eu vou usar no meu programa
// separando as strings por espaços e transformando os números para inteiro
const linha1 = linhas[0].split(' ');
const n = parseInt(linha1[0]); // Número de faixas
const m = parseInt(linha1[1]); // Número de premiações
const faixas = linhas[1].split(' ').map(value=>parseInt(value));
const premiacao = linhas[2].split(' ').map(value=>parseInt(value));
const fogro = linhas[3].split(' ').map(value=>parseInt(value));


// Assinatura: resolverPremiacao() -> array
// Vai chamar qualPremio para todos os ogros
// vai copiar o array fogro em resultado após
// realizar as operações de qualPremio
function resolverPremicacao(){
	let resultado = [];
	for(let i = 0; i < m; i++){
		qualPremio(fogro[i],i);
	}
	resultado = [...fogro];
	return resultado;

}
console.log(resolverPremicacao());

// Assinatura: qualPremio(força do Ogro, indice do ogro)
// Essa função irá trocar a força do ogro pelo premiação da respectiva força
function qualPremio(ogro,id){
  for(let i=1; i < n; i++){
    if(ogro < faixas[i-1] ){
      fogro[id]=premiacao[i-1];
      break;
    }
    else if (ogro >= faixas[i-1] && ogro < faixas[i]){
      fogro[id]=premiacao[i];
      break;
    }
    else if (ogro >= faixas[i] && ogro < faixas[i+1]){
      fogro[id]=premiacao[i+1];
      break;
    }
    else {
        fogro[id]=premiacao[i];
    }


  }
}
