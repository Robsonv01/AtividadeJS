/* function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  } else if (imc >= 35 && imc < 40) {
    return "Obeso";
  } else {
    return "Obesidade grave";
  }
}

// valores
let imc = calcularImc(110, 1.76);
let classificacao = classificarImc(imc);

console.log("IMC:", imc.toFixed(2));
console.log("Classificação:", classificacao); */

// Crie uma função chamada saudacao que exiba no console:
// Olá, seja bem-vindo!

// Crie uma função chamada mostrarNome que receba um nome como parâmetro e exiba:
// Olá, [nome]

// Crie uma função soma que receba dois números e retorne a soma.
// Crie uma função dobro que receba um número e retorne o dobro.
// Crie uma função parOuImpar que receba um número e informe
// se ele é par ou ímpar.

// Crie uma função maiorNumero que receba dois números e retorne o maior.
// Crie uma função media que receba 3 notas e retorne a média.
// Crie uma função converterCelsius que receba uma temperatura em Celsius e retorne em Fahrenheit.
// Crie uma função contador que receba um número e imprima de 1 até ele.
// Crie uma função tabuada que receba um número e mostre sua tabuada de 1 a 10.

function bom() {
  console.log("Olá, seja bem-vindo!");
}
bom();

function mostrarNome(nome) {
  console.log("Olá, " + nome);
}
mostrarNome("R");

// 3
function soma(a, b) {
  return a + b;
}
console.log(soma(5, 3));

// 4
function dobro(num) {
  return num * 2;
}
console.log(dobro(9));

//5
function parOuImpar(num) {
  if (num % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}
console.log(parOuImpar(2));
//6
function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maiorNumero(10, 20));

// 7
function media(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}
console.log(media(7, 8, 9));

// 8
function converterCelsius(c) {
  return (c * 9) / 5 + 32;
}
console.log(converterCelsius(25));

// 9
function contador(num) {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
}
contador(5);

// 10
function tabuada(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
}
tabuada(3);
