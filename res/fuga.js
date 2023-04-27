// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync('test.txt', "utf8");

// Seu código vai aqui
const lines = input.split("\n")
for ( let i = 0; i < lines.length - 1; i++){
  const values = lines[i].split(" ")

  const h = parseInt(values[0])
  const p = parseInt(values[1])
  const f = parseInt(values[2])
  const d = parseInt(values[3])
  let result = 'N'

  if ( d > 0 ) {
    // Anti-Horário
    if ( h < f && h < p ){
      if ( f > p ) result = 'S'
    }
    else if ( h > f && h > p ){
      if ( f > p ) result = 'S'
    }
    else if ( h > f && h < p ){
      result = 'S'
    }
  }
  else {
    // Horário
    if ( h < f && h < p ){
      if (f < p ) result = 'S'
    }
    else if ( h > f  && h > p ){
      if ( f < p ) result = 'S'
    }
    else if ( h < f && h > p ){
      result = 'S'
    }
  }

  console.log(h,p,f,d,result,fuga(h,p,f,d))
  //console.log(result)
}

function fuga(H,P,F,D){
  let h = (H - F)/D
  let p = (P - F)/D
  h += (h<0)?16:0
  p += (p<0)?16:0

  return (h<p)?'S':'N'
}
