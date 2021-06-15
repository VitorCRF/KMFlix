
var prosseguir = false;
var nome;
var dataNascimento;
var email;
var senha;
var confirmarSenha;

//variaveis para controle do texto referente a um input invalido

var table = document.getElementById("tableCadastro");
var row;
var cell;
var rowIndex;

var textoNomeInvalido = false;
var textoNascimentoInvalido = false;
var textoEmailInvalido = false;
var textoSenhaInvalida = false;
var textoconfirmarSenhaInvalida = false;

$(document).ready(function(){

    $("#botaoProsseguir").click(function(){
        nome = $("#campoNome").val();
        dataNascimento = $("#campoNascimento").val();
        email = $("#campoEmail").val();



        if (verificaInfos() && confirmaSenha()) {
            sessionStorage.setItem("emailCadastro", email);
            enviarInfos();
        }

    });
    
});

function verificaInfos() {

    if (nome != "") {
        $("#campoNome").removeClass("campo-cadastro-invalido");
        prosseguir = true;

        if (textoNomeInvalido === true) {
            rowIndex = $("#rowNome").index();
            table.deleteRow(rowIndex + 1);
            textoNomeInvalido = false;
        }
    }
    else {
        prosseguir = false;
        $("#campoNome").addClass("campo-cadastro-invalido");
        
        if (textoNomeInvalido === false) {

            textoNomeInvalido = true;

            rowIndex = $("#rowNome").index();

            row = table.insertRow(rowIndex + 1);
            cell = row.insertCell(0);
            cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira seu nome</p>";
            
        }
        return false;
    }


    if (dataNascimento != "") {
        $("#campoNascimento").removeClass("campo-cadastro-invalido");
        prosseguir = true;

        if (textoNascimentoInvalido === true) {
            rowIndex = $("#rowNascimento").index();
            table.deleteRow(rowIndex + 1);
            textoNascimentoInvalido = false;
        }
    }
    else {
        prosseguir = false;
        $("#campoNascimento").addClass("campo-cadastro-invalido");
        
        if (textoNascimentoInvalido === false) {

            textoNascimentoInvalido = true;

            rowIndex = $("#rowNascimento").index()

            row = table.insertRow(rowIndex + 1);
            cell = row.insertCell(0);
            cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira sua data de nascimento</p>";
            return false;

        }
        
    }


    if (email != "") {
        $("#campoEmail").removeClass("campo-cadastro-invalido");
        prosseguir = true;

        if (textoEmailInvalido === true) {
            rowIndex = $("#rowEmail").index();
            table.deleteRow(rowIndex + 1);
            textoEmailInvalido = false;
            return false;
        }
    }
    else {
        prosseguir = false;
        $("#campoEmail").addClass("campo-cadastro-invalido");

        if (textoEmailInvalido === false) {

            textoEmailInvalido = true;
            
            rowIndex = $("#rowEmail").index()

            row = table.insertRow(rowIndex + 1);
            cell = row.insertCell(0);
            cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira um email válido</p>";
            return false;
        }      
    }


    if ($("#campoSenha").val() != "" && $("#campoConfirmaSenha").val() != "") {

        senha = sjcl.hash.sha256.hash($("#campoSenha").val());
        confirmarSenha = sjcl.hash.sha256.hash($("#campoConfirmaSenha").val());

        senha = sjcl.codec.hex.fromBits(senha);
        confirmarSenha = sjcl.codec.hex.fromBits(confirmarSenha);

        confirmaSenha();

        if (textoSenhaInvalida === true) {
            rowIndex = $("#rowSenha").index();
            table.deleteRow(rowIndex + 1);
            textoSenhaInvalida = false;

        }
        console.log("Senha não vazia")

    }
    else {
        $("#campoSenha").addClass("campo-cadastro-invalido");
        $("#campoConfirmaSenha").addClass("campo-cadastro-invalido");

        if (textoSenhaInvalida === false) {

            textoSenhaInvalida = true;

            rowIndex = $("#rowSenha").index()

            row = table.insertRow(rowIndex + 1);
            cell = row.insertCell(0);
            cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira uma senha válida</p>";
            return false;
        } 
        
    }
    return true;

}

function confirmaSenha() {

    if (JSON.stringify(senha) === JSON.stringify(confirmarSenha)) {
        $("#campoSenha").removeClass("campo-cadastro-invalido");
        $("#campoConfirmaSenha").removeClass("campo-cadastro-invalido");
        prosseguir = true;
        console.log("Verificação de senha completa")
    }
    else {
        prosseguir = false;
        $("#campoConfirmaSenha").addClass("campo-cadastro-invalido");
        
        if (textoConfirmarSenhaInvalida === false) {

            textoconfirmarSenhaInvalida = true;

            rowIndex = $("#rowConfirmarSenha").index()

            row = table.insertRow(rowIndex + 1);
            cell = row.insertCell(0);
            cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira uma senha válida</p>";
            return false;

        } 

    }
    return true;

}

function enviarInfos() {
    $.ajax({
        type: "POST",
            url: "../php/salvaCadastro.php",
            data: {               
                nome: nome,
                nascimento: dataNascimento,
                email: email,
                senha: senha
            },   
            success: ajaxSuccess()
    })
}
function ajaxSuccess() {
    console.log("ajax de cadastro user enviado para o php")
    window.location.href = "../html/planos.html";

}