var prosseguir = false;
var nome;
var cpf;
var numeroCartao;
var digitoVerificador;
var validade;

$(document).ready(function(){

    $("#botaoProsseguir").click(function(){
        nome = $("#Nome").val();
        cpf = $("#CPF").val();
        numeroCartao = $("#Cartao").val();
        digitoVerificador = $("#DigitoCartao").val();
        validade = $("#Validade").val();

        
        verificaCampos();

    });    
});


function verificaCampos() {
    if (nome != "") {
        prosseguir = true;
        $("#Nome").removeClass("campoInvalido").addClass("campoNome");
    }
    else {
        prosseguir = false;
        $("#Nome").removeClass("campoNome").addClass("campoInvalido");
        alert("Por favor insira o nome.")
        return false;
    }

    if (cpf.length == 11) {
        prosseguir = true;
        $("#CPF").removeClass("campoInvalido").addClass("campoNome");
    }
    else {
        prosseguir = false;
        $("#CPF").removeClass("campoNome").addClass("campoInvalido");       
        alert("Por favor insira um CPF válido! (Apenas números, 11 dígitos)");
        return false;
    }

    if (numeroCartao.length == 16) {
        $("#Cartao").removeClass("campoInvalido").addClass("campoNome");
        prosseguir = true;
    }
    else {
        prosseguir = false;
        $("#Cartao").removeClass("campoNome").addClass("campoInvalido");
        alert("Por favor insira um cartão válido!");
        return false;
    }


    if (digitoVerificador.length == 3) {
        prosseguir = true;
        $("#DigitoCartao").removeClass("verificaInvalido").addClass("verificaCartao");
    }
    else {
        prosseguir = false;
        $("#DigitoCartao").removeClass("verificaCartao").addClass("verificaInvalido");
        alert("Digito verificador inválido!")
        return false;
    }


    if (validade.length == 5) {
        prosseguir = true;
        $("#Validade").removeClass("verificaInvalido").addClass("verificaCartao");

    }
    else {
        prosseguir = false;
        $("#Validade").removeClass("verificaCartao").addClass("verificaInvalido");
        alert("Validade incorreta!")
        return false;
    }

}

