var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play');
button.focus();

function explorarOCastelo(){
    let textoUsuario = 'Você possui duas escolhas:\n1. Seguir em frente e descobrir o que há na sala da frente.\n2. Entrar na porta que está à direita.';
    let result = inserirDado(textoUsuario);

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida');
        result = inserirDado(textoUsuario);
    }

    if(result === '1'){
        texto.innerHTML = 'Esta é a sala do trono, mas Zelda não está aqui, siga procurando por ela com cautela, pois Agahim pode estar próximo.';
        img.src = '../../img/link_e_zelda/fase_2/escolha_01.gif';
        button.onclick = procurarPorZelda;
    }else if(result === '2'){
        texto.innerHTML = 'No momento de distração dos guardas você conseguiu passar pela porta que não estava trancada e e encontrou uma escada que leva para as masmorras do castelo.';
        img.src = '../../img/link_e_zelda/fase_2/escolha_02.gif';
        button.onclick = paraAsMasmorras;
    }
}

function procurarPorZelda(){
    let textoUsuario = 'O que você gostaria de fazer agora?\n1. Retornar e entrar na porta à direita que havia avistado antes, mas agora os guardas já sabem da sua presença no interior do castelo. \n2. Sair do castelo e procurar por Zelda pelos jardins externos.';
    let result = inserirDado(textoUsuario);

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida');
        result =  inserirDado(textoUsuario);
    }

    if(result === '1'){
        texto.innerHTML = 'Com muita cautela você encontrou uma escada que leva para as masmorras, os guardas ainda estão distraídos com o que está havendo nos jardins do castelo.';
        img.src = '../../img/link_e_zelda/fase_2/escolha_02.gif';
        button.onclick = paraAsMasmorras;
    }else if(result === '2'){
        texto.innerHTML = 'GAME OVER <br> Você foi capturado pelo grande número de guardas que estava na área externa ao castelo e que havia trancado todo o local.';
        img.src = '../../img/link_e_zelda/fase_2/game_over.gif';
        button.value = 'Recomeçar';
        button.onclick = gameOver;
    }
}

function paraAsMasmorras(){
    texto.innerHTML = 'Você encontrou uma sala com uma chave e um novo item: Um bumerangue que funciona para ataque imobilizando inimigos por curto período e também como defesa ao ser lançado contra flechas.<br> Agora você poderá chegar às masmorras do castelo';
    img.src = '../../img/link_e_zelda/fase_2/escolha_2_chave.gif';
    button.value = 'Fase 3';
    button.onclick = redirecionar;
}

function inserirDado(textoUsuario){
    return prompt(textoUsuario);
}

function redirecionar(){
    location.href = './fase_3.html';
}

function gameOver(){
    location.href = '../../index.html';
}