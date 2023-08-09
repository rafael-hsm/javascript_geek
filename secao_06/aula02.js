// Cidadãos de primeira classe essa é a classificação de função no JavaScript
// Exemplo 1
function somar(num1, num2){
    return num1 + num2;
}

// let res = somar(4, 6);
// console.log(res);

// console.log(somar(10, 5));

// const executar = somar;

// console.log(executar(8, 8));

// Exemplo 2

function subtrair(num1, num2){
    return num1 - num2;
}

// function faz_algo(num1, num2, funcao){
//     return funcao(num1, num2);
// }

// console.log(faz_algo(5, 5, somar));
// console.log(faz_algo(80,3, subtrair));

// Exemplo 3

function outra(z){
    return z;
}

const ret = outra(subtrair);
console.log(ret(8, 2));

/*
Cidadãos de Primeira Classe
First-Class Citizens
Higher-Order Function
*/

function mensagem(){
    console.log("Evolua seu lado geek");
}

let ret2 = mensagem();
console.log(ret2)

let valores = [1, 3.4, true, somar];

for(let i = 0; i < valores.length; i++){
    console.log(typeof(valores[i]));
}
