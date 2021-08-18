var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play')
button.focus();

function iniciarFase(){
    let textoUsuario ='Você têm duas escolhas:\n1. Entrar na tenda\n2. Seguir procurando Marle'
    let result = inserirDado(textoUsuario)

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida')
        result =  inserirDado(textoUsuario)
    }

    if(result === '1'){
        texto.innerHTML = 'Nada aqui'
        img.src = '../../img/chrono_e_marle/fase_2/escolha_01.gif'
        button.onclick = iniciarFase
    }else if(result === '2'){
        texto.innerHTML = 'Você se deparou com um desafiante'
        img.src = '../../img/chrono_e_marle/fase_2/escolha_2.gif'
        button.onclick = redirecionar
    }
}

function inserirDado(textoUsuario){
    return prompt(textoUsuario)
}

function redirecionar(){
        button.onclick = location.href = './fase_3.html'
}

