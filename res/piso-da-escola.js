const fs = require("fs");
const input = fs.readFileSync(0,'utf8');
// const input = fs.readFileSync('../testes/piso-da-escola.txt','utf8');

// Seu código vai aqui
// H*L + (H-1)*(L-1) = T1
// (H-1)*2 + 2*(L-1) = T2
// 4 = T3

// Pegando o input, separando por linhas e ja transformando em inteiro cada
// cada elemento
const valores = input.split('\n').map(value=>parseInt(value))

// Pego a altura e boto em h
const h = valores[0];
// Pego a largura e boto em l
const l = valores[1];

console.log(...calcularPecas(h,l));

// Faço o calculo que eu achei olhando para a figura
// existem altura*largura + (altura-1)*(largura-1) de peças t1
// e existem (altura-1)*2 + 2*(largura - 1) peças t2
function calcularPecas(altura,largura){
	const t1 = altura*largura + (altura-1)*(largura-1)
	const t2 = (altura-1)*2+ 2*(largura-1)
	return [t1,t2];
}
