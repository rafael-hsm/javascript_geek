// Funções anônimas/lambdas
let numero = [1, 2, 3, 4, 5, 6];

function dobrar(valor){
    return valor * 5;
}

let res1 = numero.map(dobrar);

console.log(res1)

// Funções Anônimas - Lambdas (Funções Lambdas)

let res2 = numero.map(function(valor){
    return valor *3;
});

console.log(res2);

console.log(dobrar(9));