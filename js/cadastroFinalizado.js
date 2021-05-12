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
  
  console.log("email de confirmação de conta enviado. email: " + email)
  
}

