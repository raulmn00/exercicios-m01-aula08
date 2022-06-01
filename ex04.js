/* 
Faça um programa que carregue uma lista com os modelos de cinco carros. 
Carregue uma outra lista com o consumo desses carros, isto é, 
quantos quilômetros cada um desses carros faz com um litro de combustível. 
Calcule e mostre:
O modelo do carro mais econômico;
Quantos litros de combustível cada um dos carros cadastrados consome para percorrer 
uma distância de 1000 quilômetros e quanto isto custará, 
considerando um que a gasolina custe R$ 5,50 o litro.
*/

let listaCarros = ["Volks", "Chevrolet", "BMW", "Ferrari", "Renault"];
let consumoCarros = [10, 15, 9, 35, 25];

let indexMaisEconomico = 0;
let carroMaisEconomico = "";

for (let consumos in consumoCarros) {
  if (consumoCarros[consumos] > consumoCarros[consumos - 1]) {
    indexMaisEconomico = consumos;
  }
}

carroMaisEconomico = listaCarros[indexMaisEconomico];

console.log(`O modelo de carro mais econômico é: ${carroMaisEconomico}`);

for (let i = 0; i < listaCarros.length; i++) {
  console.log(
    `O carro ${listaCarros[i]} consome R$ ${(
      consumoCarros[i] *
      5.5 *
      1000
    ).toFixed(2)} reais para viajar 1000km.`
  );
}
