/*
 - Conjuntos não aceitam repetição de valores;
 - Conjuntos não são indexados;
*/
// Declarando um conjunto
let cursos = new Set();

// Aducuibabdi Vakires
cursos.add('Programacao para Leigos');
cursos.add('Algoritmos e L[ogica de Programacao');

// Adicionar valores concatenados
cursos.add('Programacao em C').add('Programacao em Java').add('Programacao em Python');

cursos.add('Banco de Dados');
cursos.add('Programacao Web com Django Framework')

//console.log(cursos);

// Acessando o tamanho do conjunto
// console.log(cursos.size);

// console.log(cursos.has('Banco de Dados'));
// console.log(cursos.has('Banco de dados'));

// // Deletar elementos de um conjunto
// let ret = cursos.delete('Programacao para leigos');
// console.log(ret);

let frutas = ['Manga', 'Uva', 'Jaca', 'Uva'];
let frutas_unicas = new Set(frutas);
console.log(frutas_unicas);