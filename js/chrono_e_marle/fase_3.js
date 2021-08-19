var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play');
button.focus();

function iniciarFase(){
    let textoUsuario = 'Você têm duas escolhas:\n1. Enfrentar o desafio\n2. Tentar fugir';
    let result = inserirDado(textoUsuario);

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida');
        result =  inserirDado(textoUsuario);
    }

    if(result === '1'){
        texto.innerHTML = 'Você venceu!';
        img.src = '../../img/chrono_e_marle/fase_3/escolha_01.gif';
        button.onclick = encontrarMarle;
    }else if(result === '2'){
        texto.innerHTML = 'GAME OVER<br>Você tentou fugir, mas foi pego';
        img.src = '../../img/chrono_e_marle/fase_3/escolha_2.gif';
        button.onclick = redirecionar;
    }
}

function encontrarMarle(){
    texto.innerHTML = 'Você encontrou Marle. <br> Aproveitem a festa!';
    button.value = 'Recomeçar';
    button.onclick = redirecionar;
    img.src = '../../img/chrono_e_marle/fase_3/chrono_e_marle_fim_de_jogo.gif';
    img.style.width = '25%';
}

function inserirDado(textoUsuario){
    return prompt(textoUsuario);
}

function redirecionar(){
    button.onclick = location.href = '../../index.html';
}