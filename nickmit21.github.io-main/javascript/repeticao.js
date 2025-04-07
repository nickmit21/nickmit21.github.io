for(i=0; i<5; i++){
    document.write('oi<br>')
    document.write('tchau<br>')
    document.write('numero'+i+"<br>")
}

function olha(){
    
    tab= parseInt(document.getElementById("tab").value)
    for(i=0; i<11; i++){
        document.getElementById("olhar").innerHTML+=(tab+'x'+i+'='+tab*i+'<br>')
    }
}