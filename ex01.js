const prompt = require("prompt-sync")();
console.clear();

/* 
Peça ao usuário uma quantidade de linhas e e outra de colunas, 
e imprima essas informações na forma de uma tabela como no exemplo de 3 linhas e 4 colunas:
[ 0, 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 2, 3, 4, 5 ]

*/

let linhas = +prompt("Digite a quantidade de linhas: ");
let colunas = +prompt("Digite a quantidade de colunas: ");

let arrayLinhas = [];

for (let i = 0; i < linhas; i++) {
  let arrayColunas = [];
  for (let j = 0; j < colunas; j++) {
    arrayColunas.push(j + i);
  }
  arrayLinhas.push(arrayColunas);
}

for(let linha of arrayLinhas){
  console.log(linha);
}
