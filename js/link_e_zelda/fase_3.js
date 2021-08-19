var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus();

function masmorras(){
    let textoUsuario = 'Você têm duas escolhas:\n1. Tentar fugir dos guardas e sair do castelo para procurar por Zelda nos jardins.\n2. Lutar com os guardas e tentar descobrir o que está acontecendo aqui.'
    let result = inserirDado(textoUsuario)

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida')
        result =  inserirDado(textoUsuario)
    }
    if(result === '1'){
        texto.innerHTML = 'GAME OVER <br> Você foi capturado pelo grande número de guardas que estava na área externa do castelo'
        img.src = '../../img/link_e_zelda/fase_2/escolha_01.gif'
        button.value = 'Recomeçar'
        button.onclick = gameOver
    }else if(result === '2'){
        texto.innerHTML = 'Você derrotou os guardas e descobriu que Zelda estava sendo prisioneira, continue para leva-lá até a sala do trono e recuperar o poder no reino'
        img.src = '../../img/link_e_zelda/fase_3/link_e_zelda_final.gif'
        button.onclick = finalizarJogo
    }
}

function inserirDado(textoUsuario){
    return prompt(textoUsuario)
}

function finalizarJogo(){
    texto.innerHTML = 'Parabéns, você conseguiu! Salvou Zelda de Agahim e agora ela está no comando do reino novamente e ainda mais apaixonada por você.';
    img.src = '../../img/link_e_zelda/fase_3/link_e_zelda_fim_de_jogo.png';
    button.value = 'Recomeçar';
    button.onclick = redirecionar;
}

function redirecionar(){
    location.href = '../../index.html';
}

function gameOver(){
    location.href = '../../index.html';
}