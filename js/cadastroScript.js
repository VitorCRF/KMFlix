
var prosseguir = false;
var nome;
var dataNascimento;
var email;
var senha;
var confirmarSenha;

$(document).ready(function(){

    $("#botaoProsseguir").click(function(){
        nome = $("#campoNome").val();
        dataNascimento = $("#campoNascimento").val();
        email = $("#campoEmail").val();
        senha = sjcl.hash.sha256.hash($("#campoSenha").val());
        confirmarSenha = sjcl.hash.sha256.hash($("#campoConfirmaSenha").val());

        verificaNome();
        verificaNascimento();
        
        verificaSenha();
        

    });
    
});

function verificaNome() {

    if (nome != "") {
        prosseguir = true;
    }
    else {
        prosseguir = false;
        alert("Por favor insira o nome.")
    }

}

function verificaNascimento() {

    if (dataNascimento != "") {
        prosseguir = true;
    }
    else {
        prosseguir = false;
        alert("Por favor insira a data de nascimento.")
    }

}

function verificaEmail() {

    if (email != "") {
        prosseguir = true;
    }
    else {
        prosseguir = false;
        alert("Por favor insira o email.")
    }

}

function verificaSenha() {

    if (JSON.stringify(senha) === JSON.stringify(confirmarSenha)) {
        prosseguir = true;
        console.log("deu boa");
    }
    else {
        prosseguir = false;
        alert("A senha não corresponde a confirmação.")
    }

}



