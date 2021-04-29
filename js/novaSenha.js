var senha = "";
var email = "";

$(document).ready(function() {

    $(".botao-prosseguir").click(function() {
        comunicaPhp();
    })
});

function comunicaPhp() {
    email = sessionStorage.getItem("email");

    if (email === "") {

        senha = $("#novaSenhaHash").val();


        $.ajax({
            type: "POST",
            url: "../php/novaSenha.php",
            data: { email: email, email: senha },

            sucees: senhaSucess()
        })

    } else {

        $.ajax({
            type: "POST",
            url: "../php/novaSenha.php",
            data: { email: email, email: senha },

            sucees: senhaSucess()
        })

    }

}

function senhaSucess() {

    console.log("nova senha cadastrada")
    window.location = "../html/index.html";

}