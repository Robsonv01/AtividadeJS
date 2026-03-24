/* const pessoa = {
  nome: "Joao",
  idade: 25,
  falar: function () {
    console.log("Olá, meu nome é " + this.nome);
  },
};
pessoa.falar();
console.log(pessoa["nome"]);
console.log(pessoa.nome); */

/*1 Exercicios objeto JS:
Crie um objeto carro com as propriedades:
marca
modelo
ano 
Exiba no console o modelo do carro.*/
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
};
console.log(carro);

/* 2
Crie um objeto aluno com:
nome
idade
Depois altere a idade para outro valor.
 */
const aluno = {
  nome: " homi",
  idade: "18",
};
aluno.idade = 22;
console.log("A nova idade é " + aluno.idade);

/* 3Crie um objeto produto com:
nome
preco
Exiba uma frase:
O produto X custa R$ Y
 */
const produto = {
  nome: "tiaplico",
  preco: "18",
};
console.log("o Produto " + produto.nome + " custa R$" + produto.preco);

/* Crie um objeto pessoa com:
nome
Depois adicione dinamicamente a propriedade idade.
Acesse uma propriedade usando:
notação ponto (obj.prop)
notação colchetes (obj["prop"]) */
const pessoa = {
  nome: " home",
};
pessoa.idade = 17;
console.log(pessoa.nome);
console.log(pessoa.idade);

console.log(pessoa["nome"]);
console.log(pessoa["idade"]);
