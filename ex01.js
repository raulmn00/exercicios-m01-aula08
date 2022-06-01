const prompt = require("prompt-sync")();
console.clear();

let linhas = +prompt("Digite a quantidade de linhas: ");
let colunas = +prompt("Digite a quantidade de colunas: ");

let arrayNovo = [];

for (let i = 0; i < linhas; i++) {
  arrayNovo[i] = [];
  for (let j = 0; j < colunas; j++) {
    arrayNovo[i][j] = "";
  }
}

let element = 0;

for (let l = 0; l < linhas; l++) {
  for (let c = 0; c < colunas; c++) {
    arrayNovo[l][c] = element;
    element++;
  }
}

let valoresArray = '';
for (let L = 0; L < linhas; L++) {
    for (let C = 0; C < colunas; C++) {
        if(C < colunas - 1){
            valoresArray += arrayNovo[L][C] + "\t";
        }else {
            valoresArray += arrayNovo[L][C] + "\n";
        }
        
    }
    
}

console.log(valoresArray);
