function somar(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

// console.log(somar());  // 0
// console.log(somar(2));  // 2
// console.log(somar(2, 5, 8));  // 15

function imprimir_valores(num1, num2){
    for(let i in arguments) {
        console.log(arguments[i])
    }
}

// imprimir_valores();
// imprimir_valores(4, 6);
// imprimir_valores(4, 6, 8);
// imprimir_valores(4, 6, 8, 10, 59);

// Gambiarra 1

function somar2(num1, num2, num3) {
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;

    return num1 + num2 + num3;
}

// console.log(somar2(4, 5, 6));
// console.log(somar2());
// console.log(somar2(2));
// console.log(somar2(2, 2, 2));

// Gambiarra 2
function somar3(num1, num2, num3){
    num1= isNaN(num1) ? 1 : num1;
    num2= isNaN(num2) ? 2 : num2;
    num3= isNaN(num3) ? 3 : num3;
    return num1+ num2 + num3;
}

// console.log(somar3(4, 5, 6));
// console.log(somar3());
// console.log(somar3(2));
// console.log(somar3(2, 2, 2));

// forma atual - recomendada
function somar4(num1 = 1, num2 =2, num3 = 3){
    return num1 + num2 + num3;
}

console.log(somar4(4, 5, 6));
console.log(somar4());
console.log(somar4(2));
console.log(somar4(2, 2, 2));