/* 
Escreva um programa que peça um número e escreva o fatorial dele. 
Exemplo 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
*/
const prompt = require("prompt-sync")();
console.clear();

let num = +prompt("Digite um número: ");
let fatorial = num;

for (let i = 1; i < num; i++) {
        fatorial*= i;
}

console.log(fatorial);