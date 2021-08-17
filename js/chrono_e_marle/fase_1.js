var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus();

function iniciarFase(){
    let result = prompt('Você têm duas escolhas:\n1. Ir para esqueda\n2. Ir para direita')
    if(result === '1'){
        texto.innerHTML = 'Nada aqui, tente ir para o outro lado da vila'
        img.src = '../../img/chrono_e_marle/fase_1/escolha_1.gif'
        button.onclick = iniciarFase
    }else {
        texto.innerHTML = 'Você encontrou uma tenda misteriosa'
        img.src = '../../img/chrono_e_marle/fase_1/escolha_2.gif'
        button.onclick = redirecionar
    }

function redirecionar(){
        button.onclick = location.href = './fase_2.html'
    }
}

