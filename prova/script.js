//1
/* let precos = [5, 3, 8, 2, 6];
let soma = 0;

for (let i = 0; i < precos.length; i++) {
    console.log(precos[i]);
    soma += precos[i];
}

console.log("Total vendido:", soma);
 
 */

//2
/* const produtos = [
 {nome: "maça", preco: 10},
 {nome: "laranja", preco: 20},
 {nome: "coca", preco: 30}

]
for (let i = 0; i<produtos.length; i++ ){
let desconto = produtos[i].preco/10;
console.log(produtos[i].preco-desconto)
} */

//3
/* const cliente = {
    nome: "Maria",
    idade: 25 ,
    cidade: "Caxias do Sul"
}
console.log(`Cliente ${cliente.nome} mora em ${cliente.cidade}`);
 */

//4
/* let aluno = ["Ana", "Bruno", "Carlos","Daniel", "Eva"]
console.log(`Primeiro Aluno: ${aluno[0]}`)
console.log(`Ultimo Aluno: ${aluno[4]}`)
*/

//5
/*<button onclick="iniciar()">Iniciar</button>

<script>
function iniciar() {
    console.log("Sistema iniciado com sucesso");
}
</script>
*/
//6
/* let value = [100, 250, 80, 320, 50, 600];
for(let i = 0; i<value.length; i++){
    if(value[i]>100){
        console.log(value[i])
    }
} */

//7
/* let vet = [200, 150, 300, 50];

function totalVendido() {
    let soma = 0;

    for (let i = 0; i < vet.length; i++) {
        soma += vet[i];
    }

    return soma;
}

console.log("Total vendido:", totalVendido()); 
} 
 */
//8
/* let alunos = [
{ nome: "Ana", nota: 8 },
{ nome: "Bruno", nota: 5 },
{ nome: "Carlos", nota: 7 },
{ nome: "Daniel", nota: 4 }
]
for(let i = 0; i<alunos.length; i++){
    if(alunos[i].nota>=7)
        console.log(`Alunos aprovados: ${alunos[i].nome} nota: ${alunos[i].nota}`)
} */

//9

/*<input type="text" id="campo">
<button onclick="mostrar()">Enviar</button>

<script>
function mostrar() {
    let valor = document.getElementById("campo").value;
    alert("Você digitou: " + valor);
}
</script>
*/
//10
/*
let precos = [10, 20, 30, 40];
let dobro = [];

for (let i = 0; i < precos.length; i++) {
    dobro.push(precos[i] * 2);
}

console.log(dobro);
*/