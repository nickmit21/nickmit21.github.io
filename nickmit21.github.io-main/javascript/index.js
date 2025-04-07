 a = 2
 b = 2
 c = a+b
//alert(a+b)
//alert(c)
//alert("a soma de "+a+" mais "+b+" = "+c)
//document.write("oi")
//document.write("tchau")
//console.log("alguma")
//function teste(){
    x="azul"
    y=5
    //alert("mensagem: "+ x + y)
//}

//function ola(){
    //nome = document.getElementById("nome").value
    //alert("bem vindo " + nome)
    //document.write("bem vindo " + nome)
    //nome = document.getElementById("saida").innerHTML= 'boas vindas '+nome+'!'
//}

function cad(){
    ele = document.getElementById("ele").value
    email = document.getElementById("email").value
    senha = document.getElementById("senha").value
    senha2 = document.getElementById("senha2").value

    if(ele == ''){
        resultado='nome invalido'
    }else if(email==''){
        resultado='email invalido'
    }else if(senha.length < 4){
        resultado='a senha deve ter pelo menos 4 ou mais caracteres'
    }else if(senha != senha2){
        resultado="as senhas nao correspondem"
    }else{
        resultado='cadastro validado com sucesso ' + ele
    }

    document.getElementById("cadastro").innerHTML= resultado
    //concluido = document.getElementById("cadastro").innerHTML= 'cadastro de '+ele+' registrado.(email: '+email+")"
}


