cartas = document.getElementById('cartas')

c1 = -1
c2 = -1

emogi = ['😘','😘','😀','😀','😂','😂','🤩','🤩','😴','😴','🥶','🥶','🥵','🥵','🤠','🤠','🤑','🤑','😐','😐','🙃','🙃','😇','😇','😎','😎','😈','😈','😱','😱','🤓','🤓',]

iniciar()

function iniciar(){
    emogi = emogi.sort(() => 0.5 - Math.random())

    // Mostrar cartas na tela
    for(i=0; i<emogi.length; i++){
        cartas.innerHTML += '<div id="carta'+i+'" onclick="revelar('+i+')" class="card"><i class="fa fa-question"></i></div>'
    }

}

function revelar(i){

    if( c1 == -1 ){

        c1 = i
        document.getElementById('carta'+i).innerHTML = emogi[i]

    }else if( c2 == -1 ){

        c2 = i
        document.getElementById('carta'+i).innerHTML = emogi[i]

    }else{

        if( emogi[c1] == emogi[c2] ){
            ('Acerto!')
        }else{
            document.getElementById('carta'+c1).innerHTML = '<i class="fa fa-question"></i>'
            document.getElementById('carta'+c2).innerHTML = '<i class="fa fa-question"></i>'
        }
        c1 = -1
        c2 = -1

    }
    
    

}
  
