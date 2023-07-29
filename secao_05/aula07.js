// Escopo global
var numero = 42;
// console.log(numero);

numero = numero + 18;
// console.log(numero);

// let - Escopo local
let outro_numero = 42;
// console.log(outro_numero);

outro_numero = outro_numero + 18;
// console.log(outro_numero);

let nome = 'Geek';
// console.log(nome);

nome = 'University';
// console.log(nome);

// Utilizando o var
// for(var i = 0; i < 5; i++){
//     var valor = i * 3;
//     console.log(valor);
// }

// console.log(valor);  // 12, ou seja, o último valor do valor
// console.log(i);  // 5, ou seja, o último index do i

// Utilizando o let
// for(let i = 0; i < 5; i++){
//     let valor = i * 3;
//     console.log(valor);
// }

// console.log(valor);  // 'valor' is not defined
// console.log(i);  // 'i' is not defined

// Permitido em JS
// var numero = 80;
// console.log(numero)

// var numero = 32;
// console.log(numero);

// Gera erro de sintax em JS - Identifier 'numero' has already been declared
// let numero = 80;
// console.log(numero)

// let numero = 32;
// console.log(numero);

// const
const TAXA = 1.44;
console.log(TAXA);

let res = 45 * TAXA;
console.log(res);

// TAXA = 5;  //TypeError: Assignment to constant variable.
// console.log(TAXA);

const curso = {nome: "Programação em JavaScript"};
console.log(curso.nome)

// Não posso alterar o valor de uma constante
// curso = 43; // Erro

//Podemos realizar mutação em dados contidos na constante
curso.nome = "Programação em Python"; // Mutação
console.log(curso);


/*
Dicas de como declarar variáveis em JavaScript:

- A variável poderá ser alterada? (vai variar?) se sim, use let
- A variável será constante? (não vai variar?) se sim, use const
*/

const valor = 5;

for(let i = 0; i < valor; i++) {
    console.log(valor - i);
}
