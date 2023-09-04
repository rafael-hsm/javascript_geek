// REST/SPREAD (juntar/espalhar) -> ...

// function total(...precos){
//     let total = 0;

//     precos.forEach(p => total +=p);

//     return total;
// }

// console.log(total(23.44, 22, 3.45, 5.65).toFixed(2));

// console.log(total(23, 54));

// console.log(total(2, 5, 9));
// console.log(total());

// frutas1 = ['Manga', 'Uva', 'Melancia']
// frutas2 = ['Abacate', 'Morange', 'Jaca']

// let compras = [...frutas1, ...frutas2]
// let compras1 = [frutas1 + frutas2]
// let compras2 = [frutas1, frutas2]

// console.log(compras);
// console.log(compras1);
// console.log(compras2);

let alunos = ['Paula', 'Felipe', 'Fernanda'];
let novo = 'Joana'

//alunos.push(novo);
let todos = [...alunos, novo]
console.log(todos);