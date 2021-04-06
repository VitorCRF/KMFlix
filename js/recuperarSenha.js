var email = "";

$(document).ready(function(){

    $(".botao-prosseguir").click(function() {
        comunicaPhp();
    })

    $(".botao-novo-email").click(function() {
        reenviarEmail();
    })
    
});

function comunicaPhp() {

    if (email === "") {

        email = $("#campoEmail").val();

        sessionStorage.setItem("email", email);

        $.ajax({
            type: "POST",
            url: "../php/recuperarSenha.php",
            data: { emailDestinatario: email},
    
            sucees: emailSucess()
        })

    }
    else {

        $.ajax({
            type: "POST",
            url: "../php/recuperarSenha.php",
            data: { emailDestinatario: email},
    
            sucees: emailSucess()
        })

    }

}

function emailSucess() {

    window.location="../html/confirmacaoRecuperarSenha.html";

}

function reenviarEmail() {

    if (sessionStorage.getItem("email") != "") {

        email = sessionStorage.getItem("email");

        $.ajax({
            type: "POST",
            url: "../php/recuperarSenha.php",
            data: { emailDestinatario: email},
    
            sucees: console.log("Email reenviado.")
        })

    }

}