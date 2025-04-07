palavras=['passaro','peixe-boi','gato preto']
palavra=palavras[Math.floor(Math.random() * palavras.length)]
vida=5
forca=[]
erros=[]

for(i=0; i<palavra.length; i++){ 
    
    if(palavra[i]==' '){
        forca.push('/')
    }else if(palavra[i]=='-'){
        forca.push('-')
    }else{
        forca.push('_')
    }
}
atualizarForca()
function atualizarForca(){
    atualizarpersonagem()
    if(vida>0){
         document.getElementById('forca').innerHTML='<div> ERROS:'+erros+'</div><div class=personagem>'+personagem+'</div><div>'+forca.join(' ')+'</div><br>'
    }else{
        document.getElementById('forca').innerHTML='<div>você perdeu, a palavra era <b>'+palavra+'<b>.</div><br>'
    }
    document.getElementById('letra').value =''
}

function enviarLetra(){
    letra= document.getElementById('letra').value.toLowerCase()

    encontrou=false
    for(i=0; i<palavra.length; i++){
        if(letra==palavra[i]){
            forca[i]=letra
            encontrou=true
        }
    }
    if(encontrou==false){
       
        if(erros.indexOf(letra)==-1){
            vida-=1
            erros.push(letra)
        }else{
            alert('essa letra já foi, por favor tente outra letra')
        }
    }
    atualizarForca()

}
function atualizarpersonagem(){

        if(vida==5){
            personagem=`
         <br>     &nbsp &nbsp____
         <br>   &nbsp  |&nbsp &nbsp &nbsp &nbsp     |
         <br>   &nbsp  |
         <br>   &nbsp  |
         <br>   _|_
            `

        }else if(vida==4){
            personagem=`
            <br>    &nbsp &nbsp____
            <br>  &nbsp  |&nbsp &nbsp &nbsp &nbsp     |
            <br>   &nbsp |  &nbsp &nbsp &nbsp &nbspo
            <br>   &nbsp |
            <br>  _|_
            `

        }else if(vida==3){
            personagem=`
            <br>    &nbsp &nbsp____
            <br>  &nbsp  |&nbsp &nbsp &nbsp &nbsp     |
            <br>   &nbsp | &nbsp &nbsp &nbsp &nbspo
            <br>   &nbsp | &nbsp &nbsp &nbsp &nbsp |
            <br>  _|_
            `

        }else if(vida==2){
            personagem=`
            <br>    &nbsp &nbsp____
            <br>  &nbsp  |&nbsp &nbsp &nbsp &nbsp     |
            <br>   &nbsp |  &nbsp &nbsp &nbsp &nbspo
            <br>   &nbsp | &nbsp &nbsp &nbsp &nbsp |
            <br>  _|_ &nbsp &nbsp &nbsp/ \\
            `

        }else if(vida==1){
            personagem=`
            <br>    &nbsp &nbsp____
            <br>  &nbsp  |&nbsp &nbsp &nbsp &nbsp     |
            <br>   &nbsp |  &nbsp &nbsp &nbsp &nbspo
            <br>   &nbsp | &nbsp &nbsp &nbsp &nbsp/|\\
            <br>  _|_ &nbsp &nbsp &nbsp/ \\
            `

        }
        
}
