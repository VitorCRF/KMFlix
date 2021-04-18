var prosseguir = false;
var nome;
var cpf;
var numeroCartao;
var digitoVerificador;
var validade;
var table = document.getElementById("tableCartao");
var row;
var cell;
var rowIndex;
$(document).ready(function(){

    $("#botaoProsseguir").click(function(){
        nome = $("#Nome").val();
        cpf = $("#CPF").val();
        numeroCartao = $("#Cartao").val();
        digitoVerificador = $("#DigitoCartao").val();
        validade = $("#Validade").val();

        if(verificaCampos()){
            enviarInfos();
        }


    });    
});


function verificaCampos() {
    if (nome != "") {
        prosseguir = true;
        $("#Nome").removeClass("campo-text-input-invalido");
    }
    else {
        prosseguir = false;
        $("#Nome").addClass("campo-text-input-invalido");

            rowIndex = $("#rowNome").index();

            row = table.insertRow(rowIndex + 1);
            cell = row.insertCell(0);
            cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira seu nome</p>";
        
        return false;
    }

    if (cpf.length == 11) {
        prosseguir = true;
        $("#CPF").removeClass("campo-text-input-invalido");
    }
    else {
        prosseguir = false;
        $("#CPF").addClass("campo-text-input-invalido");       
        return false;
    }

    if (numeroCartao.length == 16) {
        $("#Cartao").removeClass("campo-text-input-invalido");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#Cartao").addClass("campo-text-input-invalido");
        return false;
    }
    
    if (digitoVerificador.length == 3) {
        prosseguir = true;
        $("#DigitoCartao").removeClass("verificaInvalido");
    }
    else {
        prosseguir = false;
        $("#DigitoCartao").addClass("verificaInvalido");
        return false;
    }


    if (validade.length == 5) {
        prosseguir = true;
        $("#Validade").removeClass("verificaInvalido");

    }
    else {
        prosseguir = false;
        $("#Validade").addClass("verificaInvalido");
        return false;
    }
    return true;

}


function enviarInfos() {

    $.ajax({
        type: "POST",
            url: "../php/salvaCartao.php",
            data: {               
                nome: nome,
                cpf: cpf,
                numero: numeroCartao,
                validade: validade,
                verificador: digitoVerificador
            },    
            success: ajaxSucess()    
    })

}
function ajaxSucess() {

    console.log("ajax de cadastro user enviado para o php")

}

