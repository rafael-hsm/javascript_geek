// Classes sempre com letra maiuscula
class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        return this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} esta falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} esta comendo...`);
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} esta bebendo...`)
    }
}

class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    // nao tem SET porque a marca nesse caso esta fixa
    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }

    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);
    }
}


// Instanciacao de Objetos - Forma 1

// const curso = new Object();
// curso.nome = 'Programacao em JavaScript';
// curso.preco = 27.99

// console.log(curso);

// curso['qtd_alunos'] = 999;

// console.log(curso);

// delete curso['qtd_alunos'];
// delete curso['preco'];
// console.log(curso);

// Instanciacao de Objetos - Forma 2 - Objeto Literal
const programa = {
    nome: 'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da paz, 45',
            bairro: 'Nova Lima',
            cidade: 'Sao Paulo',
        },
    filiais: [
        {cidade: 'Rio de Janeiro'},
        {cidade: 'Recife'}
    ]
    }
}

// console.log(programa);
// console.log(programa.nome);
// console.log(programa.fabricante.nome);
// console.log(programa.fabricante.filiais.length);

// console.log(programa['fabricante']['filiais'].length)

// programa.nome = 'PlayStation OS';

// console.log(programa.nome);
// console.log(programa)

// delete programa.fabricante.filiais;
// console.log(programa.fabricante.filiais);  // undefined

// Instanciacao de Objetos - Forma 3 - Objeto Literal

// const pessoa = {};

// console.log(typeof(pessoa));

// pessoa.nome = 'Angelina';

// console.log(pessoa);

// Instanciacao de Objetos - Forma 4 - Funcao Construtora

// function Lampada(cor){
//     this.cor = cor;
// }

// const l1 = new Lampada('Branca');

// console.log(l1);

// console.log(typeof(l1));

// Instanciacao de Objetos - Forma 5 - Objeto a partir das nossas classes

// const p1 = new Pessoa('Felicity', 'Sobrenome');
// console.log(p1);
// console.log(typeof(p1));
// console.log(p1.nome); // funcao get
// console.log(p1.sobrenome); // funcao gets

// p1.nome = 'Xuxa';
// console.log(p1);

// p1.falar('Vem aqui baixinho.....');
// p1.comer();
// p1.beber();

const fit = new Carro('Fit')
fit.imprimir()