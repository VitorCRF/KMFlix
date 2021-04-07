
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

        verificaNome();
        verificaNascimento();
        verificaEmail();
        verificaSenha();
        
        if (prosseguir === true) {
            enviarInfos();
            console.log("Prosseguir true")
            window.location = "../html/planos.html"
        }
        else {
            console.log("Prosseguir false")
        }

    });
    
});

function verificaNome() {

    if (nome != "") {
        $("#campoNome").removeClass("campo-cadastro-invalido").addClass("campo-cadastro");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#campoNome").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        alert("Por favor insira o nome.")
    }

}

function verificaNascimento() {

    if (dataNascimento != "") {
        $("#campoNascimento").removeClass("campo-cadastro-invalido").addClass("campo-cadastro");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#campoNascimento").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        alert("Por favor insira a data de nascimento.")
    }

}

function verificaEmail() {

    if (email != "") {
        $("#campoEmail").removeClass("campo-cadastro-invalido").addClass("campo-cadastro");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#campoEmail").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        alert("Por favor insira o email.")
    }

}

function verificaSenha() {

    if ($("#campoSenha").val() != "" && $("#campoConfirmaSenha").val() != "") {
        senha = sjcl.hash.sha256.hash($("#campoSenha").val());
        confirmarSenha = sjcl.hash.sha256.hash($("#campoConfirmaSenha").val());
        confirmaSenha();
        console.log("Senha não vazia")
    }
    else {
        $("#campoSenha").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        $("#campoConfirmaSenha").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        console.log("Senha Vazia")
    }

}

function confirmaSenha() {

    if (JSON.stringify(senha) == JSON.stringify(confirmarSenha)) {
        $("#campoSenha").removeClass("campo-cadastro-invalido").addClass("campo-cadastro");
        $("#campoConfirmaSenha").removeClass("campo-cadastro-invalido").addClass("campo-cadastro");
        prosseguir = true;
        console.log("Verificação de senha completa")
    }
    else {
        prosseguir = false;
        $("#campoConfirmaSenha").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        alert("A senha não corresponde a confirmação.")
    }

}

function enviarInfos() {

}