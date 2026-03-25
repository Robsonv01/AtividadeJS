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
/* const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
};
console.log(carro); */

/* 2
Crie um objeto aluno com:
nome
idade
Depois altere a idade para outro valor.
 */
/* const aluno = {
  nome: " homi",
  idade: "18",
};
aluno.idade = 22;
console.log("A nova idade é " + aluno.idade); */

/* 3Crie um objeto produto com:
nome
preco
Exiba uma frase:
O produto X custa R$ Y
 */
/* const produto = {
  nome: "tiaplico",
  preco: "18",
};
console.log("o Produto " + produto.nome + " custa R$" + produto.preco); */

/* Crie um objeto pessoa com:
nome
Depois adicione dinamicamente a propriedade idade.
Acesse uma propriedade usando:
notação ponto (obj.prop)
notação colchetes (obj["prop"]) */
/* const pessoa = {
  nome: " home",
};
pessoa.idade = 17;
console.log(pessoa.nome);
console.log(pessoa.idade);

console.log(pessoa["nome"]);
console.log(pessoa["idade"]);
 */

/* Crie um objeto pessoa com nome e idade e mostre os valores no console. */
const pessoa = {
  nome: "pedro piça",
  idade: "11",
};
console.log("Nome: " + pessoa.nome + "Idade: " + pessoa.idade);

/* Crie um objeto carro com marca, modelo e ano e mostre a frase "Carro: Ford Ka - 2015".
 */
const carro = {
  marca: "Ford ",
  modelo: "Ka",
  ano: 2025,
};
console.log(carro);

/* Altere o valor da propriedade preço no objeto produto de 50 para 80.
 */
const produto1 = {
  preco: "50",
};
produto1.preco = 80;
console.log(produto1.preco);

/* Adicione a propriedade nota no objeto aluno que possui apenas o nome. */
const aluno = {
  nome: "homi",
};
aluno.nota = 8;
console.log(aluno.nota);
/* Acesse as propriedades de um objeto usando notação ponto e colchetes. */
const obj = {
  item: "papel",
};
console.log(obj.item);
console.log(obj["item"]);
/* 6 Crie um objeto pessoa com um método falar() que mostre "Olá!".
 */
const pessoa1 = {
  falar() {
    console.log("olá");
  },
};
pessoa1.falar();

/* Crie um objeto com método usando this para mostrar "Meu nome é João".
 */
const pessoa3 = {
  nome: "João",
  falar: function () {
    console.log("Meu nome é " + this.nome);
  },
};

// Chamando o método
pessoa3.falar();

// Crie um objeto produto com nome, preço e método desconto(porcentagem) que diminui o preço.
const produto = {
  nome: "Camiseta",
  preco: 100,
  desconto: function (porcentagem) {
    this.preco = this.preco - (this.preco * porcentagem) / 100;
  },
};

// Aplicando desconto de 20%
produto.desconto(20);

console.log(produto.preco); // 80
// Crie um objeto aluno com nome e um array de notas e mostre todas as notas.
const aluno1 = {
  nome: "Carlos",
  notas: [7, 8, 9, 10],
};

// Mostrar todas as notas
for (let i = 0; i < aluno1.notas.length; i++) {
  console.log(aluno1.notas[i]);
}

//Percorra um objeto usando for...in e mostre suas propriedades.
const pessoa4 = {
  nome: "Ana",
  idade: 25,
  cidade: "Caxias do Sul",
};

for (let prop in pessoa4) {
  console.log(prop + ": " + pessoa4[prop]);
}
// Crie um objeto aluno com nome, array de notas e método media() que retorna a média.
const aluno2 = {
  nome: "João",
  notas: [7, 8, 9],
  media: function () {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];
    }
    return soma / this.notas.length;
  },
};

