
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

        verificaInfos()

        sessionStorage.setItem("emailCadastro", email);
        
        if (prosseguir === true) {
            enviarInfos();
            console.log("Prosseguir true")
        }
        else {
            console.log("Prosseguir false")
        }

    });
    
});

function verificaInfos() {

    if (nome != "") {
        $("#campoNome").removeClass("campo-cadastro-invalido").addClass("campo-cadastro");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#campoNome").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        
        var table = document.getElementById("tableCadastro");
        var rowIndex = $("#rowNome").index();

        var row = table.insertRow(rowIndex + 1);
        var cell = row.insertCell(0);
        cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira seu nome</p>";

    }


    if (dataNascimento != "") {
        $("#campoNascimento").removeClass("campo-cadastro-invalido").addClass("campo-cadastro");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#campoNascimento").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        
        var table = document.getElementById("tableCadastro");
        var rowIndex = $("#rowNascimento").index()

        var row = table.insertRow(rowIndex + 1);
        var cell = row.insertCell(0);
        cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira sua data de nascimento</p>";

    }


    if (email != "") {
        $("#campoEmail").removeClass("campo-cadastro-invalido").addClass("campo-cadastro");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#campoEmail").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        
        var table = document.getElementById("tableCadastro");
        var rowIndex = $("#rowEmail").index()

        var row = table.insertRow(rowIndex + 1);
        var cell = row.insertCell(0);
        cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira um email válido</p>";

    }


    if ($("#campoSenha").val() != "" && $("#campoConfirmaSenha").val() != "") {
        senha = sjcl.hash.sha256.hash($("#campoSenha").val());
        confirmarSenha = sjcl.hash.sha256.hash($("#campoConfirmaSenha").val());
        confirmaSenha();
        console.log("Senha não vazia")
    }
    else {
        $("#campoSenha").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        $("#campoConfirmaSenha").removeClass("campo-cadastro").addClass("campo-cadastro-invalido");
        
        var table = document.getElementById("tableCadastro");
        var rowIndex = $("#rowSenha").index()

        var row = table.insertRow(rowIndex + 1);
        var cell = row.insertCell(0);
        cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira uma senha válida</p>";

    }

}

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

    console.log("senha: " + JSON.stringify(senha))

    $.ajax({

        type: "POST",
            url: "../php/salvaCadastro.php",
            data: { 
                
                nome: nome,
                nascimento: dataNascimento,
                email: email,
                senha: senha,
                confirmaSenha: confirmarSenha,
            
            },
    
            sucees: ajaxSucess()

    })

}

function ajaxSucess() {

    console.log("ajax de cadastro user enviado para o php")
    

}