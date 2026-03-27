/* let notas = [];
notas.push(10);
notas.push(9);
notas.push(8);
notas.push(7);

let soma = notas[1] + notas[3];
console.log(soma);
 */

let notas = [];
notas.push(5);
notas.push(10);
let soma = 0;
for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
let media = soma / notas.length;
console.log("A media é: " + media);
/////////////////////////////////////////////////////////////////
let frutas = ["maça", "banana", "abacaxi"]; //string
let idade = [19, 50, 14, 25]; // int
let presenca = [true, false, false, true]; //bool
let pessoas = [
  { nome: "Eduardo", idade: 20 },
  { nome: "Felipe", idade: 20 },
  { nome: "ivne", idade: 20 },
  { nome: "Pietro", idade: 20 },
];
console.log(pessoas[2]); //puxa a ivne
frutas.push("Ameixa"); //adiciona elemento na ultima posiçao do vetor
console.log(frutas);
frutas.pop(); //remove ultimo elemento do vetor
frutas.shift(); //remove primeiro elemento do veotr
frutas.unshift("banana"); //adiciona elemento no primeiro indice do vetor

//
let pessoa = {
  nome: "joao",
  idade: 19,
  carro: "HONDA - CIVIC",
};

for (let chave in pessoa) {
  console.log(chave);
  console.log(pessoa[chave]);
}
//exibir soma dos valores dentro do vetor

///1) Crie um programa que dado um número imprima a sua tabuada.
/* 


2) Crie um programa que seja capaz de percorrer uma lista de
 números e imprima cada número Par encontrado.

3) Faça um programa que dado uma lista de nomes imprima os
 nomes que começem com a letra "V".

4) Faça um programa que preencha uma lista com todos os números
 pares contidos no intervalo de 10 a 50;

5) Dado uma lista com as médias tiradas pelos alunos. Imprima
todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]

6) Dado uma lista com as notas tiradas pelos alunos.
imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4] */

//1
let numero = 5;

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + numero * i);
}

//2
let lista = [1, 2, 3, 4, 5, 6];

for (let i in lista) {
  if (lista[i] % 2 === 0) {
    console.log(lista[i]);
  }
}

//3
let nomes = ["Victor", "Joao", "Vanessa", "Maria"];

for (let i in nomes) {
  if (nomes[i][0] === "V") {
    console.log(nomes[i]);
  }
}

//4
let pares = [];

for (let i = 10; i <= 50; i++) {
  if (i % 2 === 0) {
    pares.push(i);
  }
}

console.log(pares);

//5
let medias = [2, 7, 3, 8, 10, 4];

for (let i in medias) {
  if (medias[i] < 5) {
    console.log(medias[i]);
  }
}

//6
let notas1 = [2, 7, 3, 8, 10, 4];
let maior = notas1[0];

for (let i in notas1) {
  if (notas1[i] > maior) {
    maior = notas1[i];
  }
}

console.log("Maior nota:", maior);
