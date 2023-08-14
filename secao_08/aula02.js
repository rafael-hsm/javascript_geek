let a = document.querySelector('.link');

console.log(a);
console.log(a.innerText);  
// console.log(a.parentNode);  // body
// console.log(a.parentNode.parentNode)  // html
// console.log(a.parentNode.parentNode.parentNode)  //Document
// console.log(a.parentNode.parentNode.parentNode.parentNode)  //Null

// console.log(a.parentNode.parentNode.childNodes)  // retorna lista com 3 elementos pois considera um elemento a mais após o head pois conta o enter entre o head e o body.

// console.log(a.parentNode.parentNode.firstChild)
// console.log(a.parentNode.parentNode.lastChild)

console.log(a.parentNode.parentNode.firstChild.nextSibling.nextSibling);