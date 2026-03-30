/* function classificar(media) {
  if (media >= 7) {
    return "Aprovado";
  } else if (media >= 5) {
    return "Recuperação";
  } else {
    return "Reprovado";
  }
}

export { classificar };

 */
function tabuada(numero) {
  console.log("Tabuada do numero" + numero);
  for (let i = 1; i < 11; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
tabuada(2);
export { tabuada };

//2Faça um programa que receba a quantidade de números e seus respectivos valores.  Imprima o maior e o menor número deste conjunto.

function imprimir(conjunto) {
  if (conjunto.length === 0) {
    console.log("O conjunto está vazio");
    return;
  }

  const maior = Math.max(...conjunto);
  const menor = Math.min(...conjunto);

  console.log("Maior número: " + maior);
  console.log("Menor número: " + menor);
}

const numeros = [10, 5, 8, 2, 9, 15, 3];
imprimir(numeros);

export { imprimir };

// 3) Faça um programa que receba a quantidade de números e seus respectivos valores. Imprima todos os números pares.
function numerosPares(numeros2) {
  let pares = [];

  for (let i = 0; i < numeros2.length; i++) {
    if (numeros2[i] % 2 === 0) {
      pares.push(numeros2[i]);
    }
  }

  return pares;
}

export { numerosPares };
