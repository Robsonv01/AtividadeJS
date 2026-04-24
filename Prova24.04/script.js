//QUESTÃO 1 – CONTROLE DE ACESSOS
/* Um sistema registrou os acessos ao site: [10,5,8,12,7]
Mostre todos os valores no console e calcule o total de acessos. */

let numero = [10, 5, 8, 12, 7];
let soma = 0;

for (let i = 0; i < numero.length; i++) {
  console.log(numero[i]);
  soma += numero[i];
}
console.log("Total :", soma);

//
/* QUESTÃO 2 – DESCONTO
Crie uma função que receba um valor e retorne o valor com 20% de desconto. */
const produtos = [{ nome: "maça", preco: 10 }];

function desconto(valor) {
  return valor * 0.8;
}

console.log(desconto(produtos[0].preco));

// 3
/* Dado o objeto: nome: "João", idade: 30, cidade: "Porto Alegre"
Mostre no console: Usuário João mora em Porto Alegre */

const cliente = {
  nome: "Joao",
  idade: 30,
  cidade: "Porto Alegre",
};
console.log(" Usuario " + cliente.nome + " mora em " + cliente.cidade);

// 4

/* Dado o array: ["Lucas","Mariana","Pedro","Fernanda","Rafael"]
Mostre o primeiro e o último elemento. */
const pessoas = ["Lucas", "Mariana", "Pedro", "Fernanda", "Rafael"];
console.log("Primeira " + pessoas[0] + " Ultima pessoa " + pessoas[4]);

//5  botao

//6 filtro
let valores = [50, 120, 300, 80, 200, 30];

for (let i = 0; i < valores.length; i++) {
  if (valores[i] > 100) {
    console.log(valores[i]);
  }
}
// 7 total
let valor = [500, 200, 150, 100];
let total = 0;
function totalVendas(valores) {
  for (let i = 0; i < valores.length; i++) {
    total += valores[i];
  }
  return total;
}
console.log("Total dos valores " + totalVendas(valor));

//8 notas
const alunos = [
  { nome: "Lucas", nota: 6 },

  { nome: "Mariana", nota: 9 },

  { nome: "Pedro", nota: 7 },

  { nome: "Fernanda", nota: 5 },
];
for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7) {
    console.log(alunos[i].nome);
  }
}

// 10  dobrados
let precos1 = [2, 4, 6, 8];
let dobrados = [];

for (let i = 0; i < precos1.length; i++) {
  dobrados.push(precos1[i] * 2);
}

console.log(dobrados);
