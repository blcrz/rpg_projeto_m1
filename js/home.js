function comecarJogo(){

    let result = prompt('Escolha a história que quer jogar:\n1. Zelda e Link.\n2. Chrono e Marle.\n3. Mario e Peach')

    if(result === '1'){
        location.href = './html/link_e_zelda/fase_1.html'
    }else if(result === '2'){
        location.href = './html/chrono_e_marle/fase_1.html'
    }else if(result === '3'){
        location.href = './html/mario_e_peach/fase_1.html'
}
}