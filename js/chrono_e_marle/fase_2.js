var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play');
button.focus();

function iniciarFase(){
    let textoUsuario ='O que você gostaria de fazer?\n1. Entrar na tenda\n2. Seguir procurando Marle';
    let result = inserirDado(textoUsuario);

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida');
        result =  inserirDado(textoUsuario);
    }

    if(result === '1'){
        texto.innerHTML = 'A tenda é de um ilusionista e é realmente um lugar assustador e também misterioso, mas Marle não está aqui';
        img.src = '../../img/chrono_e_marle/fase_2/escolha_01.gif';
        button.onclick = iniciarFase;
    }else if(result === '2'){
        texto.innerHTML = 'Você se deparou com um desafiante, sua mãe lhe avisou dos perigos em andar por lugares que não conhece, agora você deve arcar com as consequências dessa escolha.'
        img.src = '../../img/chrono_e_marle/fase_2/escolha_2.gif';
        button.onclick = redirecionar;
    }
}

function inserirDado(textoUsuario){
    return prompt(textoUsuario);
}

function redirecionar(){
        button.onclick = location.href = './fase_3.html';
}

