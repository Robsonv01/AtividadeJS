/* let a = 10;
let b = 20;
if (a > b) {
  console.log("sao iguais");
} else {
  console.log("nao sao iguais");
}
 */
// DESAFIO    Faça um programa para calcular o valor de uma viagem
/* VocÊ terá 5 variaveis. Sendo elas:
1 - Preço do etanol;
2 - Preço do gasolina;
3 -  O tipo de combustivel que está no seu carro
4 - Gasto medio de combustivel do carro por km 
5 - distancia em km da viagem ;
Imprima no console o valor que será gasto para realizar esta */
const prompt = require("prompt-sync")();
/* let precoEtanol = 4.5;
let precoGasolina = 5.8;
let tipoCombustivel = "gasolina"; // "etanol" ou "gasolina"
let consumoPorKm = 10; // km por litro
let distancia = 200; // km

// Cálculo
let litrosNecessarios = distancia / consumoPorKm;
let custo;

if (tipoCombustivel === "etanol") {
  custo = litrosNecessarios * precoEtanol;
} else {
  custo = litrosNecessarios * precoGasolina;
}

// Resultado
console.log("Valor da viagem: R$ " + custo.toFixed(2)); 
 */
/* let nota = Number(prompt("Qual e a primeira nota?"));
let nota2 = Number(prompt("Qual a segunda?"));
let nota3 = Number(prompt("Qual a terceira nota?"));

media = (nota + nota2 + nota3) / 3;

console.log(" A media total é " + media.toFixed(2)); */

let peso = Number(prompt("Qual o seu peso?"));
let altura = Number(prompt("Qual a sua altura?"));

let imc = peso / (altura * altura);

console.log("Seu imc é" + imc.toFixed(2));

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
  console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade Grave");
}
//3
let preco = Number(prompt("Digite o preço do produto:"));
let codigo = Number(
  prompt(
    "Forma de pagamento:\n1 - Débito\n2 - Dinheiro ou PIX\n3 - 2x\n4 - Acima de 2x \n"
  )
);
let total = preco;

if (codigo == 1) total = preco * 0.9;
if (codigo == 2) total = preco * 0.85;
if (codigo == 3) total = preco;
if (codigo == 4) total = preco * 1.1;

console.log("Total a pagar: R$ " + total);
