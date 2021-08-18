var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus();

function masmorras(){
    let textoUsuario = 'Você têm duas escolhas:\n1. Tentar fugir dos guardas e sair do castelo para procurar po Zelda na aldeia\n2. Lutar com os guardas'
    let result = inserirDado(textoUsuario)

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida')
        result =  inserirDado(textoUsuario)
    }
    if(result === '1'){
        texto.innerHTML = 'GAME OVER <br> Você foi capturado pelo grande número de guardas que estava na área externa ao castelo'
        img.src = '../../img/link_e_zelda/fase_2/escolha_01.gif'
        button.value = 'Recomeçar'
        button.onclick = gameOver
    }else if(result === '2'){
        texto.innerHTML = 'Você derrotou os guardas e descobriu que Zelda estava sendo prisioneira, continue para leva-lá até a sala do trono e recuperar seu reino'
        img.src = '../../img/link_e_zelda/fase_3/link_e_zelda_final.gif'
        button.onclick = finalizarJogo
    }
}

function inserirDado(textoUsuario){
    return prompt(textoUsuario)
}

function finalizarJogo(){
    texto.innerHTML = 'Parabéns, você conseguiu!'
    img.src = '../../img/link_e_zelda/fase_3/link_e_zelda_fim_de_jogo.png'
    button.onclick = redirecionar
}

function redirecionar(){
    location.href = '../../index.html'
}

function gameOver(){
    location.href = '../../index.html'
}