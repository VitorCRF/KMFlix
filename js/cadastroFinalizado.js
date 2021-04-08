var email = "";
    email = sessionStorage.getItem("emailCadastro");
$(document).ready(function() {

    $.ajax({
        type: "POST",
        url: "../php/cadastroFinalizado.php",
        data: { emailDestinatario: email},

        sucees: emailSucess()
    })

});

function emailSucess() {

    console.log("Email de confirmação enviado.")
    console.log(email)
}