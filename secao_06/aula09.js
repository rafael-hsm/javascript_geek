// Criando uma função construtora

function Pessoa(n, s, raca = 'Humano'){
    // atributos privados só conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;

    // atributo público pode ser acessado fora da função construtora
    this.raca = raca;

    // método privado só conseguimos fazer uso dnetro da função construtora
    let imprimir_dados = function(){
        console.log(`Nome: ${nome}. ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`);
    }

    // método público conseguimos acessar fora da função construtora
    this.fazer_aniversario = function(){
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function(){
        return idade;
    }
}

const angelina = new Pessoa("Angelina", "Feminino");

console.log(angelina)

console.log(angelina.peso); // privado, retorna undefined