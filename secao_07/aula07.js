//
const curso = {
    nome: 'Programacao em JavaScript',
    horas: 25,
    preco: 27.99
}

// console.log(curso);

// console.log(typeof(curso));

// console.log(Object.keys(curso));

// console.log(Object.values(curso));

// console.log(Object.entries(curso));

// Object.entries(curso).forEach(par => {
//     console.log(`${par[0]}: ${par[1]}`);
// });

// Object.entries(curso).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);
// });

// Object.defineProperty(curso, 'publicacao', {
//     enumerable: true,
//     writable: false,
//     value: '07/12/2019'
// });

// console.log(curso)

// Object.freeze(curso);
// curso.nome = 'Danca da Garrafa'

// console.log(curso)

const usuarios = [
    {nome: 'Aline Moraes', empresa: 'Geek University'},
    {nome: 'Ricardo Brandao', empresa: 'Google'},
    {nome: 'Felipe Xavier', empresa: 'Sony'}
]

// console.log(usuarios)

console.table(usuarios)
console.table(curso)