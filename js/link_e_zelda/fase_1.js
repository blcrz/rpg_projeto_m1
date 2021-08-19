var texto = document.getElementById('paragrafo');
var img = document.getElementById('imagem');
var button = document.getElementById('play');
button.focus();

function iniciarFase(){
    let textoUsuario = 'Você têm duas escolhas:\n1. Entrar no castelo Hyrule em busca de Zelda.\n2. Ir para Lost Woods em busca da Master Sword (uma espada muito poderosa que pode conceder poderes como força e agilidade a quem a encontrar).';
    let result = inserirDado(textoUsuario);

    // while(result !== '1' && result !=='2'){
    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida')
        result =  inserirDado(textoUsuario)
    }

    if(result === '1'){
        texto.innerHTML = 'Cuidado! Você não possui autorização para entrar no castelo, um dos guardas te acertou.'
        img.src = '../../img/link_e_zelda/fase_1/escolha_1.gif'
        button.onclick = seguirEmFrente
    }else if(result === '2'){
        texto.innerHTML = 'Você encontrou a lendária espada Master Sword.<br> Apesar de Lost Woods ser um local onde muitas pessoas entram e nunca mais são vistas, você parece ter sido guiado pela força dos bons espíritos que ali habitam.';
        img.src = '../../img/link_e_zelda/fase_1/escolha_2.gif';
        button.onclick = entrarNoCastelo;
    }
}

function seguirEmFrente(){
    let textoUsuario = 'O que você gostaria de fazer agora?\n1. Tentar entrar no castelo novamente agora que você sabe o número de guardas e as possibilidades que tem de escapar.\n2. Ir para Lost Woods em busca da Master Sword (uma espada muito poderosa que pode conceder poderes como força e agilidade a quem a encontrar).';
    let result = inserirDado(textoUsuario);

    while(!['1','2'].includes(result) && result !== null){
        alert('Insira uma opção válida');
        result =  inserirDado(textoUsuario);
    }

    if(result === '1'){
        texto.innerHTML = 'GAME OVER<br>Mesmo achando que poderia enganar os aguardas e adentrar o castelo você foi visto e capturado.';
        img.src = '../../img/link_e_zelda/fase_1/game_over.gif';
        button.value = 'Recomeçar';
        button.onclick = gameOver;
    }else if(result === '2'){
        texto.innerHTML = 'Você encontrou a lendária espada Master Sword.<br> Apesar de Lost Woods ser um local onde muitas pessoas entram e nunca mais são vistas, você parece ter sido guiado pela força dos bons espíritos que ali habitam.';
        img.src = '../../img/link_e_zelda/fase_1/escolha_2.gif';
        button.onclick = entrarNoCastelo;
    }
}

function entrarNoCastelo(){
    texto.innerHTML = 'Com os poderes que a Master Sword lhe concedeu você conseguiu derrotar os guardas e entrar no castelo, tenha cuidado em suas próximas ações, pois agora Agahim já sabe que você é uma ameaça ao seu golpe para se tornar Rei de Hyrule.';
    img.src = '../../img/link_e_zelda/fase_1/entrada_castelo.gif';
    button.onclick = redirecionar;
    button.value = 'Fase 2';
}

function inserirDado(textoUsuario){
    return prompt(textoUsuario)
}

function redirecionar(){
    location.href = './fase_2.html';
}

function gameOver(){
    location.href = '../../index.html';
}
