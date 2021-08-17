var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus();

function iniciarFase(){
    let result = prompt('Você têm duas escolhas:\n1. Enfrentar o desafio\n2. Tentar fugir')
    if(result === '1'){
        texto.innerHTML = 'Você venceu!'
        img.src = '../../img/chrono_e_marle/fase_3/escolha_1.gif'
        button.onclick = encontrarMarle
    }else {
        texto.innerHTML = 'GAME OVER\nVocê tentou fugir, mas foi pego'
        img.src = '../../img/chrono_e_marle/fase_1/escolha_1.gif'
        button.onclick = redirecionar
    }
}

function encontrarMarle(){
    texto.innerHTML = ''
    button.value = 'Recomeçar'
    button.onclick = redirecionar
    img.src = '../../img/chrono_e_marle/fase_3/chrono_encontrar_marle.gif'
    setTimeout(() => {
       img.src = '../../img/chrono_e_marle/fase_3/chrono_e_marle_fim_de_jogo1.gif'
       img.id = 'imgFinal'
    }, 4700);
}

function redirecionar(){
    button.onclick = location.href = '../../index.html'
}