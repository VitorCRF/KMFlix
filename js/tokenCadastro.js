var inputToken = "";
var email = sessionStorage.getItem("emailCadastro");

$(document).ready(function() {



});

function confirmarToken() {

    inputToken = $("#inputTokenCadastro").val();

    if (inputToken.length === 5) {
        enviarToken();
    }
    else {
        alert("Por favor insira um token válido.")
    }

}

function enviarToken() {

    $.ajax({
        type: "POST",
        url: "../php/tokenCadastro.php",
        data: {
            token: inputToken,
            email : email,
        },
        sucess: ajaxSuccess()
    })

}

function ajaxSuccess() {
    console.log("ajax enviado")
    window.location.href = "../html/contaAtivada.html";
}