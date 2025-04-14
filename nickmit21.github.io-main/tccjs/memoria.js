cartas = document.getElementById('cartas');

c1 = -1;
c2 = -1;
paresEncontrados = 0;
tentativas = 0;
maxTentativas =100;

emogi = ['😘','😘','😀','😀','😂','😂','🤩','🤩','😴','😴','🥶','🥶','🥵','🥵','🤠','🤠','🤑','🤑','😐','😐','🙃','🙃','😇','😇','😎','😎','😈','😈','😱','😱','🤓','🤓',];

iniciar();

function iniciar(){
    emogi = emogi.sort(() => 0.5 - Math.random());

    for(i=0; i<emogi.length; i++){
        cartas.innerHTML += '<div id="carta'+i+'" onclick="revelar('+i+')" class="card"><i class="fa fa-question"></i></div>';
    }

    atualizarContador();
}

function revelar(i){
    const carta = document.getElementById('carta'+i);

    if (paresEncontrados === emogi.length / 2 || tentativas >= maxTentativas) {
        return;
    }

    if (carta.classList.contains('par-encontrado') || carta.innerHTML !== '<i class="fa fa-question"></i>') {
        return;
    }

    if( c1 == -1 ){
        c1 = i;
        carta.innerHTML = emogi[i];
        carta.style.backgroundImage = 'none';
    } else if( c2 == -1 ){
        c2 = i;
        carta.innerHTML = emogi[i];
        carta.style.backgroundImage = 'none';
        tentativas++;
        atualizarContador();

        setTimeout(() => {
            const carta1 = document.getElementById('carta'+c1);
            const carta2 = document.getElementById('carta'+c2);

            if( emogi[c1] == emogi[c2] ){
                carta1.classList.add('par-encontrado');
                carta2.classList.add('par-encontrado');
                paresEncontrados++;
                verificarFimDoJogo();
            } else {
                carta1.innerHTML = '<i class="fa fa-question"></i>';
                carta2.innerHTML = '<i class="fa fa-question"></i>';
                carta1.style.backgroundImage = "url('https://i.pinimg.com/564x/41/34/9b/41349b20dcade9a639847b531d507e3a.jpg')"; // Adiciona a imagem de fundo novamente
                carta2.style.backgroundImage = "url('https://i.pinimg.com/564x/41/34/9b/41349b20dcade9a639847b531d507e3a.jpg')"; // Adiciona a imagem de fundo novamente
            }
            c1 = -1;
            c2 = -1;
        }, 700);
    }
}

function atualizarContador() {
    con= document.getElementById('contador');
    if(con){
        con.textContent = `Tentativas: ${tentativas}`;
    }
}

function verificarFimDoJogo() {
    if (paresEncontrados === emogi.length / 2) {
        alert(`Parabéns! Você encontrou todos os pares em ${tentativas} tentativas. Avance para o próximo nível.`);
    }
}