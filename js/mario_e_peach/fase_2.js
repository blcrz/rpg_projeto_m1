var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus()

function iniciarFase(){
    let textoUsuario  = 'Você têm duas escolhas:\n1. Continuar os enfrentando\n2. Tentar fugir e desvia-los fora das grades'
    let result = inserirDado(textoUsuario)

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida')
        result =  inserirDado(textoUsuario)
    }

    if(result === '1'){
        texto.innerHTML = 'Você conseguiu vence-los'
        img.src = '../../img/mario_e_peach/fase_2/escolha_1.gif'
        button.onclick = redirecionar
    }else if(result === '2'){
        texto.innerHTML = 'GAME OVER - Você caiu em umpoço de lava que fica abaixo das grades'
        img.src = '../../img/mario_e_peach/fase_2/escolha_2.gif'
        button.onclick = gameOver
    }

function inserirDado(textoUsuario){
        return prompt(textoUsuario)
    }

function gameOver(){
        button.onclick = location.href = '../../index.html'
}

function redirecionar(){
        button.onclick = location.href = './fase_3.html'
    }
}

