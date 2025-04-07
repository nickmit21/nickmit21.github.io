cartas = document.getElementById('cartas');

c1 = -1;
c2 = -1;
paresEncontrados = 0;
tentativas = 0;
maxTentativas =100; // Defina o número máximo de tentativas aqui

emogi = ['😘','😘','😀','😀','😂','😂','🤩','🤩','😴','😴','🥶','🥶','🥵','🥵','🤠','🤠','🤑','🤑','😐','😐','🙃','🙃','😇','😇','😎','😎','😈','😈','😱','😱','🤓','🤓',];

iniciar();

function iniciar(){
    emogi = emogi.sort(() => 0.5 - Math.random());

    // Mostrar cartas na tela
    for(i=0; i<emogi.length; i++){
        cartas.innerHTML += '<div id="carta'+i+'" onclick="revelar('+i+')" class="card"><i class="fa fa-question"></i></div>';
    }

    // Inicializa o contador de tentativas
    atualizarContador();
    atualizarMaxTentativas(); // Exibe o limite de tentativas (opcional)
}

function revelar(i){
    const carta = document.getElementById('carta'+i);

    // Verifica se o jogo já acabou
    if (paresEncontrados === emogi.length / 2 || tentativas >= maxTentativas) {
        return;
    }

    // Verifica se a carta já foi acertada ou já está revelada
    if (carta.classList.contains('acertada') || carta.innerHTML !== '<i class="fa fa-question"></i>') {
        return;
    }

    if( c1 == -1 ){
        c1 = i;
        carta.innerHTML = emogi[i];
    } else if( c2 == -1 ){
        c2 = i;
        carta.innerHTML = emogi[i];
        tentativas++; // Incrementa o contador de tentativas
        atualizarContador();

        // Verifica se houve um acerto após um pequeno delay
        setTimeout(() => {
            const carta1 = document.getElementById('carta'+c1);
            const carta2 = document.getElementById('carta'+c2);

            if( emogi[c1] == emogi[c2] ){
                console.log('Acerto!');
                carta1.classList.add('acertada'); // Adiciona classe para desabilitar clique
                carta2.classList.add('acertada');
                carta1.classList.add('par-encontrado'); // Nova classe para feedback visual
                carta2.classList.add('par-encontrado');
                paresEncontrados++;
                verificarFimDoJogo();
            } else {
                carta1.innerHTML = '<i class="fa fa-question"></i>';
                carta2.innerHTML = '<i class="fa fa-question"></i>';
            }
            c1 = -1;
            c2 = -1;
        }, 700); // Delay de 1 segundo para mostrar a segunda carta
    }
}

function atualizarContador() {
    con= document.getElementById('contador');
    if(con){
        con.textContent = `Tentativas: ${tentativas}`;
    }
}

function atualizarMaxTentativas() {
    Ten= document.getElementById('max-tentativas'); // Crie este elemento no HTML
    if (Ten) {
        Ten.textContent = `Máximo de Tentativas: ${Ten}`;
    }
}

function verificarFimDoJogo() {
    if (paresEncontrados === emogi.length / 2) {
        alert(`Parabéns! Você encontrou todos os pares em ${tentativas} tentativas.`);
        // Lógica para reiniciar o jogo ou exibir uma mensagem de vitória mais elaborada
    } else if (tentativas >= maxTentativas) {
        alert(`Fim de jogo! Você excedeu o número máximo de ${maxTentativas} tentativas. Tente novamente!`);
        // Lógica para reiniciar o jogo ou exibir uma mensagem de derrota
    }
}
