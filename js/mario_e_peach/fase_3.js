var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus()

function iniciarFase(){
    let textoUsuario  = 'Você têm duas escolhas:\n1. Priorizar a cautela e pegar as moedas qeu estão por toda a fase\n2. Priorizar a agilidade e correr pela fase tentando desviar dos obstáculos'
    let result = inserirDado(textoUsuario)

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida')
        result =  inserirDado(textoUsuario)
    }

    if(result === '1'){
        texto.innerHTML = 'GAME OVER - Você foi esmagado mesmo  tendo cautela, pois os obstáculos foram muito rápidos'
        img.src = '../../img/mario_e_peach/fase_3/escolha_1.gif'
        button.onclick = gameOver
    }else if(result === '2'){
        texto.innerHTML = 'Você conseguiu passar pelos obstáculos com agilidade e desvia-los com sucesso!'
        img.src = '../../img/mario_e_peach/fase_3/escolha_2.gif'
        button.onclick = finalizarJogo
    }

function inserirDado(textoUsuario){
        return prompt(textoUsuario)
    }

function gameOver(){
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

