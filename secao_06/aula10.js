// let xuxa = 'global'  // pode ser acessada clobalmente no nosso projeto

// function imprimir(){
//     console.log(xuxa);
// }

// function outra(){
//     let xuxa = 'local';  // pode ser acessada localmente no bloco/contexto
//     imprimir();
//     console.log(xuxa);  // local
// }

// outra();  // 

// Novo exemplo
let variavel = 'global';

function externa(){
    let variavel = 'local';

    function interna(){
        return variavel; //
    }

    return interna;
}

let executa = externa();

console.log(executa())

/*
Estamos estudando Closures (contexto lexico de uma função)
Linguagem de Programação chama CLOJURE
*/