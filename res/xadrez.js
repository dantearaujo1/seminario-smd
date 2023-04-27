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

