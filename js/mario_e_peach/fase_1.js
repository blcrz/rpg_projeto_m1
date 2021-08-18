var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus();

function iniciarFase(){
    let textoUsuario ='Você têm duas escolhas:\n1. Seguir em frente e não enfrentar os Koopa Troopa\n2. Subir nas grades e enfrentas os Koopa Troopa'
    let result = inserirDado(textoUsuario)

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida')
        result =  inserirDado(textoUsuario)
    }

    if(result === '1'){
        texto.innerHTML = 'GAME OVER - Você caiu em um poço de lava'
        img.src = '../../img/mario_e_peach/fase_1/escolha_1_game_over.gif'
        button.onclick = redirecionarInicio
    }else if(result === '2'){
        texto.innerHTML = 'Você consegiu passar pelo primeiro desafiante, mas ainda tem muitos deles à frente'
        img.src = '../../img/mario_e_peach/fase_1/escolha_2.gif'
        button.onclick = redirecionar
    }

function inserirDado(textoUsuario){
        return prompt(textoUsuario)
    }

function redirecionarInicio(){
        button.onclick = location.href = '../../index.html'
}

function redirecionar(){
        button.onclick = location.href = './fase_2.html'
    }
}

