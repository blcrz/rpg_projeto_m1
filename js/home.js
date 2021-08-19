function comecarJogo(){
    alert('Para jogar você precisará digitar o número da opção escolhida no campo que aparecerá.\nSuas escolhas podem te levar a diferentes caminhos.\n Boa sorte!');
    let textoUsuario = 'Escolha a história que quer jogar:\n1. Zelda e Link.\n2. Chrono e Marle.\n3. Mario e Peach';
    let result = inserirDado(textoUsuario);

    while(!['1','2','3'].includes(result) && result !== null){
        alert('Insira uma opção válida');
        result =  inserirDado(textoUsuario);
    }

    if(result === '1'){
        location.href = './html/link_e_zelda/fase_1.html';
    }else if(result === '2'){
        location.href = './html/chrono_e_marle/fase_1.html';
    }else if(result === '3'){
        location.href = './html/mario_e_peach/fase_1.html';
}
}

function inserirDado(textoUsuario){
    return prompt(textoUsuario);
}