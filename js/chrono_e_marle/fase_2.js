var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus();

function iniciarFase(){
    let result = prompt('Você têm duas escolhas:\n1. Entrar na tenda\n2. Seguir procurando Marle')
    if(result === '1'){
        texto.innerHTML = 'Nada aqui'
        img.src = '../../img/chrono_e_marle/fase_2/escolha_01.gif'
        button.onclick = iniciarFase
    }else {
        texto.innerHTML = 'Você se deparou com um desafiante'
        img.src = '../../img/chrono_e_marle/fase_2/escolha_2.gif'
        button.onclick = redirecionar
    }

function redirecionar(){
        button.onclick = location.href = './fase_3.html'
    }
}

