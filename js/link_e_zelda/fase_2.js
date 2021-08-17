var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus();

function explorarOCastelo(){
    let result = prompt('Você têm duas escolhas:\n1. Seguir em frente e descobrir o que é a sala à sua frente.\n2. Entrar na porta que está à direita')
    if(result === '1'){
        texto.innerHTML = 'Esta é a sala do trono, mas não há nada aqui, siga procurando Zelda'
        img.src = '../../img/link_e_zelda/fase_2/escolha_01.gif'
        button.onclick = procurarPorZelda
    }else {
        texto.innerHTML = 'Você encontrou uma escada que leva para as masmorras do castelo'
        img.src = '../../img/link_e_zelda/fase_2/escolha_02.gif'
        button.onclick = paraAsMasmorras
    }
}

function procurarPorZelda(){
    let result = prompt('O que você gostaria de fazer agora?\n1. Retornar e entrar na porta à direita que havia avistado antes. \n2. Sair do castelo e procurar por Zelda na aldeia próxima')
    if(result === '1'){
        texto.innerHTML = 'Você encontrou uma escada que leva para as masmorras do castelo'
        img.src = '../../img/link_e_zelda/fase_2/escolha_02.gif'
        button.onclick = paraAsMasmorras
    }else {
        texto.innerHTML = 'GAME OVER <br> Você foi capturado pelo grande número de guardas que estava na área externa ao castelo'
        img.src = '../../img/link_e_zelda/fase_2/escolha_02.gif'
        button.value = 'Recomeçar'
        button.onclick = gameOver
    }
}

function paraAsMasmorras(){
    texto.innerHTML = 'Você encontrou uma sala com a chave, continue para chegar às masmorras!'
    img.src = '../../img/link_e_zelda/fase_2/escolha_2_chave.gif'
    button.value = 'Fase 3'
    button.onclick = redirecionar
}

function redirecionar(){
    location.href = './fase_3.html'
}

function gameOver(){
    location.href = '../../index.html'
}