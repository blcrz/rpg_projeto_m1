var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus()

function iniciarFase(){
    let result = prompt('Você têm duas escolhas:\n1. Priorizar a cautela e pegar as moedas qeu estão por toda a fase\n2. Priorizar a agilidade e correr pela fase tentando desviar dos obstáculos')
    if(result === '1'){
        texto.innerHTML = 'GAME OVER - Você foi esmagado mesmo  tendo cautela, pois os obstáculos foram muito rápidos'
        img.src = '../../img/mario_e_peach/fase_3/escolha_1.gif'
        button.onclick = redirecionarInicio
    }else {
        texto.innerHTML = 'Você conseguiu passar pelos obstáculos com agilidade e desvia-los com sucesso!'
        img.src = '../../img/mario_e_peach/fase_3/escolha_2.gif'
        button.onclick = finalizarJogo
    }

function redirecionarInicio(){
        button.onclick = location.href = '../../index.html'
}

function finalizarJogo(){
    texto.innerHTML = 'Parabéns, você conseguiu!'
    img.src = '../../img/mario_e_peach/fase_3/boss.gif'
    button.onclick = redirecionar
    }
}
 function redirecionar(){
    texto.innerHTML = ''
    img.src = '../../img/mario_e_peach/fase_3/final_peach.gif'
    button.onclick = reiniciar
 }

 function reiniciar(){
    var button= document.getElementById('play')
    button.onclick = location.href = '../../index.html'
 }

