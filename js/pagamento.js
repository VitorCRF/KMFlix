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

var textoNomeInvalido = false;
var textoCpfInvalido = false;
var textoCartaoInvalido = false;
var textoCCVInvalido = false;
var textoValidadeInvalida = false;

$(document).ready(function(){

    $("#botaoProsseguir").click(function(){
        nome = $("#Nome").val();
        cpf = $("#CPF").val();
        numeroCartao = $("#Cartao").val();
        digitoVerificador = $("#DigitoCartao").val();
        validade = $("#Validade").val();

        table = document.getElementById("tableCartao");

        if(verificaCampos()){
            enviarInfos();
        }


    });    
});


function verificaCampos() {
    if (nome != "") {
        prosseguir = true;
        $("#Nome").removeClass("campo-text-input-invalido");

        if (textoNomeInvalido === true) {
            rowIndex = $("#rowNome").index();
            table.deleteRow(rowIndex + 1)
            textoNomeInvalido = false;
        }

    }
    else {
        prosseguir = false;
        $("#Nome").addClass("campo-text-input-invalido");

        if (textoNomeInvalido === false) {
            rowIndex = $("#rowNome").index();

            row = table.insertRow(rowIndex + 1);
            cell = row.insertCell(0);
            cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira seu nome</p>";
            textoNomeInvalido = true;
        } 

        return false;
    }

    if (cpf.length == 11) {
        prosseguir = true;
        $("#CPF").removeClass("campo-text-input-invalido");

        if (textoCpfInvalido === true) {
            rowIndex = $("#rowCpf").index();
            table.deleteRow(rowIndex + 1);
            textoCpfInvalido = false;
        }

    }
    else {
        prosseguir = false;
        $("#CPF").addClass("campo-text-input-invalido");   
        
        if (textoCpfInvalido === false) {
            rowIndex = $("#rowCpf").index();

            row = table.insertRow(rowIndex + 1);
            cell = row.insertCell(0);
            cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira um cpf válido</p>";
            textoCpfInvalido = true;
        }

        return false;
    }

    if (numeroCartao.length == 16) {
        $("#Cartao").removeClass("campo-text-input-invalido");
        prosseguir = true;

        if (textoCartaoInvalido === true) {
            rowIndex = $("#rowCartao").index();
            table.deleteRow(rowIndex + 1);
            textoCartaoInvalido = false;
        }

    }
    else {
        prosseguir = false;
        $("#Cartao").addClass("campo-text-input-invalido");

        if (textoCartaoInvalido === false) {
            rowIndex = $("#rowCartao").index();

            row = table.insertRow(rowIndex + 1);
            cell = row.insertCell(0);
            cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira um cartão válido</p>";
            textoCartaoInvalido = true;
        }

        return false;
    }
    
    if (digitoVerificador.length == 3) {
        prosseguir = true;
        $("#DigitoCartao").removeClass("verificaInvalido");

        if (textoCCVInvalido === true && textoValidadeInvalida === true) {
            var rows = table.rows;
            rowIndex = $("#rowCcv").index() + 1;
            rows[rowIndex].deleteCell(0);
            textoCCVInvalido = false;
        }
        else if (textoCCVInvalido === true) {
            rowIndex = $("#rowCcv").index();
            table.deleteRow(rowIndex + 1);
            textoCCVInvalido = false;
        }
    }
    else {
        prosseguir = false;
        $("#DigitoCartao").addClass("verificaInvalido");

        if (textoCCVInvalido === false) {
            rowIndex = $("#rowCcv").index();

            row = table.insertRow(rowIndex + 1);
            cell = row.insertCell(0);
            cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira um ccv válido</p>";
            textoCCVInvalido = true;
        }

        return false;
    }

    if (validade.length == 5) {
        prosseguir = true;
        $("#Validade").removeClass("verificaInvalido");

        if (textoValidadeInvalida === true && textoCCVInvalido === true) {
            var rows = table.rows;
            rowIndex = $("#rowCcv").index() + 1;
            rows[rowIndex].deleteCell(1);
            textoValidadeInvalida = false;
        }
        else if (textoValidadeInvalida === true) {
            rowIndex = $("#rowCcv").index();
            table.deleteRow(rowIndex + 1);
            textoValidadeInvalida = false;
        }

    }
    else {
        prosseguir = false;
        $("#Validade").addClass("verificaInvalido");

        if (textoValidadeInvalida === false) {
            rowIndex = $("#rowCcv").index();

            if (textoCCVInvalido === false) {
                row = table.insertRow(rowIndex + 1);
                row.insertCell(0);
                cell = row.insertCell(1);
                cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira uma data válida</p>";
                textoValidadeInvalida = true;
            }
            else {
                row = (rowIndex + 1);
                cell = row.insertCell(1);
                cell.innerHTML = "<p class='p-campo-invalido'>Por favor insira uma data válida</p>";
                textoValidadeInvalida = true;
            }

        }
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
    window.location.href = "../html/cadastroFinalizado.html";
    

}

