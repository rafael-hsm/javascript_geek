// let itexto = document.getElementById('produto')

// console.log(itexto)

let spans = document.getElementsByTagName('span');

// console.log(spans);

// let elem = document.getElementsByClassName('texto');

// console.log(elem)

// Ler valores

// console.log(spans[0].textContent);
// console.log(spans[1].innerHTML);

// Alterar valores
// spans[0].textContent = 'JavaScript';
// spans[1].innerHTML = 'Geek University';

// let span = document.getElementsByTagName('span')[0];
// console.log(span.innerHTML);

// span.style.textTransform = 'uppercase';
// let inp = document.querySelector('body div.container div.row input');

// let element = document.querySelector('.texto');  // busca pela classe e retorna o primeiro elemento
// let elements = document.querySelectorAll('.texto');  // busca pela classe e retorna todos os elemento

// console.log(inp);
// console.log(element);
// console.log(elements);

// let div1 = document.querySelector('#div1');  // Busca elemento pelo ID

// console.log(div1)

// let imp = document.querySelector('input[name=produto');

// console.log(imp);

// Exemplo 1

// let btn = document.querySelector('button.btn');

// btn.onclick = function(){
//     alert('Botão clicado...');
// }

// Exemplo 2

let btn = document.querySelector('button.btn');

let inp = document.querySelector('input[name=produto]');

btn.onclick = function(){
    alert(`Temos o texto ${inp.value}`);
}