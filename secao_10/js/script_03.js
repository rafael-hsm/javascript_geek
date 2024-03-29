// Axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){
    // Limpa a div
    div.innerHTML = '';
    
    // Criar o span
    let spanNome = document.createElement('span');

    // Criar o txtNome
    let txtNome = ''

    // Recupera o Input
    let github_user = document.querySelector('input[name=github_user]');
    let user = github_user.value;

    
    // Limpando o input
    github_user.value = '';

    axios.get(`https://api.github.com/users/${user}`)
        .then(function(response){
            console.log(response.data)
            if(response.data.name !== null){
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);
            }else{
                txtNome = document.createTextNode('O usuario nao possui nome.')
            }
            // Adiciona o conteudo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode('Nao foi possivel realizar a requisicao.');
            // Adiciona o conteudo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
}