$(document).ready(function() {

    var email = sessionStorage.getItem("login");

    $.ajax({
        type: "POST",
        url: "../php/cadastroFinalizado.php",
        data: { emailDestinatario: email },

        sucees: emailSucess()
    })

});

function emailSucess() {

    console.log("Email de confirmação enviado.")

}