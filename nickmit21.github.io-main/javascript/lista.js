/*frutas=['maça','banana','laranja', 'uva']
frutas=//ver lista completa
frutas[1]//ver o que esta nessa posiçao
frutas.indexOf('banana')//ver qual posiçao esta
frutas.length//ver o tamanho da lista
frutas.push('melancia')//adicionar mais itens na lista
frutas[2]=('morango') //adicionar item na quele lugar na lista, mas se tiver ja algum item ele vai trocar
frutas.pop()//remove o ultimo item da lista
frutas.splice(1, 1)//remove qual posiçao voce quer
frutas.splice(frutas.indexOF('uva'), 1)//remove o item, caso nao saiba a posicao

nomes=['nicolas', 'pablo', 'ana', 'matheus']
    for(i=0; i<nomes.length; i++){
        document.write(frutas[i]+'<br>')
    }
*/
mochila = []

function carregarLista(){
    html = ''
    for(i=0; i<mochila.length; i++){
        html += `<li><div id="item`+i+`">`+mochila[i]+`</div>
        <button id="edit" onclick="editItem(`+i+`)"><i class="fa fa-pencil-square" aria-hidden="true"></i></button>
        <button id="delete" onclick="deleteItem(`+i+`)"><i class="fa fa-trash" aria-hidden="true"></i></button></li>`
    }
    document.getElementById('lista').innerHTML = html
    document.getElementById('quantidade').innerHTML = '('+mochila.length+'/4 itens)'
    document.getElementById('item').value = ''
}

function validarItem(){
    item = item[0].toUpperCase() + item.slice(1).toLowerCase()

    if(item == ''){
        alert('Campo vazio.')
        return false
    }else if(mochila.indexOf(item) != -1){
        alert('Este item já está na lista.')
        return false
    }else{
        return true
    }

}

function addItem(){
    item = document.getElementById('item').value

    if(validarItem()){
        if(mochila.length < 4){
            mochila.push(item)
            carregarLista()
        }else{
            alert('A mochila está cheia.')
        }
    }
}

function deleteItem(i){
    mochila.splice(i,1)
    carregarLista()
}

function editItem(i){
    if(document.getElementById('item'+i).innerHTML == mochila[i]){
        document.getElementById('item'+i).innerHTML = '<input id="texto'+i+'" type="text" value="'+mochila[i]+'">'
    }else{
        item = document.getElementById('texto'+i).value
        if(validarItem()){
            mochila[i] = item
            carregarLista()
        }
    }
}
