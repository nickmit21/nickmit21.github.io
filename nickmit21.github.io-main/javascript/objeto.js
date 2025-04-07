pessoas=[]

telalogin()
function telacadastro(){
    document.getElementById('formulario').innerHTML=`

    <h1>cadastro</h1>
    <input id="nome" type="text" placeholder="nome"><br>
    <input id="sobrenome" type="text" placeholder="sobrenome"><br>
    <input id="idade" type="number" placeholder="idade"><br>
    <input id="email" type="text" placeholder="email"><br>
    <input id="senha" type="password" placeholder="senha"><br>
    <input id="senhaconf" type="password" placeholder="confirmar senha"><br>
    <button id="cadastro" onclick="cadastrarpessoa()">cadastrar</button>

    <br><br><button id="login" onclick="telalogin()">já tenho uma conta</button>
    `
}

function telalogin(){
    document.getElementById('formulario').innerHTML=`

     <h1>login</h1>
    <input id="email" type="text" placeholder="email"><br>
    <input id="senha" type="password" placeholder="senha"><br>
    <button id="cadastro" onclick="entrar()">entrar</button>

    <br><br><button id="login" onclick="telacadastro()">criar uma conta</button>
    `
}

function cadastrarpessoa(){
    _nome=document.getElementById('nome').value
    _sobrenome=document.getElementById('sobrenome').value
    _idade=parseInt(document.getElementById('idade').value)
    _email=document.getElementById('email').value
    _senha=document.getElementById('senha').value
    _senhaconf=document.getElementById('senhaconf').value

    validarpessoa()
    if(erros.length==0){
    pessoa={
        nome:_nome,
        sobrenome:_sobrenome,
        idade: _idade,
        email:_email,
        senha:_senha
    } 
    pessoas.push(pessoa) 
    document.getElementById('retorno').innerHTML='<div id="verde">cadastro realizado com sucesso.</div>'
    }else{
        document.getElementById('retorno').innerHTML='<div id="vermelho">'+erros.join('</div><div id="vermelho">')+'</div>'
    }
}   

function validarpessoa(){
    erros=[]
    if(_nome==''){
        erros.push('insira um nome')
    }
    if(isNaN(_idade)){
        erros.push('insira uma idade.')
    }
    if(_idade<0){
        erros.push('idade inválida')
    }
    if(_email==''){
        erros.push('insira um email')
    }
    if(_senha != _senhaconf){
        erros.push('as senhas não correspondem')
    }
    if(_senha.length<3){
        erros.push('a senha deve ter no minimo 3 caracteres')
    }
    for(i=0;i<pessoas.length;i++){
        if(_email==pessoas[i].email)
            erros.push('esse email já existe')
    }
}

function mostrarcadastro(){

    texto='<b>pessoas cadastradas</b>'
    texto+='<table border><tr><th>nome</th><th>sobrenome</th><th>idade</th><th>cidade</th>'
    for(i=0;i<pessoas.length;i++){
        texto+='<tr><td>'+pessoas[i].nome+'</td><td>'+pessoas[i].sobrenome+'</td><td>'+pessoas[i].idade+'</td><td>'+pessoas[i].email+'</td><td><button id="delete" onclick="delcadastro('+i+')"><i class="fa fa-trash"></i></button></td></tr>'
    }
    texto+='</table>'

    document.getElementById('retorno').innerHTML=texto
}  

function delcadastro(i){
    pessoas.splice(i,1)
    mostrarcadastro()
}

function entrar(){
    email=document.getElementById('email').value
    senha=document.getElementById('senha').value
    p=-1
    for(i=0;i<pessoas.length;i++){
        if(email==pessoas[i].email){
            p=i
        }
    }
    if(p!=-1){
        if(senha==pessoas[p].senha){
            document.getElementById('retorno').innerHTML='<div id="verde">login feito com sucesso.</div>'
        }else{
            document.getElementById('retorno').innerHTML='<div id="vermelho">a senha está incorreta.</div>'
        }
    }else{
        document.getElementById('retorno').innerHTML='<div id="vermelho">essa conta não existe.</div>'
    }
}