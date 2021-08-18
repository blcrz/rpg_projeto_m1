var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus();

function iniciarFase(){
    let textoUsuario = 'Você têm duas escolhas:\n1. Entrar no castelo Hyrule\n2. Ir para a floresta em busca da Master Sword (uma espada com poderes mágicos)'
    let result = inserirDado(textoUsuario)

    // while(result !== '1' && result !=='2'){
    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida')
        result =  inserirDado(textoUsuario)
    }

    if(result === '1'){
        texto.innerHTML = 'Um dos soldados te acertou'
        img.src = '../../img/link_e_zelda/fase_1/escolha_1.gif'
        button.onclick = seguirEmFrente
    }else if(result === '2'){
        texto.innerHTML = 'Você encontrou a Master Sword'
        img.src = '../../img/link_e_zelda/fase_1/escolha_2.gif'
        button.onclick = entrarNoCastelo
    }
}

function inserirDado(textoUsuario){
    return prompt(textoUsuario)
}

function seguirEmFrente(){
    let result = prompt('O que você gostaria de fazer agora?\n1. Tentar entrar no castelo novamente\n2. Ir para a floresta em busca da Master Sword')

    if(result === '1'){
        texto.innerHTML = 'GAME OVER<br>Você foi capturado'
        img.src = '../../img/link_e_zelda/fase_1/game_over.gif'
        button.value = 'Recomeçar'
        button.onclick = gameOver
    }else {
        texto.innerHTML = 'Você encontrou a Master Sword agora siga para o castelo Hyrule'
        img.src = '../../img/link_e_zelda/fase_1/escolha_2.gif'
        button.onclick = entrarNoCastelo
    }
}

function entrarNoCastelo(){
    texto.innerHTML = 'Você venceu os guardas!'
    img.src = '../../img/link_e_zelda/fase_1/entrada_castelo.gif'
    button.onclick = redirecionar
    button.value = 'Fase 2'

}

function redirecionar(){
    location.href = './fase_2.html'
}

function gameOver(){
    location.href = '../../index.html'
}
