let amigosIncluidos = []; //variável que armazena o array dos amigos do sorteio

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');

    if ( amigo == '') {  //Evitar que seja adicionado quando o campo estiver vazio
        alert('Digite um nome antes de adicionar!');
        return;
    }

    if (amigosIncluidos.includes(amigo.toUpperCase())){  //verificar se o nome inserio já foi adicionado na lista
        alert('Esse nome já foi adicionado.');
        return;
    }

    if (listaAmigos.textContent == ''){
        listaAmigos.textContent = amigo;
    } else {
        listaAmigos.textContent += ', ' + amigo;
    }
    document.getElementById('nome-amigo').value = '';

    amigosIncluidos.push(amigo.toUpperCase()) //incluir a variável 'AMIGO' no array 'AMIGOS INCLUÍDOS'
}

function sortear() {

    while ( amigosIncluidos.length < 4){ //limitar uma quantidade mínima de pessoas para o sorteio
        alert('Adicione pelo menos 4 amigos')
        return;
    }
    
    embaralha(amigosIncluidos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (i = 0 ; i < amigosIncluidos.length; i++){
        if (i == amigosIncluidos.length -1 ){ //condição para que o último elemento da lista pegue o primeiro
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

function reiniciar() {
    amigosIncluidos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}


/*
Validações a serem implementadas

    1) Verificar se há nomes iguais e barrar 
    2) Impedir que seja incluido na lista sem ter digitado nada
    3) Sorteio tem que ter um minimo de número de pessoas para participar do sorteio

*/
