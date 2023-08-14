/*
JSON - JavaScript Object Notation
*/

const curso = {
    nome: 'Programacao em JavaScript',
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
}

// console.log(curso);
// console.log(curso.preco());
console.log(typeof(curso));

// Convertendo o objeto JavaScript para JSON
const json = JSON.stringify(curso);
console.log(json);
console.log(typeof(json));

//convertendo de JSON para Objeto JavaScript
const obj = JSON.parse(json);
console.log(obj);
console.log(typeof(obj));