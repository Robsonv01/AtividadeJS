/* const { classificar } = require("./funcoes-auxiliares"); */

/* import { classificar } from "./funcoes-auxiliares.js";
console.log(classificar(10)); */

import { tabuada } from "./funcoes-auxiliares.js";
console.log(tabuada(2));

import { imprimir } from "./funcoes-auxiliares.js";
const numeros = [10, 5, 8, 2, 9, 15, 3];

imprimir(numeros); // 2

import { numerosPares } from "./funcoes-auxiliares.js";

const numeros2 = [1, 3, 9, 10, 12];

const resultado = numerosPares(numeros2);

console.log(`Números pares: ${resultado}`);
