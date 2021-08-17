var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus()

function iniciarFase(){
    let result = prompt('Você têm duas escolhas:\n1. Continuar os enfrentando\n2. Tentar fugir e desvia-los fora das grades')
    if(result === '1'){
        texto.innerHTML = 'Vocêconseguiu vence-los'
        img.src = '../../img/mario_e_peach/fase_2/escolha_1.gif'
        button.onclick = redirecionar
    }else {
        texto.innerHTML = 'GAME OVER - Você caiu em umpoço de lava que fica abaix das grades'
        img.src = '../../img/mario_e_peach/fase_2/escolha_2.gif'
        button.onclick = redirecionarInicio
    }

function redirecionarInicio(){
        button.onclick = location.href = '../../index.html'
}

function redirecionar(){
        button.onclick = location.href = './fase_3.html'
    }
}

