
$(document).ready(function() {

    var email = sessionStorage.getItem("emailCadastro");

    console.log("email sessionStorage: " + email)

    $.ajax({
        type: "POST",
        url: "../php/cadastroFinalizado.php",
        data: { emailDestinatario: email},

        sucees: emailSucess()
    })

});

function emailSucess() {

    console.log("ajax de email de confirmação enviado.")

}