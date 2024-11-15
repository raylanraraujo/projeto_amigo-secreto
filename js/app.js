function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');

    if (listaAmigos.textContent == ''){
        listaAmigos.textContent = amigo;
    } else {
        listaAmigos.textContent += ', ' + amigo;
    }
    
    document.getElementById('nome-amigo').value = '';
}