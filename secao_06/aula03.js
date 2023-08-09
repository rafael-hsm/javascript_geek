function calcular_idade(ano_nascimento){
    const data = new Date(); // gera a data atual

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento){
    const data2 = new Date();

    const idade2 = data2.getUTCFullYear() - ano_nascimento;
    
    console.log(idade2);
}

let d = new Date();

console.log(d);

let ret = calcular_idade(1990);
console.log(ret);

let ret2 = calcular_idade2(1998);
console.log(ret2);