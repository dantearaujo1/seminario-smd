---
geometry: "left=3cm,right=2cm,top=3cm,bottom=2cm"
header-includes:
    - \usepackage{xcolor}
    - \usepackage{helvet}
    - \usepackage{graphicx}
---
\renewcommand{\rmdefault}{phv}
\renewcommand{\sfdefault}{phv}

\begin{center}
\includegraphics[width=0.50\textwidth]{ufc-vertical.png}
\end{center}


<!-- \fontfamily{}\selectfont -->

# Neps Academy

# Apresentação 13/05/2023 10:00 as 12:30

- Ordem
    Todos os Divisores - https://neps.academy/br/exercise/216 OK
    Buff ou Nerf - https://neps.academy/br/exercise/902 OK
    Overflow - https://neps.academy/br/exercise/225 OK
    Piso da Escola - https://neps.academy/br/exercise/167 OK
    Fatorial Abordagem - https://neps.academy/br/exercise/158 ok
    É primo? - https://neps.academy/br/exercise/280


## Fuga com Helicoptero [\underline{\textcolor{blue}{Link}}](https://neps.academy/br/exercise/5 )
```javascript
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const lines = input.split("\n")
let h = parseInt(lines[0])
let p = parseInt(lines[1])
let f = parseInt(lines[2])
let d = parseInt(lines[3])

console.log(fuga(h,p,f,d))

function fuga(H,P,F,D){
  let h = (H - F)/D
  let p = (P - F)/D
  h += (h<0)?16:0
  p += (p<0)?16:0

  return (h<p)?'S':'N'
}


```

## Xadrez [\underline{\textcolor{blue}{Link}}](https://neps.academy/br/exercise/164 )

```javascript
// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('test-xadrez.txt', "utf8");

// Seu código vai aqui
const lines = input.split("\n")
for ( let i = 0; i < lines.length - 1; i++){
  const values = lines[i].split(" ")

  const l = parseInt(values[0])
  const c = parseInt(values[1])
  let result = 1

  if ((l) % 2 === 0) result++
  if ((c) % 2 === 0) result++
  result = result % 2

  console.log(result)
}

```

## Albúm da Copa [\underline{\textcolor{blue}{Link}}](https://neps.academy/br/exercise/163 )

```javascript
// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('test-copa.txt', "utf8");

// Seu código vai aqui
const lines = input.split("\n")

const totalDeFigurinhas= parseInt(lines[0])
const nFigCompradas = parseInt(lines[1])
let albumFigs = new Map();
// let albumFigs = {};

for (let i = 0; i < nFigCompradas; i++){
  let idFigurinhas = (lines[2+i])
  if(albumFigs.has(idFigurinhas)) {
    albumFigs.set(  idFigurinhas,
                    albumFigs.get(idFigurinhas)+1)
  }
  else albumFigs.set(idFigurinhas,1)
  // if(!albumFigs[idFigurinhas]){ albumFigs[idFigurinhas] = 1}
  // else albumFigs[idFigurinhas]++
  // console.log(Object.keys(albumFigs).length)


}
console.log(totalDeFigurinhas-albumFigs.size);

```

## Barra de Chocolate [\underline{\textcolor{blue}{Link}}](https://neps.academy/br/exercise/163)

```javascript
// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('../testes/test-chocolate.txt', "utf8");

// Seu código vai aqui
const lines = input.split("\n");
let dimension = 0;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

for (let i = 0; i < lines.length-1; i++){
  values = lines[i].split(" ");

  if (i === 0) dimension = parseInt(values[0]);
  else if (i === 1) {
    x1 = parseInt(values[0]);
    y1 = parseInt(values[1]);
  }
  else {
    x2 = parseInt(values[0]);
    y2 = parseInt(values[1]);
  }

}
let divisionPoint = dimension/2;
let result = 'N';

// Teste horizontal
if (x1 <= divisionPoint && x2 > divisionPoint ||
    x2 <= divisionPoint && x1 > divisionPoint){
  result = 'S'
}
// Teste vertical
else if (y1 <= divisionPoint && y2 > divisionPoint ||
          y2 <= divisionPoint && y1 > divisionPoint){
  result = 'S'
}

// Caso seja o valor minimo de N = 2, cada figurinha vai ta em um lado
if (divisionPoint === 1 ) result = 'S';
console.log(result);

```


