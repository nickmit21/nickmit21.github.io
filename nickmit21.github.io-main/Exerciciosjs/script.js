function ex1(){
    nome = document.getElementById('ex1-nome').value
    document.getElementById('ex1-saida').innerHTML = 'Olá '+nome+'!'
}

function ex2(){
    numero=parseInt(document.getElementById('ex2-numero').value)
    numero2=parseInt(document.getElementById('ex2-numero2').value)
    document.getElementById('ex2-saida').innerHTML= numero+"+"+numero2+"="+(numero+numero2)
}
  
function ex3(){
    numeroex3 = document.getElementById('ex3-numero').value
     if(numeroex3>0){
        resultado="ele é positivo"
     }else{
        resultado="ele é negativo"
     }
     document.getElementById('ex3-saida').innerHTML=resultado
}

function ex4(){
    texto = document.getElementById('ex4-texto').value
    document.getElementById('ex4-saida').innerHTML="o tamanho do text é "+texto.length
}

function ex5(){
    numero5=parseInt(document.getElementById('ex5-numero').value)
    for(i=1; i<=numero5; i++){
        document.getElementById('ex5-saida').innerHTML+=" "+i
    }
    
}

function ex6(){

}

function ex7(){
    numero7=['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20',]
    palavra=numero7[Math.floor(Math.random() * numero7.length)]
    document.getElementById('ex7-saida').innerHTML=palavra
}
lista8=[]
function ex8(){
    numero8=parseInt(document.getElementById('ex8-numero').value) 
    lista8.push(numero8)
    document.getElementById('ex8-saida').innerHTML=lista8
}

numero9=[]
maior=0
menor=0
function ex9(){
    palavra9=parseInt(document.getElementById('ex9-numero').value)
    numero9.push(palavra9)
    pala='quantidade:'+numero9.length+'<br>'
    if(palavra9.length==1){
        maior=palavra9
        menor=palavra9
    }
    if(palavra9>maior){
        maior=palavra9
    }
    ma= 'maior numero:'+maior+'<br>'
    if(palavra9<menor){
        menor=palavra9
    }
    me= 'menor numero:'+menor+'<br>'
    sn='a soma dos numeros é:'+numero9.reduce((acumulador,valorAtual)=>acumulador + valorAtual)+'<br>'
    media='a media dos numeros é:'+numero9.reduce((acumulador,valorAtual)=>acumulador + valorAtual) / numero9.length
    document.getElementById('ex9-saida').innerHTML=pala+ma+me+sn+media
    //math.max(...numero9)
    //math.min(...numero9)
}

lista10=[]
function ex10(){
    texto10 = document.getElementById('ex10-texto').value
    lista10+=texto10
    qt='quantidade de caracteres: '+lista10.length+'<br>'
    te=texto10.split(' ')
    palav='quantidade de palavras: '+te.length+'<br>'
    pc='primeiro caracter: '+lista10[0]+'<br>'
    uc='ultimo caracter: '+lista10[lista10.length-1]+'<br>'
    vogais='aeiouAEIOUéá'
    con=0
    
    for(i=0;i<texto10.length;i++){
        if(vogais.indexOf(texto10[i])!=-1){
            con++
        }
    }
    co='quantidade de vogais '+con
    document.getElementById('ex10-saida').innerHTML=qt+palav+pc+uc+co

}

function ex11(){
    texto11 = document.getElementById('ex11-texto').value
    imagem='<img src="'+texto11+'">'
    document.getElementById('ex11-saida').innerHTML=imagem
}

conta=0
setInterval(()=>{
    conta++
    document.getElementById('ex12-saida').innerHTML=conta
},1000)

dias=['domingo','segunda','terça','quarta','quinta','sexta','sabado']
meses=['1','2','3','4','5','6','7','8','9','10','11','12']
setInterval(()=>{
    hoje= new Date();
    dia=dias[hoje.getDay()]+'<br>'
    mes=meses[hoje.getMonth()]+'<br>'
    ano=hoje.getFullYear()+'<br>'
    hora=hoje.getHours()+':'
    minuto=hoje.getMinutes()+':'
    segundo=hoje.getSeconds()
    document.getElementById('ex13-saida').innerHTML=dia+mes+ano+hora+minuto+segundo
},1000)

nomel=[]
idadel=[]
cidl=[]
function ex14(){
    nome = document.getElementById('ex14-nome').value
    idade = parseInt(document.getElementById('ex14-idade').value)
    cid = document.getElementById('ex14-cid').value
    nomel.push(nome)
    idadel.push(idade)
    cidl.push(cid)
    pessoa='pessoas cadastradas'
    pessoa+='<table border><tr><th>nome</th><th>idade</th><th>cidade</th>'
    for(i=0;i<nomel.length;i++){
        pessoa+='<tr><td>'+nomel[i]+'</td><td>'+idadel[i]+'</td><td>'+cidl[i]+'</td></tr>'
    }
    pessoa+='</table>'
    document.getElementById('ex14-saida').innerHTML=pessoa
}

jokenpo=['pedra','papel','tesoura']
po=''
function ex15pa(){     
    jo=jokenpo[Math.floor(Math.random() * jokenpo.length)]
    if(jo==jokenpo[1]){
        po='empate'
    }
    else if(jo==jokenpo[0]){
        po='ganhou'
    }
    else if(jo==jokenpo[2]){
        po='perdeu'
    }
    document.getElementById('ex15-saida').innerHTML=po
}
function ex15pe(){     
    jo=jokenpo[Math.floor(Math.random() * jokenpo.length)]
    if(jo==jokenpo[0]){
        po='empate'
    }
    else if(jo==jokenpo[2]){
        po='ganhou'
    }
    else if(jo==jokenpo[1]){
        po='perdeu'
    }
    document.getElementById('ex15-saida').innerHTML=po
}
function ex15te(){     
    jo=jokenpo[Math.floor(Math.random() * jokenpo.length)]
    if(jo==jokenpo[2]){
        po='empate'
    }
    else if(jo==jokenpo[1]){
        po='ganhou'
    }
    else if(jo==jokenpo[0]){
        po='perdeu'
    }
    document.getElementById('ex15-saida').innerHTML=po
}