/* 
Faça um programa que peça um número e imprima toda a tabuada dele do 1 ao 10.
*/

const prompt = require("prompt-sync")();
console.clear();

let num = +prompt("Digite um número: ");

for (let i = 0; i < 11; i++) {
    console.log(`${num} x ${i} = ${num*i}`);
}