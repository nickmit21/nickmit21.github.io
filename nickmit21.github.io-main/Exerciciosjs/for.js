texto='hello word'
document.write('texto maiusculo:'+ texto.toUpperCase()+'<br>')
document.write('texto minusculo:'+ texto.toLowerCase())
document.write('<br>tamanho do texto:'+ texto.length)
document.write('<br> primeiro caractere:'+ texto[0])
document.write('<br> ultimo caractere:'+ texto[texto.length-1])
document.write(+texto.slice(6, 8))

document.write('<br> percorrer texto:<br>')
for(i=0; i<texto.length; i++){
    document.write(texto[i]+'<br>')
}
palavras=texto.split(" ") // separaçao de palavras
for(i=0; i<palavras.length; i++){
    document.write(palavras[i]+'<br>')
}