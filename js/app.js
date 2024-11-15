let amigosIncluidos = []; //variável que armazena o array dos amigos do sorteio

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');

    if (listaAmigos.textContent == ''){
        listaAmigos.textContent = amigo;
    } else {
        listaAmigos.textContent += ', ' + amigo;
    }
    document.getElementById('nome-amigo').value = '';

    amigosIncluidos.push(amigo) //incluir a variável 'AMIGO' no array 'AMIGOS INCLUÍDOS'
}

function sortear() {
    embaralha(amigosIncluidos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (i = 0 ; i < amigosIncluidos.length; i++){
        if (i == amigosIncluidos.length -1 ){
            listaSorteio.innerHTML += `${amigosIncluidos[i]} --> ${amigosIncluidos[0]} <br>`;
        } else {
            listaSorteio.innerHTML += `${amigosIncluidos[i]} --> ${amigosIncluidos[i+1]} <br>`;
        }
    }
}

//função embralha é o algoritmo Fisher–Yates
function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {   // indice começa com o tamanho do array

        const indiceAleatorio = Math.floor(Math.random() * indice); // gerou o índice aleatório

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}