console.log(aluno2.media());
// Crie um array de objetos alunos com nome e nota e mostre apenas os aprovados (nota maior ou igual a 7).
const alunos = [
  { nome: "Ana", nota: 8 },
  { nome: "Carlos", nota: 6 },
  { nome: "Maria", nota: 9 },
];

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 7) {
    console.log(alunos[i].nome);
  }
}
// Crie um objeto contaBancaria com saldo e métodos depositar(valor) e sacar(valor).
const contaBancaria = {
  saldo: 1000,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor) {
    this.saldo -= valor;
  },
};

contaBancaria.depositar(500);
contaBancaria.sacar(200);
console.log(contaBancaria.saldo);
// Crie um objeto usuario com nome, logado (true/false) e métodos login() e logout().
const usuario = {
  nome: "João",
  logado: false,
  login: function () {
    this.logado = true;
  },
  logout: function () {
    this.logado = false;
  },
};

usuario.login();
console.log(usuario.logado);

// Crie um objeto pessoa com um objeto endereco dentro contendo cidade e estado e mostre a cidade.
const pessoa5 = {
  nome: "Ana",
  endereco: {
    cidade: "Caxias do Sul",
    estado: "RS",
  },
};

console.log(pessoa5.endereco.cidade);

// Crie um array de objetos produtos e filtre os produtos com preço maior que 100.
const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 800 },
];

for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].preco > 100) {
    console.log(produtos[i].nome);
  }
}
//Crie um objeto sistema com um array usuarios e um método adicionarUsuario(nome).
//No  mesmo objeto, crie um método listarUsuarios().
//Melhore o sistema para não permitir usuários duplicados.

const sistema = {
  usuarios: [],

  adicionarUsuario: function (nome) {
    if (this.usuarios.includes(nome)) {
      console.log("Usuário já existe");
    } else {
      this.usuarios.push(nome);
    }
  },

  listarUsuarios: function () {
    console.log(this.usuarios);
  },
};

sistema.adicionarUsuario("Ana");
sistema.adicionarUsuario("Ana"); // duplicado
sistema.listarUsuarios();
//Crie um objeto carrinho com array produtos e métodos adicionar(produto), remover(nome) e total().
const carrinho = {
  produtos: [],

  adicionar: function (produto) {
    this.produtos.push(produto);
  },

  remover: function (nome) {
    this.produtos = this.produtos.filter((p) => p.nome !== nome);
  },

  total: function () {
    let soma = 0;
    for (let i = 0; i < this.produtos.length; i++) {
      soma += this.produtos[i].preco;
    }
    return soma;
  },
};

carrinho.adicionar({ nome: "Mouse", preco: 50 });
carrinho.adicionar({ nome: "Teclado", preco: 150 });

console.log(carrinho.total());
//Crie um sistema de notas que permita cadastrar alunos, calcular média e mostrar aprovados.
const sistemaNotas = {
  alunos: [],

  adicionarAluno: function (nome, notas) {
    this.alunos.push({ nome, notas });
  },

  media: function (notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    return soma / notas.length;
  },

  aprovados: function () {
    for (let aluno of this.alunos) {
      if (this.media(aluno.notas) >= 7) {
        console.log(aluno.nome);
      }
    }
  },
};

sistemaNotas.adicionarAluno("Ana", [8, 9]);
sistemaNotas.adicionarAluno("Carlos", [5, 6]);

sistemaNotas.aprovados();
//Crie um mini banco com múltiplas contas e permita transferências entre elas.
const banco = {
  contas: [],

  criarConta: function (nome, saldo) {
    this.contas.push({ nome, saldo });
  },

  transferir: function (de, para, valor) {
    let contaDe = this.contas.find((c) => c.nome === de);
    let contaPara = this.contas.find((c) => c.nome === para);

    if (contaDe && contaPara && contaDe.saldo >= valor) {
      contaDe.saldo -= valor;
      contaPara.saldo += valor;
    }
  },
};

banco.criarConta("Ana", 1000);
banco.criarConta("Carlos", 500);

banco.transferir("Ana", "Carlos", 200);

console.log(banco.contas);
